import { When } from '@cucumber/cucumber'
import { shopPage } from '../pages/shopPage'

When(
	/^The user buys "([^"]*)" "([^"]*)" in the shop$/,
	function (count, productName) {
		for (let i = 0; i < count; i++) {
			shopPage.clickBuy(productName)
		}
		let price = shopPage.getProductPrice(productName)
		this.setProductPrices(price)
		this.setProductCount(count)
		this.setProducts(productName)
	}
)

When(/^The user buys the products$/, function (dataTable) {
	let data = dataTable.hashes()
	for (let c = 0; c < data.length; c++) {
		let quantity = data[c].quantity
		let productName = data[c].product
		for (let i = 0; i < quantity; i++) {
			shopPage.clickBuy(productName)
		}
		let price = shopPage.getProductPrice(productName)

		this.setProductDetails(productName, price, quantity)
	}
})
