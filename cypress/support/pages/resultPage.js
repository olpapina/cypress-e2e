const ResultBlock = require("../../support/components/resultBlock")

export class ResultPage {
    constructor() {
        this.resultBlock = new ResultBlock()
    }

    getResultBlock() {
        return this.resultBlock
    }    
}