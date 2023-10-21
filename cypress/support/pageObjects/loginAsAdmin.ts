class loginAsAdmin {

    static loginAdmin(){

        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();


    }





















    private usernameElement: Cypress.Chainable;
    private passwordElement: Cypress.Chainable;
    private LoginButtonElement: Cypress.Chainable;
    constructor() {


        this.usernameElement = cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
        this.passwordElement = cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
        this.LoginButtonElement = cy.get('.oxd-button');




    }
    LoginAsAdminFunction(username:string,password:string) {

        this.usernameElement.type(username);
        this.passwordElement.type(password);
        this.LoginButtonElement.click();

    }


    LoginAsAdminFunctionWithEmpty(username: string, password: string) {

        this.usernameElement.type(username);
        this.passwordElement.type(password);
        this.LoginButtonElement.click();




    }
    insertDataToCheckMaskedPassword(username: string, password: string) {

        this.usernameElement.type(username);
        this.passwordElement.type(password);



    }
    happyFlowAssertionBothValidFields() {
        cy.contains('.oxd-topbar-header-breadcrumb > .oxd-text', "Dashboard").should("exist");

    }
    sadFlowAssertionInvalidPasswordOrUsernameOrBoth() {
        cy.get('.oxd-alert').contains("Invalid credentials").should("exist");
    }
    sadFlowAssertionEmptyFields() {
        cy.get(' div.orangehrm-login-form > form > div:nth-child(2) > div > span ').contains("Required").should("exist");
        cy.get(' div.orangehrm-login-form > form > div:nth-child(3) > div > span ').contains("Required").should("exist");

    }
    sadFlowAssertionEmptyUsername() {
        cy.get(' div.orangehrm-login-form > form > div:nth-child(2) > div > span ').contains("Required").should("exist");

    }
    sadFlowAssertionEmptyPassword() {
        cy.get(' div.orangehrm-login-form > form > div:nth-child(3) > div > span ').contains("Required").should("exist");

    }

    happyFlowAssertionPassordIsMasked() {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("have.attr", "type", "password");

    }



}





export default loginAsAdmin;