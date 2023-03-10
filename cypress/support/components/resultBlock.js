import { ProductPage } from "../pages/productPage"

class ResultBlock {
    constructor() {
        this.resultImageItems = '[class="a-link-normal s-no-outline"]'
        this.resultLinks = '[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]'
        this.resultSearchLinks = '[class = "a-size-mini a-spacing-none a-color-base s-line-clamp-2"]'
        this.spinner = '.a-spinner-wrapper'
    }

    clickResultLink(number) {
        cy.get(this.resultLinks).should('be.visible').eq(number).click()
        return new ProductPage()
    }

    getResultLinks() {
        return cy.get(this.resultLinks)
    }

    getResultSearchLinks() {
        return cy.get(this.resultSearchLinks)
    }

    waitUntilLoadingCircleHides() {
        cy.get(this.spinner).should('be.not.visible')
    }
}

module.exports = ResultBlock