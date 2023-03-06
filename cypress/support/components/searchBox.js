
import testData from "../../fixtures/testData.json"

export class SearchBox {
    constructor() {
        this.searchField = '#twotabsearchtextbox'
        this.searchButton = '#nav-search-submit-button'
    }

    typeSearchedProduct() {
        cy.get(this.searchField).type(testData.searchText)
    }

    clickSearchButton() {
        cy.get(this.searchButton).click()
    }
}

module.exports = SearchBox