
class PIMpage {


    private PIMclick: Cypress.Chainable;



    constructor() {


        this.PIMclick = cy.get(':nth-child(2) > .oxd-main-menu-item');
    }
    clickPIM() {

        this.PIMclick.click();
    }




}






export default PIMpage;