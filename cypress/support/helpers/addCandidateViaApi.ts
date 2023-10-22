import { faker } from "@faker-js/faker";

const apiUrl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates";

export class addCandidateViaApi {
  static addCandidate() {
    return cy
      .request({
        method: "POST",
        url: apiUrl,
        body: {
          firstName: "RJOUB",
          middleName: "RJOUB",
          lastName: "RJOUB",
          email: faker.internet.email(),
          contactNumber: null,
          keywords: null,
          comment: null,
          dateOfApplication: "2023-10-15",
          consentToKeepData: false,
          vacancyId: 1,
        },
      })

      .then((response) => {
        return response.body.data.id;
      });
  }

  static shortListCandidate(candidateId) {
    cy.request({
      method: "PUT",
      url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`,
      body: {
        note: null,
      },
    });
  }
}
