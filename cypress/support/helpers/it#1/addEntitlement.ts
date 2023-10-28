export class addEntitlement {
  static addEntitlement(employeeNumber, numOfEntitlement) {
    return cy.request({
      method: "POST",
      url: "/api/v2/leave/leave-entitlements",
      body: {
        empNumber: employeeNumber,
        leaveTypeId: 6,
        fromDate: "2023-01-01",
        toDate: "2024-08-24",
        entitlement: numOfEntitlement,
      },
    });
  }
}
