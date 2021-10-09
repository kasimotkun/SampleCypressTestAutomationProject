// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setMobileMode',() => {


    let mobileDevice = Cypress.config().mobileDevice;

    cy.viewport(mobileDevice)
    cy.wait(200)
 })


Cypress.Commands.add('setDesktopMode',() => {

    cy.viewport(1440, 900)
    cy.wait(200)
 })

Cypress.Commands.add('handleCookies',() => {

   cy.contains('Godkänn').click()
    cy.wait(200)
 })

 Cypress.Commands.add('sattInOchSpela',() => {

    cy.get('[data-at=deposit-and-play-homepage]').click()
     cy.wait(200)
  })


 Cypress.Commands.add('assertSattInButton',() => {

     cy.get('[data-at=deposit-login-submit-button-noaccount]').should('be.disabled')
     cy.wait(200)
  })


 Cypress.Commands.add('enterAmmountAndSattIn',(amount) => {

      cy.get('[data-at=amount-input-label').type(amount)
      cy.wait(200)
      cy.get('[data-at=deposit-login-submit-button-noaccount]').click()
      cy.wait(200)
  })


 Cypress.Commands.add('selectPaymentmethod',(method) => {

      if (method == 'SWISH') {
              cy.get('[data-at=SWISH-paymentmethod-deposit-and-play]').click()
              cy.wait(200)
          }
          else if (method == 'TRUSTLY')  {
               cy.get('[data-at=TRUSTLY-paymentmethod-deposit-and-play]').click()
               cy.wait(200)
          }
  })


 Cypress.Commands.add('enterPersonalNumber',(personalNumber) => {

       cy.get('[id=personalNumber]').type(personalNumber)
       cy.wait(200)
       cy.get('[data-at=register-login-bankid-button]').click()
       cy.wait(200)
  })


 Cypress.Commands.add('assertStartBankIdPage',() => {

      cy.contains('Vänligen öppna ditt BankID och signera i appen').should('be.visible')
      cy.wait(200)
  })


 Cypress.Commands.add('cancelOperation',() => {

       cy.get('[data-at=bankid-loader-cancel]').click()
        cy.wait(200)
  })


 Cypress.Commands.add('assertPersonalNumberPage',(personalNumber) => {

      cy.get('[id=personalNumber]').should('have.value',personalNumber)
      cy.wait(200)
  })


 Cypress.Commands.add('assertPaymentSelectionPage',() => {

       cy.get('[data-at=SWISH-paymentmethod-deposit-and-play]').should('be.visible')
      cy.wait(200)
  })