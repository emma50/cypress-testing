describe('Home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context('Hero section', () => {
    it('The h1 contains the correct test', () => {
      cy.getByData("hero-heading")
        .contains('Testing Next.js Applications with Cypress')
    })

    it("the features on the homepage are correct", () => {
      // find texts in dt array of elements
      cy.get("dt").eq(0).contains('4 Courses')
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing Your First Next.js Application", () => {
      // find elements within [data-test="course-0"] elements
      cy.getByData("course-0").find('a').eq(3).contains('Get started')
      cy.getByData("course-0").find('a').eq(3).click()
    })
  })
})