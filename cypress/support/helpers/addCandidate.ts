import { faker } from "@faker-js/faker";

export class addCandidate {
  static createNewCandidate(fName, mName, lName) {
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input",
    ).type(fName);
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type(mName);
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type(lName);
  }
  static uploadFileWithAssertion(path) {
    cy.get('input[type="file"]').selectFile(path, { force: true });
    cy.get('[class="oxd-file-input-div"]').should("contain", "RJOUB123");
  }
}
