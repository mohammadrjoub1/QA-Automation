class personalDetails {


    private maritalStatusOptionElement: Cypress.Chainable;
    private maritalStatusDrupDownElement: Cypress.Chainable;
    private dateOfBirthPickerElement: Cypress.Chainable;
    private yearElement: Cypress.Chainable;
    private yearOption: Cypress.Chainable;
    private monthOption: Cypress.Chainable;
    private genderElement: Cypress.Chainable;
    private saveBtn1: Cypress.Chainable;
    private saveBtn2: Cypress.Chainable;

    constructor() {

        this.maritalStatusDrupDownElement = cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
        this.maritalStatusOptionElement = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)')
        this.dateOfBirthPickerElement = cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon');
        this.yearElement = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div.oxd-calendar-header > ul > li.oxd-calendar-selector-year > div > p')
        this.yearOption = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div.oxd-calendar-header > ul > li.--active.oxd-calendar-selector-year > ul > li:nth-child(31)');
        this.monthOption = cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div.oxd-calendar-dates-grid > div:nth-child(8)');
        this.genderElement = cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input');
        this.saveBtn1 = cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button');
        this.saveBtn2 = cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button');


    }
    addPersonalData() {
        this.maritalStatusDrupDownElement.click();
        this.maritalStatusOptionElement.click();
        this.dateOfBirthPickerElement.click();
        this.yearElement.click();
        this.yearOption.click();
        this.monthOption.click();
        this.genderElement.click();
        this.saveBtn1.click();
        this.saveBtn2.click();
    }

}


export default personalDetails;

