const selectors = {
    homeLink: '=Home',
    shopLink: '=Shop',
    contactLink: '=Contact',
    loginLink: '=Login',
    cartLink: '*=Cart',
    startShoppingButton: '*=Start Shopping',
}

class HomePage {
    
    open() {
        browser.url('/#/home')
    }
    
    clickHomeLink() {
        $(selectors.homeLink).click()
    }
    
    clickShopLink() {
        $(selectors.shopLink).click()
    }

    clickContactLink() {
        $(selectors.contactLink).click()
    }

    clickLoginLink() {
        $(selectors.loginLink).click()
    }

    clickCartLink() {
        $(selectors.cartLink).click()
    }

    clickShoppingButton() {
        $(selectors.startShoppingButton).click()
    }

}

export const homePage = new HomePage()