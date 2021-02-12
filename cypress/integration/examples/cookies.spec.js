/// <reference types="cypress" />

context('Cookies', () => {

  afterEach(() => {
    // cy.visit('http://localhost:4567/404', { failOnStatusCode: false })
  })

  it('can login', () => {
    cy.visit('http://localhost:4567/')
    cy.contains('No user logged in').should('be.visible')
    cy.getCookie('token').should('be.null')
    cy.get('#login').click()
    cy.contains('User logged in').should('be.visible')
    cy.getCookie('token').should('have.property', 'value', 'fake-auth-token')
  })

  it('render logged out state', () => {
    cy.wait(100);
    cy.visit('http://localhost:4567/')
    cy.contains('No user logged in').should('be.visible')
  })
})
