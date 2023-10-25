export class addVacancyViaApi {
  static addVacancy() {
    cy.request({
      method: "POST",
      url: "/api/v2/recruitment/vacancies",
      body:{
        "name": "QA Leader",
        "jobTitleId": 8,
        "employeeId": 2,
        "numOfPositions": 3,
        "description": "QA team Leader",
        "status": true,
        "isPublished": true
    },
    });
  }
}
