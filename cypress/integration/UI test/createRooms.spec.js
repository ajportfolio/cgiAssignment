describe("Exercise 1 – UI Automation", () => {
  it("Create Rooms", () => {
    cy.visit("https://automationintesting.online/#/admin");
    cy.login();
    cy.intercept("https://automationintesting.online/room/").as("getRooms");
    cy.wait("@getRooms").then(() => {
      cy.addRoom("101", "Double", "true", "100", "TV");
      cy.wait("@getRooms");
      cy.addRoom("102", "Single", "false", "200", "Safe");
      cy.wait("@getRooms");
      cy.get("[data-testid='roomlisting']").should("have.length",2);
      cy.get(".fa.fa.fa-remove.roomDelete").click({ multiple: true });
    });
  });
});
