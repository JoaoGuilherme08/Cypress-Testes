/// <reference types="Cypress"/>

describe("post user request", () => {
  let accessToken;

  it("Pegar Acess Token e Criar um Contract", () => {
    cy.request({
      method: "POST",
      url: "https://apis-homologation.saas-solinftec.com/commodity-api/v2/token",
      body: {
        grantType: "CLIENT_CREDENTIALS",
        scope: "ELEVATOR_WEB_APP",
        clientId: "agtrax-development",
        clientSecret: "80ED45CC95D4511F57F2C02E421C3860ADA8B7AA",
        scopeEntityId: "7",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      accessToken = JSON.stringify(res.body.token);
      accessToken = accessToken.replace(/["']/g, "");
      cy.api_requestContract(accessToken);
    });
  });
});

//Feito por João
