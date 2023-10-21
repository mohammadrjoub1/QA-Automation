import { apiCountCheck } from "./apiCountCheck";

export class countRowsViaUi {

    static countViaUi() {

        let rowCount = 0;

        cy.get('.orangehrm-container') 
            .find('.oxd-table-card') 
            .each(() => {
                rowCount++; 
            })
            .then(() => {
                expect(rowCount).to.equal(25); 

            });
    

    }
}