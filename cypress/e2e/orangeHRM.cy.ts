import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/it#1/createEmployeeViaApi";
import { addEntitlement } from "../support/helpers/it#1/addEntitlement";
import { loginMe } from "../support/helpers/it#1/loginMe";
import { requestLeave } from "../support/helpers/it#1/requestLeave";
import { deleteAllEmployees } from "../support/helpers/it#1/deleteAllEmployees";
import { approveLeave } from "../support/helpers/it#1/approveLeave";
import { checkAproval } from "../support/helpers/it#1/checkAproval";
import { visitOrange } from "../support/helpers/it#1/visitOrange";
import { deleteAllVacancies } from "../support/helpers/it#2/deleteAllVacancies";
import { addVacancyViaApi } from "../support/helpers/it#2/addVacancyViaApi";
import { prepareData } from "../support/helpers/it#2/prepareData";
import { attachFile } from "../support/helpers/it#2/attachFile";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
let employeeNumber;
let randomNumber = Math.floor(Math.random() * 100) + 1;
describe("senario #1", () => {
  beforeEach(() => {
    cy.visit("/auth/login")
    .then(() => {
      // Perform your login and delete actions here
      loginMe.loginAsAdmin("Admin", "admin123");
    });
    deleteAllEmployees.deleteThem();
    
  });

  it("Employee request a leave", () => {
    cy.fixture("employeeData.json").then((data) => {
      createEmployeeViaApi.addEmployeeViaApi(data.empId, data.firstName, data.middleName, data.lastName, `${data.username}${randomNumber}`, data.password).then((empNumber) => {
        employeeNumber = empNumber;
        cy.log(`Employee number: ${empNumber}`);
        addEntitlement
          .addEntitlement(empNumber, 6)
          .then(() => {
            loginMe.loginSecondTime(`${data.username}${randomNumber}`, data.password);
          })
          .then(() => {
            requestLeave.requestLeave();
          })
          .then((response) => {
            loginMe.loginSecondTime("Admin", "admin123").then((response) => {});
            approveLeave.approveLeave(response.body.data.id);
            checkAproval.checkAproval(`${data.username}${randomNumber}`, data.password);
          });
      });
    });
  });
});
// Given The system has a vacancy record
// When The user opens the vacancy form on the edit mode for that vacancy
// And The user clicks on Add button in the Attachments area
//  And The user uploads a file for that vacancy and saves the form
// Then The file should be uploaded and added to vacancy

describe.only("senario #2", () => {
  beforeEach("", () => {
   prepareData.prepareIt();


  });

  it("Check that The file is uploaded and added to vacancy", () => {
    attachFile.attachFile();
    attachFile.uplaodingAssertion();
    

  });
});

