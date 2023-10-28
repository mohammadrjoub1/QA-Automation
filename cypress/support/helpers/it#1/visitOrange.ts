import { deleteAllEmployees } from "./deleteAllEmployees";
import { loginMe } from "./loginMe";

export class visitOrange{
static visitOrange(){
  return new Promise((resolve, reject) => {
    cy.visit("/auth/login")
    .then(() => {
      // Perform your login and delete actions here
      loginMe.loginAsAdmin("Admin", "admin123");
    });
  })
}




}