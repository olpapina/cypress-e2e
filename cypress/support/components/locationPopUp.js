import { SelectLocationPage } from "../pages/selectLocationPage"

class LocationPopUp {
    constructor() {
        this.changeAddressButton = '.glow-toaster-button-submit'
        this.notChangeButton = '.glow-toaster-button-dismiss'
    }

    clickChangeAddressButton() {
        cy.get(this.changeAddressButton).click()
        return new SelectLocationPage
    }

    clickNotChangeButton() {
        cy.get(this.notChangeButton).click()
    }
}

module.exports = LocationPopUp