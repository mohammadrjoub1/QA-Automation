class userDetails {


    private usernameElement: Cypress.Chainable;
    private passwordElement: Cypress.Chainable;
    private confirmPasswordElement: Cypress.Chainable;
    private save: Cypress.Chainable;



    constructor() {

        this.usernameElement = cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
        this.passwordElement = cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        this.confirmPasswordElement = cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        this.save = cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space")

    }
    addDetails(username:string,password:string,confirmPassword:string) {

        this.usernameElement.type(username);
        this.passwordElement.type(password);
        this.confirmPasswordElement.type(confirmPassword);
        this.save.click();
        


    }
    makeSureThatTheAddedUserAppear() {

        cy.wait(5000);

        cy.contains("mohammad rjoub").should('exist');


    }

}

export default userDetails;