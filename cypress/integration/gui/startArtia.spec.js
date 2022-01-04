/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("startar atividade no artia", () => {
  it("Sucesso", () => {
    cy.visit("https://app.artia.com/users/login");

    cy.get("#user_email").type("joao.cobo@solinftec.com");
    cy.get("#user_password").type("10224904jG");
    cy.get("#user_remember_me").check();
    cy.get(".step > button").click();
    cy.get(".nav > :nth-child(1) > #top_menu_myday").click();
    cy.get("#myday_activity_20129303 > .myday-btns > .icon-play").click();
  });
});
