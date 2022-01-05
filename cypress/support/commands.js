/// <reference types="Cypress"/>

Cypress.Commands.add("Login", () => {
  cy.visit("https://commodity-homologation.saas-solinftec.com/login");
  cy.get("#input-login-username").type("user.teste");

  cy.get("#input-login-password").type("user.teste4mbtlo7F3S");

  cy.get("#btn-login-login").click();
});
