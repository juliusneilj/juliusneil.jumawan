const selectors = {
	burgerButton: '//button[contains(@class, "menu-trigger")]',
	homeLink: '=Home',
	shopLink: 'span=Shop',
	contactLink:
		'//div[@class="cdk-overlay-container"]//span[@class="menu" and text()="Contact"]',
	loginLink: '=Login',
	cartLink: '//app-root//span[@class="menu" and text()="Cart"]',
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
		$(selectors.burgerButton).click()
		//$(selectors.contactLink).waitForExist()
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
