


class addNewEmployeeUi {


    private firstNameField: Cypress.Chainable;
    private middleNameField: Cypress.Chainable;
    private lastNameField: Cypress.Chainable;
    private saveBtnElement: Cypress.Chainable;



    constructor() {

        this.firstNameField = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(1) > div:nth-child(2) > input');

        this.middleNameField = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(2) > div:nth-child(2) > input');
        this.lastNameField = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(3) > div:nth-child(2) > input');
        this.saveBtnElement = cy.get('.oxd-button--secondary');

    }

    addEmployee(firstName: string, middleName: string, lastName: string) {


        this.firstNameField.type(firstName);
        this.middleNameField.type(middleName);
        this.lastNameField.type(lastName);
        this.saveBtnElement.click();
        cy.get('.orangehrm-edit-employee-name > .oxd-text').contains(`${firstName} ${lastName}`).should("exist");

    }
    addedEmpAssertion() {




    }

}





export default addNewEmployeeUi;