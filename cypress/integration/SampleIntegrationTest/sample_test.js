
describe('Sample Test', () => {
  const  paymentMethod = 'SWISH'
  const   personalNumber = '198608051903'



 beforeEach(function(){
    cy.setCookie('integrationtesting', 'true')


    let url = Cypress.config().baseUrl;
    cy.visit(url,{ timeout: 120000 })
    cy.wait(1000)



    })

it('test desktop web', () => {


  cy.setDesktopMode()
  cy.handleCookies()
  cy.sattInOchSpela()
  cy.assertSattInButton()
  cy.enterAmmountAndSattIn('200')
  cy.selectPaymentmethod(paymentMethod)
  cy.enterPersonalNumber(personalNumber)
  cy.assertStartBankIdPage()
  cy.cancelOperation()
  cy.assertPersonalNumberPage(personalNumber)


})


 it('test mobile web', () => {

  cy.setMobileMode()
  cy.handleCookies()
  cy.sattInOchSpela()
  cy.assertSattInButton()
  cy.enterAmmountAndSattIn('200')
  cy.selectPaymentmethod(paymentMethod)
 // cy.enterPersonalNumber(personalNumber)
  cy.assertStartBankIdPage()
  cy.cancelOperation()
  cy.assertPaymentSelectionPage(personalNumber)


})
})