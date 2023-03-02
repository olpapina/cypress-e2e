import testData from "../../fixtures/testData.json"

export class SelectLocationPage {
    constructor() {
        this.enterZipCodeField = '#GLUXZipUpdateInput'
        this.dropDownIcon = '[class="a-icon a-icon-dropdown"]'
        this.applyButton = '#GLUXZipUpdate-announce'
    }

    enterZipCode() {
        cy.get(this.enterZipCodeField).type(testData.zipCode)
    }

    clickApplyButton() {
        cy.get(this.applyButton).click()
    }

    clickChooseLocation() {
        cy.get(this.dropDownIcon).click()
    }

}
