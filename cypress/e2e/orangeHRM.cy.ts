import loginAsAdmin from "../support/pageObjects/loginAsAdmin";
import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { loginWithEmployeeViaUi } from "../support/helpers/loginWithEmployeeViaUi";
import { addCandidate } from "../support/helpers/addCandidate";

/*
1- we need to add employee by beeing loggen in with admin
2-we need to give that added employee number of entitlement
3-
*/

describe("senario #1", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
    loginAsAdmin.loginAdmin();
  });

  it("first TC", () => {});
});
