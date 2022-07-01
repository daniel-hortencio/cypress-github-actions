/// <reference types="cypress" />

describe("Test", () => {
  it("funciona", () => {
    cy.visit('/')
      .wait(20)
      .get('[data-cy="input"]')
      .type('123')

    cy.get('[data-cy="p"]')
      .contains('123456789asdfasdf')

  })
})
