export class attachFile{

static attachFile(){

    cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true});
    cy.get('.orangehrm-header-container > .oxd-button').click({force: true});

    cy.get('input[type="file"]').selectFile('cypress/fixtures/RJOUB123.pdf',{force: true})
    cy.get(':nth-child(3) > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get(':nth-child(3) > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})


}
static uplaodingAssertion(){
    cy.get('.oxd-table-card > .oxd-table-row').should('contain', 'RJOUB123.pdf');

}

}