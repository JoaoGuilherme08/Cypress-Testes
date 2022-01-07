/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Realizar logout", () => {
  before(() => cy.Login());
  it("Sucesso", () => {
    cy.contains("user.teste").should("be.visible").click();
    cy.contains("Logout").click({ force: true });
  });
});

//Feito por João
