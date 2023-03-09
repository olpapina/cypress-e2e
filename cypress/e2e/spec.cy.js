
import { homePage } from "../support/pages/homePage"
import testData from "../fixtures/testData.json"

describe('Assertion for Amazom Home Page', () => {

  beforeEach('open home page', () => {
    homePage.openHomePage()
  })

  it('verify Amazon Logo', () => {
    homePage.getLogo().should('have.attr', 'aria-label')
    homePage.getLogo().invoke('attr', 'aria-label').then((label) => {
      expect(label).to.eq(testData.brand)
    })
  })

  it('verify Location Pop-up is visibilited before click button and not visibilited after click button', () => {
    homePage.getLocationPopUp().getPopUpBody().should('be.visible')
    homePage.getLocationPopUp().clickNotChangeButton()
    homePage.getLocationPopUp().getPopUpBody().should('not.be.visible')
  })

  it('verify Delivery Location', () => {
    let expectedLocation = testData.impossibleDelivery
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
    homePage.getActualDeliveryLocation().then(($location) => {
      const location = $location.text()
      expect(location).to.contain(expectedLocation)
    })
  })

  it('verify Sign-in pop-up', () => {
    homePage.getSignIn().should('be.visible')

    homePage.getSignIn()
      .find('#nav-signin-tooltip')
      .children()
      .first()
      .should('exist')
      .and('have.class', 'nav-action-button');

    homePage.getSignIn()
      .find('#nav-signin-tooltip')
      .children()
      .first()
      .invoke('attr', 'href').then(($href) => {
        expect($href).to.eq(testData.hrefSignIn)
      })
  })

})

describe('Tests verify searching and filtering functionality', () => {
  beforeEach('open home page', () => {
    homePage.openHomePage()
    homePage.getSearchBox().typeSearchedProduct(testData.searchText)
  })

  it('verify results by typing text', () => {
    const resultPage = homePage.getSearchBox().clickSearchButton()
    resultPage.getResultBlock().getResultSearchLinks()
      .should('exist')
      .each(link => {
        expect(link.text()).to.contain(testData.searchText)
      })
  })

  it('verify results with filtering of memory', () => {
    const resultPage = homePage.getSearchBox().clickSearchButton()
    resultPage.getAdvancedSearchPanel()
    .find('[data-csa-c-slot-id="nav-ref"]')
    .children()
    .contains(testData.filterMemory).click()
    resultPage.getResultBlock().getResultLinks()
      .should('exist')
      .each(link => {
        expect(link.text()).to.contain(testData.expectedFilter)
      })
  })
})


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
      productPage.getDeliveryStatus().should('contain', testData.zipCode)
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
    productPage.getDeliveryType().then(value => {
      expect(value).to.equal(testData.typeDelivery)
    })
  })

})
