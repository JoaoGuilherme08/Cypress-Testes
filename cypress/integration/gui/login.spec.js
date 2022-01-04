/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Realizar login", () => {
  it("Sucesso", () => {
    cy.visit("https://commodity-homologation.saas-solinftec.com/login");
    cy.get("#input-login-username").type("user.teste");

    cy.get("#input-login-password").type("user.teste4mbtlo7F3S");

    cy.get("#btn-login-login").click();

    cy.get("#toolbar-items-locations-dashboard").click();

    cy.get(".v-text-field__slot").click();
    cy.contains("Elevator Aramis").click();

    cy.get(".v-btn__content > .mdi-account").click();
    cy.get("#list-item-355 > .v-list-item__title").click();

    cy.wait(600);
    cy.get(".action").click();
  });
});
