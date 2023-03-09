import { SelectLocationPage } from "../pages/selectLocationPage"

class LocationPopUp {
    constructor() {
        this.changeAddressButton = '.glow-toaster-button-submit'
        this.notChangeButton = '.glow-toaster-button-dismiss'
        this.locationPopUpBody = '#glow-toaster-body'
    }

    clickChangeAddressButton() {
        cy.get(this.changeAddressButton).click()
        return new SelectLocationPage
    }

    clickNotChangeButton() {
        cy.get(this.notChangeButton).click()
    }

    getPopUpBody() {
        return cy.get(this.locationPopUpBody)
    }
}

module.exports = LocationPopUp