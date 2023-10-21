import loginAsAdmin from "../support/pageObjects/loginAsAdmin";
import addNewEmployeeUi from "../support/pageObjects/addNewEmployeeUi";
import PIMpage from "../support/pageObjects/PIMpage";
import AddEmployeePage from "../support/pageObjects/AddEmployeePage";
import userDetails from "../support/pageObjects/userDetails";
import searchEmp from "../support/pageObjects/searchEmp";
import addEmployeeViaApi from "../support/pageObjects/addEmployeeViaApi";
import personalDetails from "../support/pageObjects/personalDetails";
import { faker } from '@faker-js/faker';
import { loginViaApi } from "../support/helpers/loginViaApi";
import { countRowsViaApi } from "../support/helpers/countRowsViaApi";
import { countRowsViaUi } from "../support/helpers/countRowsViaUi";
import { recruitment } from "../support/pageObjects/recruitment";
import { addCandidateViaApi } from "../support/helpers/addCandidateViaApi";
import { scheduleInterview } from "../support/helpers/scheduleInterview";
import { deleteAllCandidate } from "../support/helpers/deleteAllCandidate";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { loginWithEmployeeViaUi } from "../support/helpers/loginWithEmployeeViaUi";
import { ceil } from "cypress/types/lodash";
import { addCandidate } from "../support/helpers/addCandidate";

describe("senario #1", () => {
    beforeEach(() => {
        cy.visit("/auth/login");
        loginAsAdmin.loginAdmin();
    });

    it('Create Employee Then Login with the new Employee', () => {
        cy.fixture('employeeData').as('empData');
        cy.get('@empData').then((data:any)=>{
        createEmployeeViaApi.addEmployeeViaApi(data.empID,data.firstName,data.lastName,data.middleName,data.username,data.password);
        loginWithEmployeeViaUi.loginViaUi(data.username,data.password);
    
        })
    
    
    });

    it('create a candidate', () => {
        cy.visit('/recruitment/addCandidate')
        addCandidate.createNewCandidate(faker.person.firstName(),faker.person.middleName(),faker.person.lastName());
        addCandidate.uploadFileWithAssertion('cypress/fixtures/RJOUB123.pdf');
    });


});










/*
 it('Create Employee Then Login with the new Employee', () => {
        cy.fixture('employeeData').as('empData');
        cy.get('@empData').then((data:any)=>{
        createEmployeeViaApi.addEmployeeViaApi(data.empID,data.firstName,data.lastName,data.middleName,data.username,data.password);
        loginWithEmployeeViaUi.loginViaUi(data.username,data.password);

        })


    });

 
 it('ADD EMPLOYEE VIA UI Minimal Info', () => {
     cy.fixture('employeeInfo').as('empInfo');
     const clickPIM: PIMpage = new PIMpage();
     clickPIM.clickPIM();
     const clickAddEmployee: AddEmployeePage = new AddEmployeePage();
     clickAddEmployee.clickAddEmployeeButton();
     cy.get('@empInfo').then((infoData: any) => {
         const adding: addNewEmployeeUi = new addNewEmployeeUi();
         adding.addEmployee(infoData.firstName, infoData.middleName, infoData.lastName);
     })

 });

 it('Verify Login Response with api', () => {
   


     cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations')
         .then((response) => {

             expect(response).property('status').to.equal(200)


         })


 });



 it('Open PIM Page', () => {

     const clickPIM: PIMpage = new PIMpage();
     clickPIM.clickPIM();

 });
 
 
  it('ADD EMPLOYEE VIA API', () => {

     const addViaApiObject: addEmployeeViaApi = new addEmployeeViaApi();
     addViaApiObject.addEmpViaAmpi("mohammad", "jamal", "rjoub");

 });
 
 



 it('SEARCH EMPLOYEE', () => {
     cy.fixture('employeeInfo').as('empInfo');


     const clickPIM: PIMpage = new PIMpage();
     clickPIM.clickPIM();

     const searchForEmployeeObject: searchEmp = new searchEmp();

     searchForEmployeeObject.searchForEmployeeMethod([{ key: "Employee Name", value: "mohammad jamal rjoub" }])



 });

 
it('ADD EMPLOYEE VIA UI', () => {
     cy.fixture('employeeInfo').as('empInfo');
     cy.fixture('adminLoginInfo').as('adminInfo');

     cy.get('@adminInfo').then((data: any) => {
         const adminLogin: loginAsAdmin = new loginAsAdmin();
         adminLogin.LoginAsAdminFunction(data.username, data.password);
     });

     const clickPIM: PIMpage = new PIMpage();
     clickPIM.clickPIM();

     const clickAddEmployee: AddEmployeePage = new AddEmployeePage();
     clickAddEmployee.clickAddEmployeeButton();

     cy.get('@empInfo').then((infoData: any) => {


         const adding: addNewEmployeeUi = new addNewEmployeeUi();
         adding.addEmployee(infoData.firstName, infoData.middleName, infoData.lastName);

     })

     const addDetailsObject: userDetails = new userDetails();
     addDetailsObject.addDetails("ewfew", "FSDF323d#", "FSDF323d#");


     addDetailsObject.makeSureThatTheAddedUserAppear();



 });

 

 
*/









/* it("Both Are Valid", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunction(
             data.validFlow.username,
             data.validFlow.password
         );
         loginObject.happyFlowAssertionBothValidFields();
     });
 });

 it("Valid username and invlaid password", () => {
     cy.fixture("loginData").as("loginData");
     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunction(data.validUsernameInvalidPasswod.username, data.validUsernameInvalidPasswod.password);
         loginObject.sadFlowAssertionInvalidPasswordOrUsernameOrBoth();
     });
 });

 it("invalid username and valid password", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunction(data.invalidUsernameValidPasswod.username, data.invalidUsernameValidPasswod.password);
         loginObject.sadFlowAssertionInvalidPasswordOrUsernameOrBoth();

     });
 });

 it("invalid username and valid invalid", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunction(data.bothInvalid.username, data.bothInvalid.password);
         loginObject.sadFlowAssertionInvalidPasswordOrUsernameOrBoth();

     });
 });

 it("both username and password empty", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunctionWithEmpty(data.bothEmpty.username, data.bothEmpty.password);
         loginObject.sadFlowAssertionEmptyFields();
     });
 });

 it("username Empty with any password", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunctionWithEmpty(data.usernameEmpty.username, data.usernameEmpty.password);
         loginObject.sadFlowAssertionEmptyUsername();

     });

 });

 it("password Empty with any username", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunctionWithEmpty(data.passwordEmpty.username, data.passwordEmpty.password);
         loginObject.sadFlowAssertionEmptyPassword();

     });
 });

 it("Make sure that the password is masked", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.insertDataToCheckMaskedPassword(data.validFlow.username, data.validFlow.password);
         loginObject.happyFlowAssertionPassordIsMasked();

     });


 });

 it("Make sure that the password is case sensitve", () => {
     cy.fixture("loginData").as("loginData");

     cy.get("@loginData").then((data: any) => {
         const loginObject: loginAsAdmin = new loginAsAdmin();
         loginObject.LoginAsAdminFunction(data.capitalPassword.username, data.capitalPassword.password);
         loginObject.sadFlowAssertionInvalidPasswordOrUsernameOrBoth();

     });


 });*/














