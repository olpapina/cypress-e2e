
import { homePage } from "../support/pages/homePage"
import testData from "../fixtures/testData.json"

describe('Amazon Home page tests', () => {

  beforeEach ('open home page', () => {
    homePage.openHomePage()
  })

  it('verify actual delivery location', () => {
    let expectedLocation = testData.impossibleDelivery
    homePage.getActualDeliveryLocation().should('contain', expectedLocation)
  })

  it('verify location icon click', () => {
    const selectLocationPage = homePage.clickActualDeliveryLocation()
    selectLocationPage.enterZipCode(testData.zipCode)
  })

})
