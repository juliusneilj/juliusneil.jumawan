import { setWorldConstructor } from "cucumber"

class CustomWorld {
    constructor() {
        this.testData = {}
        this.products = []
        this.prices = []
        this.count = []
    }

    setTestData(key, value) {
        this.testData[key] = value
    }

    getTestData(key) {
        return this.testData[key]
    }

    setProducts(product) {
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    setProductPrices(price) {
        this.prices.push(price)
    }

    getProductPrices() {
        return this.prices
    }

    setProductCount(c) {
        this.count.push(c)
    }

    getProductCount() {
        return this.count
    }

}

setWorldConstructor(CustomWorld)