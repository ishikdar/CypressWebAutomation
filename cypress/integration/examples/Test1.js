/// <reference types="cypress"/>

describe('My first test suit', function()

{
it('My first test case', function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //class 16 (Css selectors)
    cy.get('.search-keyword').type('ca')

    //class 17 (assertion)
    cy.wait(2000)
    //cy.get('.product').should('have.length',4)

    //class 18 how to handle invisible classes
    cy.get('.product:visible').should('have.length',4)

})



})