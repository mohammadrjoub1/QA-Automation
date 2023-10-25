import { deleteAllEmployees } from "./deleteAllEmployees";
import { loginMe } from "./loginMe";

export class visitOrange{
static visitOrange(){

    cy.visit("/auth/login")
    .then(() => {
      // Perform your login and delete actions here
      loginMe.loginAsAdmin("Admin", "admin123");
      deleteAllEmployees.deleteThem();
    });

}




}