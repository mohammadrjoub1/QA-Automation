import { deleteAllEmployees } from "./it#1/deleteAllEmployees";
import { loginMe } from "./it#1/loginMe";

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