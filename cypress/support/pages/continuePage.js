export class ContinuePage {
    constructor() {
        this.continueButton = '.a-popover-footer'
    }

    clickContinueButton() {
        cy.get(this.continueButton).contains('Continue').click({force: true})
    }
}