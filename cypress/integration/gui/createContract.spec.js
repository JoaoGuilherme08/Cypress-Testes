/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Criar customer", () => {
  before(() => cy.Login());
  it("Sucesso", () => {
    cy.get("#toolbar-items-contracts > .v-btn__content").click();
    cy.get(".my-3 > .col-auto > .primary").click();
    cy.get(
      ":nth-child(1) > .col-4 > .v-input > .v-input__control > .v-input__slot"
    ).type("123456");

    cy.get(
      ":nth-child(1) > .d-flex > :nth-child(1) > .v-input > .v-input__control > .v-input__slot"
    ).click();

    cy.get('[aria-label="Next month"] > .v-btn__content > .v-icon').click();

    cy.get(
      ".v-date-picker-table > table > tbody > :nth-child(3) > :nth-child(4)"
    )
      .contains("16")
      .click({ force: true });

    cy.get(
      ".d-flex > :nth-child(3) > .v-input > .v-input__control > .v-input__slot"
    ).click();
    cy.get(
      ".menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(3) > :nth-child(6)"
    )
      .contains("18")
      .click({ force: true });

    cy.get(
      ".col-4 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > #customer-"
    ).type("user.teste");
    cy.wait(1200);
    cy.get(
      ".col-4 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > #customer-"
    ).type("{enter}");

    cy.get(
      ':nth-child(1) > div[data-v-4df90ef4=""] > .transparent > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot'
    )
      .clear()
      .type("Rio Grande Do Sul");

    cy.get(".v-item-group > :nth-child(1)").click();

    cy.get(
      ".back > :nth-child(3) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot"
    ).type("10");

    cy.get(
      '[data-v-7199c04b=""][data-v-4df90ef4=""] > .v-input > .v-input__control > .v-input__slot'
    )
      .click()
      .clear()
      .type("1,000");

    cy.get(".v-form > .mt-3").click();

    cy.get(".flex-row > .v-btn--has-bg").click();
  });
});
