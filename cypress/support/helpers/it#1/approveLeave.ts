export class approveLeave {
  static approveLeave(id) {
    return new Promise((resolve, reject) => {
      cy.log(`${id}`);
      cy.request({
        method: "PUT",
        url: `/api/v2/leave/employees/leave-requests/${id}`,
        body: {
          action: "APPROVE",
        },
      }).then((response) => {
        // You can handle the response here and resolve or reject the promise accordingly
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(new Error("Failed to approve leave"));
        }
      });
    });
  }
}
