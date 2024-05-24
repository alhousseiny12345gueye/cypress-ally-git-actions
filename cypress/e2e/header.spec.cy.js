describe("Header", () => {
    beforeEach(() => {
      cy.visit("/")
    })

  //    cy.get('[data-test="learn-more-link"]').click()
    it("links to the correct pages", () => {
   // cy.getBySel("logo").click()
   // cy.location("pathname").should("eq", "/")

    cy.getBySel("learn-more-link").click()
    cy.location("pathname").should("eq", "/")
    })

    it("the search bar returns the correct search results", () => {
        cy.visit("/")
      })
  
})