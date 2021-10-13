import { setWorldConstructor } from '@cucumber/cucumber'

class CustomWorld {
	constructor() {
		this.productDetails = []
	}

	setProductDetails(productName, productPrice, quantity) {
		// this.productDetails.push({
		// 	product: `${productName}`,
		// 	price: `${productPrice}`,
		// 	quantity: `${quantity}`,
		// })
		let prodObj = {}
		prodObj.product = productName
		prodObj.price = productPrice
		prodObj.quantity = quantity
		this.productDetails.push(prodObj)
	}

	getProductDetails(productName) {
		for (let i = 0; i < this.productDetails.length; i++) {
			if (this.productDetails[i].product === `${productName}`) {
				console.log(this.productDetails[i])
				return this.productDetails[i]
			}
		}
	}

	getProducts() {
		let products = []
		for (let i = 0; i < this.productDetails.length; i++) {
			products.push(this.productDetails[i].product)
		}
		console.log(products)
		return products
	}

	getProductPrices() {
		let prices = []
		for (let i = 0; i < this.productDetails.length; i++) {
			prices.push(this.productDetails[i].price)
		}
		console.log(prices)
		return prices
	}

	getProductCount() {
		let quantity = []
		for (let i = 0; i < this.productDetails.length; i++) {
			quantity.push(this.productDetails[i].quantity)
		}
		console.log(quantity)
		return quantity
	}
}

setWorldConstructor(CustomWorld)
