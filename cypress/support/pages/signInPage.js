export class SignInPage {
    constructor() {
        this.emailField = '#ap_email'
        this.continue = '#continue'
    }

    typeEmail(email) {
        cy.get(this.emailField).type(email)
    }

    clickContinueButton() {
        cy.get(this.continue).click()
    }
}