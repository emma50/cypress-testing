describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it.only("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("emma@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should('exist').contains('emma@aol.com')
  })
})