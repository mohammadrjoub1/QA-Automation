import { loginMe } from "../support/helpers/loginMe";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
describe("first Suite",()=>{


beforeEach("beforeEach TC",()=>{

    cy.visit("/auth/login")
    .then(() => {
      loginMe.loginAsAdmin("Admin", "admin123");
    })


})

it("first TC",()=>{

  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate")
  cy.get('input[type="file"]').attachFile('cypress/fixtures/RJOUB123.pdf');



})








})  