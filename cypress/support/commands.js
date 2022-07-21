// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.get(".btn.btn-primary").eq(0).should("have.text", "Let me hack!").click();
  cy.get("[data-testid='login-header']").scrollIntoView();
  cy.get("[data-testid='username']").type("admin");
  cy.get("[data-testid='password']").type("password");
  cy.get("[data-testid='submit']").click();
});

Cypress.Commands.add(
  "addRoom",
  (room, type, accessible, price, featureCheck) => {
    cy.get("[data-testid='roomName']").type(room);
    cy.get("#type").select(type);
    cy.get("#accessible").select(accessible);
    cy.get("#roomPrice").type(price);
    cy.get('input[type="checkbox"]').check(featureCheck);
    cy.get("#createRoom").click();
    cy.get('input[type="checkbox"]').uncheck();
  }
);
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
