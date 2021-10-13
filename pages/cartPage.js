const selectors = {
	cartItemList: '//*[contains(@class, "cart-items")]',
	cartItems: '//*[@ng-repeat="item in cart.items()"]/td',
	cartItemName: (productName) => cartPage.productItem(productName),
	cartItemPrice: (productName) =>
		`${cartPage.productItem(productName)}/following-sibling::td[1]`,
	cartItemQuantity: (productName) =>
		`${cartPage.productItem(
			productName
		)}/following-sibling::td[contains(@class, "quantity")]/input`,
	cartItemSubtotal: (productName) =>
		`${cartPage.productItem(productName)}/following-sibling::td[3]`,
	orderTotal: '//td[contains(@class,"column-total")]/strong',
	emptyCartButton: '//a[contains(@class, "empty") and text()=" Empty Cart"]',
}

let itemSubtotal = []

class CartPage {
	open() {
		browser.url('/cart')
	}

	productItem(productName) {
		return `//td[contains(@class, "item") and text()=" ${productName} "]`
	}

	checkProductDisplay(productName) {
		expect($(selectors.cartItemName(productName))).toBeDisplayed({
			message: `${productName} is not displayed in cart.`,
		})
	}

	checkProductPrice(productName, productPrice) {
		let expectedPrice = productPrice
		let actualPrice = $(selectors.cartItemPrice(productName)).getText()
		expect(actualPrice.replace('$', '')).toEqual(expectedPrice, {
			message: `${productName} price in cart is incorrect.`,
		})
	}

	checkProductSubtotal(productName) {
		let quantity = $(selectors.cartItemQuantity(productName)).getValue()
		let productPrice = $(selectors.cartItemPrice(productName)).getText()
		let expectedSubtotal = productPrice.replace('$', '') * quantity
		let actualSubtotal = $(selectors.cartItemSubtotal(productName)).getText()
		let itemSub = parseFloat(actualSubtotal.replace('$', ''))
		itemSubtotal.push(itemSub)
		expect(actualSubtotal.replace('$', '')).toEqual(
			expectedSubtotal.toString(),
			{ message: `${productName} subtotal in cart is incorrect.` }
		)
	}

	checkTotalOrderPrice() {
		let expectedTotal = 0
		for (let i = 0; i < itemSubtotal.length; i++) {
			expectedTotal += itemSubtotal[i]
		}
		console.log(expectedTotal)
		let actualTotal = $(selectors.orderTotal).getText()
		console.log(actualTotal)
		expect(actualTotal.replace('Total ', '')).toEqual(
			expectedTotal.toString(),
			{ message: 'Order Total is incorrect.' }
		)
	}
}

export const cartPage = new CartPage()
