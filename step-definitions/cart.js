import { Then } from '@cucumber/cucumber'
import { cartPage } from '../pages/cartPage'
import { calls } from '../fetchAPI'

Then(/^The user will see all the added products in cart$/, function () {
	let allProducts = this.getProducts()
	for (let i = 0; i < allProducts.length; i++) {
		cartPage.checkProductDisplay(allProducts[i])
	}
})

Then(
	/^The user will see the correct prices for each ordered product$/,
	function () {
		let products = this.getProducts()
		let prices = this.getProductPrices()
		for (let i = 0; i < products.length; i++) {
			cartPage.checkProductPrice(products[i], prices[i])
		}
	}
)

Then(
	/^The user will see the correct subtotal of each ordered product$/,
	function () {
		let products = this.getProducts()
		for (let i = 0; i < products.length; i++) {
			cartPage.checkProductSubtotal(products[i])
		}
	}
)

Then(
	/^The user will see the total price of all ordered products$/,
	function () {
		cartPage.checkTotalOrderPrice()
	}
)
