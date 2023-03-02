import { ProductPage } from "./productPage"

export class ResultPage {
    constructor() {
        this.resultImageItems = '[class="a-link-normal s-no-outline"]'
        this.resultLinks = '[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]'
    }

    clickResultLink(number) {
        cy.get(this.resultLinks.get(number)).click()
        return new ProductPage
    }

    getResultImageItem(number) {
        cy.get(this.resultImageItems.get(number))
    }

}