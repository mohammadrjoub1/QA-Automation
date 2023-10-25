export class requestLeave {
  static requestLeave() {
    cy.request({
      method: "POST",
      url: "/api/v2/leave/leave-requests",
      body: {
        leaveTypeId: 6,
        fromDate: "2023-01-02",
        toDate: "2023-01-04",
        comment: null,
        duration: {
          type: "full_day",
        },
      },
    });
  }
}
