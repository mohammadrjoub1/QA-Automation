export class loginWithEmployeeViaUi {
  static loginViaUi(username, password) {
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    ).type(username);
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    ).type(password);
    cy.get(".oxd-button").click();
    cy.fixture("employeeData").as("empData");
    cy.get("@empData").then((data: any) => {
      cy.get(".oxd-userdropdown-tab").should(
        "contain",
        `${data.firstName} ${data.lastName}`,
      );
    });
  }
}
