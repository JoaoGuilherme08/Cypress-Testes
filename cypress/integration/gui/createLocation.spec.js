/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Criar Location", () => {
  before(() => cy.Login());
  it("Sucesso", () => {
    cy.contains("user.teste").should("be.visible").click();
    cy.contains("Location").click({ force: true });
    cy.get("#btn-location-new").click();
    cy.get("#name").type("Rio Grande do Sul");
    cy.get(
      ":nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections"
    ).click();
    cy.get(
      "#list-item-440-1 > .v-list-item__content > .v-list-item__title"
    ).click();
    cy.get("#address").clear();
    cy.get("#address").type("Rio Grande, Rio Grande do Sul, Brazil");
    cy.get("#btn-location-save").click();
  });
});
