const ResultBlock = require("../../support/components/resultBlock")

export class ResultPage {
    constructor() {
        this.resultBlock = new ResultBlock()
        this.filters = '#filters'
    }

    getResultBlock() {
        return this.resultBlock
    }   
    
    getAdvancedSearchPanel() {
        return cy.get(this.filters)
    }
}