export class scheduleInterview {

    static scheduleInterview(candidateId) {

        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`)

        cy.get('.oxd-button--success').click({ force: true });

        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("My Interview")
        cy.get('.oxd-autocomplete-text-input > input').type("d");
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div.oxd-autocomplete-dropdown.--positon-bottom > div:nth-child(4) > span').click();
        cy.get('.oxd-date-input > .oxd-input').click();
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div.oxd-calendar-dates-grid > div:nth-child(16) > div').click();
        cy.get('.oxd-time-input > .oxd-input').click();
        cy.get('.oxd-button--secondary').click();
        cy.wait(3000); // Wait for 3 seconds

        cy.get('body').should('contain', 'Status: Interview');



    }










}