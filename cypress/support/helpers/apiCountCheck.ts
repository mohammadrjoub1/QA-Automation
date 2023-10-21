
export class apiCountCheck {



    static countRowNumber(): number {

        let count = 0;
        cy.request({
            method: 'GET',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC', // Replace with your actual API endpoint
        }).then((response) => {

            count= response.body.meta.total;

        });

        return count;
         
    }



}