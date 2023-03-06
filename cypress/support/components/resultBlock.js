import { ProductPage } from "../pages/productPage"

class ResultBlock {
    constructor() {
        this.resultImageItems = '[class="a-link-normal s-no-outline"]'
        this.resultLinks = '[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]'
    }

    clickResultLink(number) {
        cy.get(this.resultLinks).eq(number).click()
        return new ProductPage()
    }

    getResultImageItem(number) {
        cy.get(this.resultImageItems.eq(number))
    }
}

module.exports = ResultBlock