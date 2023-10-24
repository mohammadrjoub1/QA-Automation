export class deleteAllEmployees{

static deleteThem(){

    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click( {force: true});

    cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force: true});
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true});



    
}




}