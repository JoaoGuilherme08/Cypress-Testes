/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Realizar login", () => {
  it("Sucesso", () => {
    cy.visit("https://www.google.com/recaptcha/api2/demo");

    cy.get("#recaptcha-anchor");
  });
});
