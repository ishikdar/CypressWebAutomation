/// <reference types="cypress"/>

describe('My first test suit', function()

{
it('My first test case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //checkbox practice
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value',('option1'))
    
    //uncheck
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //check multiple checkboxes tagname[attribute=value]
    cy.get('input[type=checkbox]').check(['option2','option1'])

    //static dropdown
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2')


    //dynamic dropdown
    cy.get('#autocomplete').type('ban')
    cy.get('.ui-menu-item div').each(($el, index, $list) =>{
      if($el.text()==="Bangladesh")
        {
          $el.trigger("click")
        }
    })
    cy.get('#autocomplete').should('have.value','Bangladesh')

    //hide/unhide button
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()

    //radio button
    cy.get('[value="radio1"]').check().should('be.checked')

  })



})