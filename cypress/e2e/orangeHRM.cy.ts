import loginAsAdmin from "../support/pageObjects/loginAsAdmin";
import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { loginWithEmployeeViaUi } from "../support/helpers/loginWithEmployeeViaUi";
import { addCandidate } from "../support/helpers/addCandidate";

describe("senario #1", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
    loginAsAdmin.loginAdmin();
  });
});
