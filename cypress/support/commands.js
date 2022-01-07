/// <reference types="Cypress"/>

Cypress.Commands.add("Login", () => {
  cy.visit("https://commodity-homologation.saas-solinftec.com/login");
  cy.get("#input-login-username").type(Cypress.env("user_name"));

  cy.get("#input-login-password").type(Cypress.env("user_password"));

  cy.get("#btn-login-login").click();
});

Cypress.Commands.add("api_resquestcustomer", (accessToken) => {
  cy.request({
    method: "POST",
    url: "https://apis-homologation.saas-solinftec.com/commodity-api/customers/save",
    headers: {
      Authorization: accessToken,
    },
    body: {
      id: null,
      idCompany: {
        id: "160",
      },
      name: "Teste api cobol123",
      defaultLocation: {
        id: null,
      },
    },
  }).then((res) => {
    cy.log(JSON.stringify(res));
  });
});

Cypress.Commands.add("api_requestContract", (accessToken) => {
  cy.request({
    method: "POST",
    url: "https://apis-homologation.saas-solinftec.com/commodity-api/objective",
    headers: {
      Authorization: accessToken,
    },
    body: {
      id: null,
      repeatInterval: null,
      repeatCount: null,
      guid: "",
      contractNumber: "4444444",
      notes: "",
      currentVolume: null,
      currentVolumeUom: null,
      targetVolume: 14,
      targetVolumeUom: "bu",
      manualCompletedVolume: 0,
      manualCompletedVolumeUom: null,
      pendingCompletedVolume: 0,
      approvedCompletedVolume: 0,
      totalCompletedVolume: 0,
      price: 1000000,
      priceUom: "$",
      startDate: 1641438000000,
      dueDate: 1641438000000,
      userObjectives: [],
      objectiveType: {
        id: 317,
        name: {
          en_us: "Contract",
          es_es: "Contrato",
          pt_br: "Contrato",
        },
        elevatorCompany: {
          id: 160,
          obfuscatedId: "be057d4ca44c10a0fc1dfcffd99cce1490291dc7",
          name: "Demo Environment ",
        },
      },
      objectiveStatus: {
        id: 1,
        name: null,
      },
      customer: {
        id: 170646,
        idCompany: null,
        defaultLocation: null,
        name: "Cobol",
        markets: [],
      },
      commodity: {
        id: 2,
        name: null,
        color: null,
        weight: null,
      },
      elevatorCompany: {
        id: 160,
        obfuscatedId: null,
        name: null,
      },
      weeklyList: [
        {
          id: null,
          value: 0,
          valueUom: null,
          startDate: 1641438000000,
          endDate: 1641438000000,
        },
      ],
      originLocation: {
        id: 14389974,
        name: null,
      },
      destinationLocation: {
        id: 14389974,
        name: null,
      },
    },
  }).then((res) => {
    cy.log(JSON.stringify(res));
  });
});

//Feito por João
