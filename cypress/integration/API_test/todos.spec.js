/// <reference types="Cypress" />

describe("Exercise 2 – API Automation", () => {
  it("Verify details for todo item 2", () => {
    cy.request({
      url: Cypress.env("api_BaseUrl"),
      method: "GET",
    }).then((response) => {
      expect(response.body[1].completed).to.be.eq(false);
    });
  });
});
