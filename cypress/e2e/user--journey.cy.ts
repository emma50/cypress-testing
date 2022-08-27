// Test a user jpurney
describe("User Journey", () => {
  it.only("a user can find a course on the home page and complete the courses lessons", () => {
    // Visit the home page
    cy.visit("http://localhost:3000")
    // Click on the Get started button (anchor element)
    cy.getByData("course-0").find("a").eq(3).click()
    // Navigate user to the correct course page
    cy.location("pathname").should("eq", "/testing-your-first-application")
    // Click on start course button
    cy.getByData("next-lesson-button").click()
    // Navigate user to the correct page
    cy.location("pathname").should(
      "eq", "/testing-your-first-application/app-install-and-overview"
    )
    // Complete quiz at bottom of the page
    cy.getByData("challenge-answer-0").click()
    // Assert next button has appeared on the page
    cy.getByData("next-lesson-button").should("exist").click()
    // Next lesson takes user to the correct lesson page
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    ) 
  
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq", "/testing-your-first-application/setting-up-data-before-each-test"
    )
    // Complete course and take user to home page
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should("eq", "/")
  })
})