import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { addEntitlement } from "../support/helpers/addEntitlement";
import { loginMe } from "../support/helpers/loginMe";

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
      loginMe.loginMe("Admin","admin123");

    });
    
  });

  it("Employee request a leave", () => {  
    cy.fixture("employeeData.json").
    then((data)=>{
      createEmployeeViaApi.addEmployeeViaApi(createEmployeeViaApi.generateEmployeeData())

      //addEntitlement to the employee using the employeeNumber we got from the addEmployeeViaApi method above
      .then((empNumber)=>{
        employeeNumber=empNumber;
        cy.log(`Employee number: ${empNumber}`);
      addEntitlement.addEntitlement(employeeNumber,6)
      //login with added Employee 
      // .then(()=>{
      //   loginMe.loginMe()
  
      // })
      })
    })
  });
});
