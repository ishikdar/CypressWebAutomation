/// <reference types="cypress"/>

describe('Simple Login And Leave Application', function()

{
it('Login & Leave Application', function()
{
    //Login page
    cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    //Leave application
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
    cy.get('.oxd-select-text-input').click()
    cy.contains('CAN - FMLA').click()
    
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('10-12-2024')
    cy.get('body').click();


    cy.get('.oxd-button').click()

  })
})