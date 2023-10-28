import { loginMe } from "../it#1/loginMe";
import { addVacancyViaApi } from "./addVacancyViaApi";
import { deleteAllVacancies } from "./deleteAllVacancies";

export class prepareData{
static prepareIt(){
    cy.visit("/auth/login")
    cy.wait(2000)
.then(() => {
  // Perform your login and delete actions here
  loginMe.loginAsAdmin("Admin", "admin123");
}).then(()=>{
  deleteAllVacancies.deleteThem();


}).then(()=>{
  addVacancyViaApi.addVacancy();

});
}

}

