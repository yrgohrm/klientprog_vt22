describe("Example Test", () => {
    it("tests some basic commands", () => {
        cy.visit("https://example.cypress.io")

        cy.contains("contains").click()

        cy.url().should("include", "/commands/querying")

        cy.title().should("eq", "Cypress.io: Kitchen Sink")

        cy.get("#inputName").type("hejsan").should("have.value", "hejsan")
    })
})
