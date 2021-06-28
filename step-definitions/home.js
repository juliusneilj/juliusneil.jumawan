import { When, Given } from 'cucumber'
import { homePage } from '../pages/homePage'

When(/^The user clicks the (Home|Shop|Contact|Login|Cart) link$/, (link) => {
    switch(link) {
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

Given(/^The user views the Jupiter Toys homepage$/, () => {
    homePage.open()
})

When(/^The user clicks the Start Shopping button$/, () => {
    homePage.clickShoppingButton()
})