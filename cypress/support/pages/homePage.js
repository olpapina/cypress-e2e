import { GiftCardPage } from "./giftCardPage"
import { SelectLocationPage } from "./selectLocationPage"
import { SignInPage } from "./signInPage"
const LocationPopUp = require("../../support/components/locationPopUp")
const TopDropMenu = require("../../support/components/topDropMenu")
const MenuBar = require("../../support/components/menuBar")
const SearchBox = require("../../support/components/searchBox")
const SignInPopUp = require("../../support/components/signInPopUp")

class HomePage {
    constructor() {
        this.locationPopUp = new LocationPopUp()
        this.topDropMenu = new TopDropMenu()
        this.menuBar = new MenuBar()
        this.searchBox = new SearchBox()
        this.signInPopUp = new SignInPopUp()
        this.deliveryLocationIcon = '#nav-packard-glow-loc-icon'
        this.topMenuButton = '#nav-hamburger-menu'
        this.actualDeliveryLocation = '#glow-ingress-line2'
        this.navigateMenu = '#nav-xshop'
        this.logo = '#nav-logo-sprites'
        this.signIn = '[class="nav-signin-tt nav-flyout"]'
    }

    openHomePage() {
        cy.visit('/')
    }

    clickActualDeliveryLocation() {
        cy.get(this.deliveryLocationIcon).click()
        return new SelectLocationPage()
    }

    getActualDeliveryLocation() {
        return cy.get(this.actualDeliveryLocation)
    }

    clickTopMenu() {
        cy.get(this.topMenuButton).click()
        return this.topDropMenu
    }

    clickGiftCardButton() {
        cy.get(this.navigateMenu).contains('Gift Cards').click()
        return new GiftCardPage()
    }

    getLocationPopUp() {
        return this.locationPopUp
    } 

    getTopDropMenu() {
        return this.topDropMenu
    }

    getMenuBar() {
        return this.menuBar
    }

    getSearchBox() {
        return this.searchBox
    }

    getLogo() {
        return cy.get(this.logo)
    }

    getSignIn() {
        return cy.get(this.signIn)
    }

    getSignInPopUp() {
        return this.signInPopUp
    }
}

export let homePage = new HomePage
