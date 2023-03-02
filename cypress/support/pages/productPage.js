export class ProductPage {
    constructor() {
        this.deliveryValidationMessage = '.a-color-error'
        this.deliveryLocation = '#contextualIngressPtLabel_deliveryShortLine'
        this.deliveryType = '#gc-delivery-mechanism-button-Email-announce'
        this.addToCardButton = '#gc-buy-box-atc-button'
        this.buyNowButton = '#gc-buy-box-bn-button'
        this.inactiveAddToCart = '[#exportsUndeliverable-cart-announce].a-button-input'
    }

    getDeliveryValidationMessageText() {
        return cy.get(this.deliveryValidationMessage).outerText
    }

    getDeliveryValidationMessage() {
        return cy.get(this.deliveryValidationMessage)
    }

    isAddToCartButton(activeStatus) {
        if (activeStatus==='inactive') {
            if (cy.get(this.inactiveAddToCart)) return true
            else return false
        } else {
            if (cy.get(this.addToCardButton) && cy.get(this.buyNowButton)) return true
            else return false
        }
    }

    getDeliveryStatus() {
        return cy.get(this.deliveryLocation).outerText
    }

    getDeliveryType() {
        return cy.get(this.deliveryType).invoke('text')
    }
}