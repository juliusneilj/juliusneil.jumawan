const selectors = {
	productPrice: (productName) =>
		`//*[@class="product-title" and text()="${productName}"]/../p/span[@class="product-price"]`,
	productBuyButton: (productName) =>
		`//*[text()="${productName}"]/../p/a[text()="Buy"]`,
	itemAddedMessage:
		'//div[@class="cdk-overlay-container"]//snack-bar-container',
}

class ShopPage {
	open() {
		browser.url('/toy-list')
	}

	clickBuy(productName) {
		$(selectors.productBuyButton(productName)).click()
		$(selectors.itemAddedMessage).waitForExist({ reverse: true })
	}

	getProductPrice(productName) {
		let prodPrice = $(selectors.productPrice(productName)).getText()
		return prodPrice.replace('$', '')
	}
}

export const shopPage = new ShopPage()
