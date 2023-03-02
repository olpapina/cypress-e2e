import { ProductPage } from "./productPage";
import { ResultPage } from "./resultPage";

export class GiftCardPage {
    constructor() {
        this.typeEGiftCard = '[alt="eGift Cards"].bxc-grid__image'
        this.typePhysicalGiftCard = '[alt="Physical gift cards"].bxc-grid__image'
    }

    selectTypeGiftCard(typeValue) {
        let resultPage;
        switch (typeValue) {
            case 'eGift':
                cy.get(this.typeEGiftCard).click()
                resultPage = new ProductPage
                break;
            case 'Mail':
                cy.get(this.typePhysicalGiftCard).click()
                resultPage = new ResultPage
                break;
            default:
                console.log("Error: type is not choise")

        }
    }

    getEGiftCard() {
        cy.get(typeEGiftCard)
    }

    getPhysicalGiftCard() {
        cy.get(typePhysicalGiftCard)
    }
    
}