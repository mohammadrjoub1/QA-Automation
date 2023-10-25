import { loginMe } from "./loginMe";

export class checkAproval {
  static checkAproval(username, password) {
    // loginMe.loginSecondTime(username,password);
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click({ force: true });
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get(".oxd-button").click();

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(":nth-child(7) > div").should("contain", "Taken");
  }
}
