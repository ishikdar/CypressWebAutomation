/// <reference types="cypress"/>

describe('My first test suit', function()

{
it('My first test case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //checkbox practice
    cy.get('#checkBoxOption1').check().should('be.checked')
    

  })

})