import { When } from 'cucumber'
import { shopPage } from '../pages/shopPage'

When(/^The user buys "([^"]*)" "([^"]*)" in the shop$/, function (count, productName) {
    for(let i = 0; i < count; i++) {
        shopPage.clickBuy(productName)    
    }
    let price = shopPage.getProductPrice(productName)
    this.setProductPrices(price)
    this.setProductCount(count) 
    this.setProducts(productName)
})

