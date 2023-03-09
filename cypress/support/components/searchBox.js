
import testData from "../../fixtures/testData.json"
import { ResultPage } from "../pages/resultPage"

export class SearchBox {
    constructor() {
        this.searchField = '#twotabsearchtextbox'
        this.searchButton = '#nav-search-submit-button'
    }

    typeSearchedProduct(text) {
        cy.get(this.searchField).type(text)
    }

    clickSearchButton() {
        cy.get(this.searchButton).click()
        return new ResultPage
    }
}

module.exports = SearchBox