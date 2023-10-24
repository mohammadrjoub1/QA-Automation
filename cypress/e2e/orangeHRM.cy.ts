import loginAsAdmin from "../support/helpers/loginAsAdmin";
import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { loginWithEmployeeViaUi } from "../support/helpers/loginWithEmployeeViaUi";
import { addCandidate } from "../support/helpers/addCandidate";
import { addEntitlement } from "../support/helpers/addEntitlement";

/*
1- we need to add employee by beeing loggen in with admin
2-we need to give that added employee number of entitlement
3-
*/
var employeeNumber;

describe("senario #1", () => {
  beforeEach(() => {

    cy.visit("/auth/login")
    .then(()=>{
    loginAsAdmin.loginAdmin();
    });
    
  });

  it("Employee request a leave", () => {  
    createEmployeeViaApi.addEmployeeViaApi("0599","mohammad","jamal","rjoub","moh1d23","mohammad1234").then((empNumber)=>{
      employeeNumber=empNumber;
      cy.log(`Employee number: ${empNumber}`);
    addEntitlement.addEntitlement(employeeNumber,6).then(()=>{
      


    })
    })



   
  });

});
