/// <reference types="cypress"/>

describe('My first test suit', function()

{
it('My first test case', function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //class 16 (Css selectors)
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)


    //class 22 grabbing the text by using cypress text command
    cy.get('.products').find('.product').each(($el, index, $list) =>{
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews')) 
        {
            cy.wrap($el).find('button').click()
        }
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

  })

})