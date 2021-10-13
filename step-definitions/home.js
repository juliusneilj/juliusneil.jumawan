import { When, Given } from '@cucumber/cucumber'
import { cartPage } from '../pages/cartPage'
import { contactPage } from '../pages/contactPage'
import { homePage } from '../pages/homePage'
import { shopPage } from '../pages/shopPage'

Given(
	/^The user is in the (Home|Shop|Contact|Login|Cart) page$/,
	{ wrapperOptions: { retry: 2 } },
	(link) => {
		switch (link) {
			case 'Home':
				homePage.open()
				break
			case 'Shop':
				shopPage.open()
				break
			case 'Contact':
				contactPage.open()
				break
			case 'Cart':
				cartPage.open()
				break
			default:
				homePage.clickLoginLink()
		}
	}
)

When(/^The user clicks the (Home|Shop|Contact|Login|Cart|) link$/, (link) => {
	switch (link) {
		case 'Home':
			homePage.clickHomeLink()
			break
		case 'Shop':
			homePage.clickShopLink()
			break
		case 'Contact':
			homePage.clickContactLink()
			break
		case 'Cart':
			homePage.clickCartLink()
			break
		default:
			homePage.clickLoginLink()
	}
})

When(/^The user clicks the Start Shopping button$/, () => {
	homePage.clickShoppingButton()
})
