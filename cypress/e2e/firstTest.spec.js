/// <reference types="cypress"/>


describe('Our first suite', () => {

  it('first test', () => {

    cy.visit('/')

    cy.contains('Forms').click()
    cy.contains('Form Layout').click()

    cy.get('input')

    // find with ID
    cy.get('#inputEmail1')

    // find with className
    cy.get('.input-full-width')

    // find Attribute name
    cy.get('[placeholder]')

    // find Attribute name and value
    cy.get('[placeholder="Email"]')

    // find with class value. It looks for entirely matching with all class values
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    // find with TagName and Attribute with value
    cy.get('input[placeholder="Email"]')

    // by two different attributes
    cy.get('[placeholder="Email"][type="email"]')

    // by Tagname, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')



    // The most recommended way by Cypress
    cy.get('[data-cy="imputEmail1"]')

  })

})

