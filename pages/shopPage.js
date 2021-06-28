const selectors = {
    productPrice: productName => `//*[text()="${productName}"]/../p/span[contains(@class, "product-price")]`,
    productBuyButton: productName => `//*[text()="${productName}"]/../p/a[text()="Buy"]`
}

class ShopPage {
    clickBuy(productName) {
        $(selectors.productBuyButton(productName)).click()
    }

    getProductPrice(productName) {
        let prodPrice = $(selectors.productPrice(productName)).getText()
        return prodPrice.replace('$','')
    }
}

export const shopPage = new ShopPage()