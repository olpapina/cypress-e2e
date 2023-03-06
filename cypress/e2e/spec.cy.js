
import { homePage } from "../support/pages/homePage"
import testData from "../fixtures/testData.json"

describe('Tests verify Gift Card Delivery according to location', () => {

  beforeEach('open home page', () => {
    homePage.openHomePage()
  })

  it('verify that delivery is impossible to Belarus', () => {
    let expectedLocation = testData.impossibleDelivery
    let expectedTextMessage = testData.validationMessage
    homePage.getLocationPopUp().clickNotChangeButton()
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
    const giftCardPage = homePage.getMenuBar().clickGiftCardTabButton()
    const resultPage = giftCardPage.selectTypeGiftCard('Mail')
    for (let i = 1; i < 3; i++) {
      const productPage = resultPage.getResultBlock().clickResultLink(i)
      productPage.getDeliveryValidationMessage().should('contain', expectedTextMessage)
      productPage.backToResultPage()
    }
  })


  it('verify that click Add to cart is impossible from Belarus', () => {
    let expectedLocation = testData.impossibleDelivery
    homePage.getLocationPopUp().clickNotChangeButton()
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
    const giftCardPage = homePage.getMenuBar().clickGiftCardTabButton()
    const resultPage = giftCardPage.selectTypeGiftCard('Mail')
    for (let i = 1; i < 2; i++) {
      const productPage = resultPage.getResultBlock().clickResultLink(i)
      productPage.checkAddToCartButton('inactive')
      productPage.backToResultPage()
    }
  })

  it('verify that delivery is possible to US with zip code', () => {
    let expectedLocation = testData.possibleDelivery
    let expectedTextMessage = testData.validationMessage
    const selectlocationPage = homePage.getLocationPopUp().clickChangeAddressButton()
    selectlocationPage.enterZipCode(testData.zipCode)
    const continuePage = selectlocationPage.clickApplyButton()
    continuePage.clickContinueButton()
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
    const topMenu = homePage.clickTopMenu()
    const giftCardPage = topMenu.clickGiftCardButton()
    const resultPage = giftCardPage.selectTypeGiftCard('Mail')
    for (let i = 1; i < 3; i++) {
      const productPage = resultPage.getResultBlock().clickResultLink(i)
      productPage.getDeliveryValidationMessage().should('not.contain', expectedTextMessage)
      productPage.getDeliveryStatus().should('contain', '83877')
      productPage.backToResultPage()
    }
  })

  it('verify delivery possible Add to card and Buy now from US location', () => {
    let expectedLocation = testData.possibleDelivery
    const selectlocationPage = homePage.getLocationPopUp().clickChangeAddressButton()
    selectlocationPage.enterZipCode(testData.zipCode)
    const continuePage = selectlocationPage.clickApplyButton()
    continuePage.clickContinueButton()
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
    const topMenu = homePage.clickTopMenu()
    const giftCardPage = topMenu.clickGiftCardButton()
    const resultPage = giftCardPage.selectTypeGiftCard('Mail')
    for (let i = 1; i < 3; i++) {
      const productPage = resultPage.getResultBlock().clickResultLink(i)
      productPage.checkAddToCartButton('active')
      productPage.backToResultPage()
    }
  })

  it('verify eGiftCard type delivery is email', () => {
    let expectedLocation = testData.impossibleDelivery
    let expectedTextMessage = testData.validationMessage
    homePage.getLocationPopUp().clickNotChangeButton()
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
    const giftCardPage = homePage.getMenuBar().clickGiftCardTabButton()
    const productPage = giftCardPage.selectTypeGiftCard('eGift')
    productPage.getDeliveryType().then( value => {
      expect(value).to.equal('Email')
    })
  })

})
