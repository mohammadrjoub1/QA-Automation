import loginAsAdmin from "../support/pageObjects/loginAsAdmin";
import { faker } from '@faker-js/faker';
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { loginWithEmployeeViaUi } from "../support/helpers/loginWithEmployeeViaUi";
import { addCandidate } from "../support/helpers/addCandidate";

describe("senario #1", () => {
    beforeEach(() => {
        cy.visit("/auth/login");
        loginAsAdmin.loginAdmin();
    });

    it('Create Employee Then Login with the new Employee', () => {
        cy.fixture('employeeData').as('empData');
        cy.get('@empData').then((data:any)=>{
        createEmployeeViaApi.addEmployeeViaApi(data.empID,data.firstName,data.lastName,data.middleName,faker.internet.userName(),data.password);
        loginWithEmployeeViaUi.loginViaUi(data.username,data.password);
    
        })
    
    
    });

    it('create a ccandidate then upload file and make the assertion', () => {
        cy.visit('/recruitment/addCandidate')
        addCandidate.createNewCandidate(faker.person.firstName(),faker.person.middleName(),faker.person.lastName());
        addCandidate.uploadFileWithAssertion('cypress/fixtures/RJOUB123.pdf');
    });


});









