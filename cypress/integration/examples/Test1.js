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

    //class 20: parent child chaining
    cy.get('.products').find('.product').should('have.length',4)

    //another method of parent child chaining 
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    cy.wait(2000)

    //class 22 grabbing the text by using cypress text command
    cy.get('.products').find('.product').each(($el, index, $list) =>{
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews')) 
        
        {
            cy.wrap($el).find('button').click()
        }

    })

  })

})