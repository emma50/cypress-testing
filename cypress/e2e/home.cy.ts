describe('Home page', () => {
  it('The h1 contains the correct test', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='hero-heading']")
      .contains('Testing Next.js Applications with Cypress')
  })
})