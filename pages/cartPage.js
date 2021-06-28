const selectors = {
    cartItemList: '//*[contains(@class, "cart-items")]',
    cartItems: '//*[@ng-repeat="item in cart.items()"]/td',
    cartItemName: productName => `//*[@ng-repeat="item in cart.items()"]/td[text()=" ${productName}"]`,
    cartItemPrice: productName => `//*[@ng-repeat="item in cart.items()"]/td[text()=" ${productName}"]/following-sibling::td[1]`,
    cartItemQuantity: productName => `//*[@ng-repeat="item in cart.items()"]/td[text()=" ${productName}"]/following-sibling::td/input[@ng-model="item.count"]`,
    cartItemSubtotal: productName => `//*[@ng-repeat="item in cart.items()"]/td[text()=" ${productName}"]/following-sibling::td[3]`,
    orderTotal: '//*[@class="total ng-binding"]'
}

let itemSubtotal = []

class CartPage {

    checkProductDisplay(productName) {
        expect($(selectors.cartItemName(productName))).toBeDisplayed({message: `${productName} is not displayed in cart.`})
    }

    checkProductPrice(productName, productPrice) {
        let expectedPrice = productPrice
        let actualPrice = $(selectors.cartItemPrice(productName)).getText()
        expect(actualPrice.replace('$','')).toEqual(expectedPrice, {message: `${productName} price in cart is incorrect.`})
    }

    checkProductSubtotal(productName) {
        let quantity = $(selectors.cartItemQuantity(productName)).getValue()
        let productPrice = $(selectors.cartItemPrice(productName)).getText()
        let expectedSubtotal = productPrice.replace('$','') * quantity
        let actualSubtotal = $(selectors.cartItemSubtotal(productName)).getText()
        let itemSub = parseFloat(actualSubtotal.replace('$', ''))
        itemSubtotal.push(itemSub)
        expect(actualSubtotal.replace('$','')).toEqual(expectedSubtotal.toString(), {message: `${productName} subtotal in cart is incorrect.`})
    }

    checkTotalOrderPrice() {
        let expectedTotal = 0
        for(let i = 0; i < itemSubtotal.length; i++) {
            expectedTotal += itemSubtotal[i]
        }
        let actualTotal = $(selectors.orderTotal).getText()
        expect(actualTotal.replace('Total: ', '')).toEqual(expectedTotal.toString(), {message: 'Order Total is incorrect.'})
    }
}

export const cartPage = new CartPage()