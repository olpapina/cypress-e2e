import { GiftCardPage } from "./giftCardPage"
import { SelectLocationPage } from "./selectLocationPage"

class HomePage {
    constructor() {
        this.deliveryLocationIcon = '#nav-packard-glow-loc-icon'
        this.topMenuButton = 'button[#nav-hamburger-menu]'
        this.actualDeliveryLocation = '#glow-ingress-line2'
        this.navigateMenu = '#nav-xshop'
    }

    openHomePage() {
        cy.visit('/')
    }

    clickActualDeliveryLocation() {
        cy.get(this.deliveryLocationIcon).click()
        return new SelectLocationPage
    }

    getActualDeliveryLocation() {
        return cy.get(this.actualDeliveryLocation)
    }

    clickTopMenu() {
        cy.get(this.topMenuButton).click()
        //return new TopMenu  - will be added in task3
    }

    clickGiftCardButton() {
        cy.get(this.navigateMenu).find('Gift Cards').click()
        return new GiftCardPage
    }
}

export let homePage = new HomePage
