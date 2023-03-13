import { SignInPage } from "../pages/signInPage"

class SignInPopUp {
    constructor() {
        this.popUp = '[class="nav-signin-tt nav-flyout"]'
        this.button = '.nav-action-inner'
    }

    clickSignInButton() {
        cy.get(this.button).contains('Sign in').click({force: true})
        return new SignInPage
    }
}

module.exports = SignInPopUp