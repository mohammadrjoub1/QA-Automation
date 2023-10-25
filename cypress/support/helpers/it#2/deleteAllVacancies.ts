export class deleteAllVacancies {
  static deleteThem() {
    cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item").click();

    cy.get('.orangehrm-horizontal-padding > .oxd-text').invoke('text').then((text) => {
        cy.log(text)
        if (text.includes('No Records Found')) {
          cy.log("No need to delete anything");

         
        } else {
          cy.get(".oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon").click({ force: true });
      
          cy.get(".orangehrm-horizontal-padding > div > .oxd-button").click({
            force: true,
          });
      
          cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click({
            force: true,
          });
        }
      });
      
  }
}
