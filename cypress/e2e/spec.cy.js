
import { homePage } from "../support/pages/homePage"
import testData from "../fixtures/testData.json"

describe('Amazon Home page tests', () => {

  beforeEach ('open home page', () => {
    cy.visit('/')
  })

  it('verify actual delivery location', () => {
    let expectedLocation = testData.impossibleDelivery
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
  })

  // it('verify giftcard button click', () => {
  //   const giftCardPage = homePage.clickGiftCardButton()
  //   giftCardPage.getEGiftCard().should('contain', 'eGift Cards') && giftCardPage.getPhysicalGiftCard().should('contain', 'Physical gift cards')
  // })  

  it('verify location icon click', () => {
    const selectLocationPage = homePage.clickActualDeliveryLocation()
    selectLocationPage.enterZipCode(testData.zipCode)
  })

})
