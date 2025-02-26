/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('My first test suit', function () {

  // it('My first test case', function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  //   //checkbox practice
  //   cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', ('option1'))

  //   //uncheck
  //   cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

  //   //check multiple checkboxes tagname[attribute=value]
  //   cy.get('input[type=checkbox]').check(['option2', 'option1'])

  //   //static dropdown
  //   cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')


  //   //dynamic dropdown
  //   cy.get('#autocomplete').type('ban')
  //   cy.get('.ui-menu-item div').each(($el, index, $list) => {
  //     if ($el.text() === "Bangladesh") {
  //       $el.trigger("click")
  //     }
  //   })
  //   cy.get('#autocomplete').should('have.value', 'Bangladesh')

  //   //hide/unhide button
  //   cy.get('#displayed-text').should('be.visible')
  //   cy.get('#hide-textbox').click()
  //   cy.get('#displayed-text').should('not.be.visible')
  //   cy.get('#show-textbox').click()

  //   //radio button
  //   cy.get('[value="radio1"]').check().should('be.checked')

  //   //only ok button alert
  //   cy.get('[value="radio1"]')

  //   //window:alert
  //   cy.on('window:alert', (str) => {
  //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
  //   })

  //   //window:confirm
  //   cy.on('window:confirm', (str) => {
  //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
  //   })

  // })

  //New tab handling nice
  // it('My second test case', function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  //   cy.get('fieldset [id=opentab]').invoke('removeAttr','target').click()

  //   cy.origin("https://www.qaclickacademy.com/", () =>
  //   {
  //     cy.get('#navbarSupportedContent a[href*=about]').click()
  //     cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy')
  //   })

  // })

  // Table handling 

  // it('TC3',function(){
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  //   cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>{
  //     const text = $e1.text()
  //     if(text.includes("JMETER")){
  //       cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
  //         const priceText=price.text()
  //         expect(priceText).to.equal('25')
  //     })}
  //   })
  // })

  //class 39: Mouse hover practice

  // it('TC3',function(){
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  //   cy.get('.mouse-hover-content').invoke('show')
  //   cy.contains('Top').click() //to force click without using show method need to use {force: true} inside click function
  //   cy.url().should('include','top')
  // })

  //class 40: handling child window/ new tab using cypress
  // it('TC4',function(){
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  //   cy.get('#opentab').then(function(el){

  //     const url = el.prop('href') //different domain
  //     cy.visit(url) //visiting declared domain which has been extracted from href

  //     cy.origin(url, ()=>{
  //       cy.get('.navbar-nav > :nth-child(4) > a').click()
  //     })
  //   })
  // })


  //class 41: handle iframe
  // it('TC4',function(){
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  //   cy.frameLoaded("#courses-iframe")

  //   cy.iframe().find("a[href*='mentorship']").eq(0).click()
  // })

  // class 44, 45 handeling calender in child window
  it('TC4', function () {
    // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    // cy.get('[href="#/offers"]').invoke('removeAttr','target').click()

    //     cy.get('.react-date-picker__inputGroup__year').click()
    //     cy.get('.react-calendar__navigation__label__labelText--from').click()
    //     cy.get(':nth-child(1) > abbr').click()
    //     cy.get(':nth-child(11) > abbr').click()
    //     cy.get('.react-date-picker__inputGroup').should('contain','09')

    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber, date, year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.wait(5000)
    cy.get(".react-date-picker__inputGroup").click();

    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.contains("button", year).click();
    cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber) - 1).click();
    cy.contains("abbr", date).click();

    //Assertion
    cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
      cy.wrap($el).invoke('val').should('eq', expectedList[index]);
    }

    )
  })

})



