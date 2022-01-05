/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Criar customer", () => {
  before(() => cy.Login());
  it("Sucesso", () => {
    cy.contains("user.teste").should("be.visible").click();
    cy.contains("Customers").click({ force: true });

    cy.get("#btn-customer-new > .v-btn__content").click();
    cy.get("#customer-text-name").type("user.teste");
    cy.get("#customer-btn-save").click();
  });
});
