import { GiftCardPage } from "../pages/giftCardPage"

export class TopDropMenu {
    constructor() {
        this.seeAllButtons = '.hmenu-compressed-btn'
        this.topDropMenu = '#hmenu-content'
        this.giftMenu = '[class="hmenu hmenu-visible hmenu-translateX"'
    }

    clickGiftCardButton() {
        cy.get(this.seeAllButtons).eq(1).click()
        cy.get(this.topDropMenu).contains('Gift Cards').click()
        cy.get(this.giftMenu).contains('All gift cards').click( {force: true})
        return new GiftCardPage
    }
}

module.exports = TopDropMenu