import { faker } from '@faker-js/faker';

const baseUrl = "https://conduit.productionready.io";

export class loginViaApi {



  

    static apiMe(method: string, myUrl: string, userObject: object) {



        cy.api({


            method: method,
            url: myUrl,
            body:
            {
                user: userObject
            }

        })

    }



   









}