// This is for API Custom Commands. UI and API custom commands should be in separate file

Cypress.Commands.add("getCall", (url) => {
  cy.request({
    url: Cypress.env("api_BaseUrl"),
    method: "GET",
  });
});
