import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { addEntitlement } from "../support/helpers/addEntitlement";
import { loginMe } from "../support/helpers/loginMe";
import { requestLeave } from "../support/helpers/requestLeave";
import { deleteAllEmployees } from "../support/helpers/deleteAllEmployees";
import { approveLeave } from "../support/helpers/approveLeave";
import { checkAproval } from "../support/helpers/checkAproval";
import { visitOrange } from "../support/helpers/visitOrange";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
let employeeNumber;
let randomNumber = Math.floor(Math.random() * 100) + 1;
describe("senario #1", () => {
  beforeEach(() => {
    visitOrange.visitOrange();
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
