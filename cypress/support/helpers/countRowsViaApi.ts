import { apiCountCheck } from "./apiCountCheck";

export class countRowsViaApi {

    static countViaApi() {
        let rowCount;
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');


        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC').as('apiRequest'); // Intercept the API request


        cy.wait('@apiRequest').then((interception) => {
            if (interception.response) {
                const responseData = interception.response.body;

                rowCount = interception.response.body.meta.total;

                expect(rowCount).to.equal(36); 


            } 
        });



    }
}