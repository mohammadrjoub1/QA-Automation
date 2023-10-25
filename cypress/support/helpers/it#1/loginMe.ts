export class loginMe {
  static loginAsAdmin(username, password) {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get(".oxd-button").click();
  }

  static loginSecondTime(username, password) {
    return new Promise((resolve, reject) => {
      cy.get(".oxd-userdropdown-tab > .oxd-icon").click({ force: true });
      cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
      cy.get(".oxd-button").click();
    });
  }
}
