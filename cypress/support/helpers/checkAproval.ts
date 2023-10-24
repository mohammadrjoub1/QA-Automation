import { loginMe } from "./loginMe";

export class checkAproval{


    static checkAproval(username,password){


        loginMe.loginSecondTime(username,password).then(()=>{
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
            cy.get(':nth-child(7) > div').should('contain','Taken')
    
        }); 

        
    }
}