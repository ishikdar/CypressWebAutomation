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

    //class 25 declaring variable and using it
    cy.get('.products').as('productslocator')

    //class 20: parent child chaining
    cy.get('@productslocator').find('.product').should('have.length',4)

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

    //class 25 how to assrt text in cypress
    cy.get('.brand').should('have.text', 'GREENKART')

 //class 23 how to handle non cypress commands (.text is jquery), it needs to be handled manually by .then method
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    })

  })

})