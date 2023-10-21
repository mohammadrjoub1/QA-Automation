
class AddEmployeePage {


    private addEmployeeButton: Cypress.Chainable;

    constructor() {
        

        this.addEmployeeButton = cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item');


    }

    clickAddEmployeeButton() {

        this.addEmployeeButton.click();
    }

}









export default AddEmployeePage;