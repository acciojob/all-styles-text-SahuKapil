//your code here
describe("Test page", () => {
  it("Displays main div with heading and paragraph", () => {
    cy.visit("http://localhost:3000");
    cy.get(".main").should("exist");
    cy.get("#heading").should("exist");
  });
});
