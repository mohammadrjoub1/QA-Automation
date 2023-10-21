class searchEmp {



    private employeeNameElement: Cypress.Chainable;
    private employeeIdElement: Cypress.Chainable;
    private employmentStatusDropDownListElement: Cypress.Chainable;
    private includeDropDownListElement: Cypress.Chainable;
    private supervisorNameElement: Cypress.Chainable;
    private jobTitleElement: Cypress.Chainable;
    private subUnitElement: Cypress.Chainable;
    private searchBtnElement: Cypress.Chainable;

    constructor() {

        this.employeeNameElement = cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
        this.employeeIdElement = cy.get(':nth-child(2) > .oxd-input');
        this.employmentStatusDropDownListElement = cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
        this.includeDropDownListElement = cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
        this.supervisorNameElement = cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input');
        this.jobTitleElement = cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input');
        this.subUnitElement = cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input');
        this.searchBtnElement = cy.get('.oxd-form-actions > .oxd-button--secondary');


    }
    searchForEmployeeMethod(arrOfObjects: { key: string, value: any }[]) {

        for (let i = 0; i < arrOfObjects.length; i++) {


            switch (arrOfObjects[i].key) {
                case "Employee Name":

                    this.employeeNameElement.type(arrOfObjects[i].value, { force: true });

                    break;

                case "Employee Id":
                    this.employeeIdElement.type(arrOfObjects[i].value);
                    break;

                case "Employment Status":
                    this.employmentStatusDropDownListElement.check(arrOfObjects[i].value);
                    break;

                case "Include":
                    this.includeDropDownListElement.check(arrOfObjects[i].value);

                    break;
                case "Supervisor Name":
                    this.supervisorNameElement.type(arrOfObjects[i].value);
                    break;
                case "Job Title":
                    this.jobTitleElement.type(arrOfObjects[i].value);

                    break;
                case "Sub Unit":
                    this.subUnitElement.check(arrOfObjects[i].value);

                    break;

                default:
            }

            this.searchBtnElement.click({ force: true });



        }
        



    }




}


export default searchEmp;