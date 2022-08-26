describe('Home page', () => {
  it('The h1 contains the correct test', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Testing Next.js Applications with Cypress')
  })
})