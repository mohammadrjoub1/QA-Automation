export class createEmployeeViaApi {
  static addEmployeeViaApi(empId,firstName,middleName,lastName,username,password) {
    // Return a Promise that resolves with the employee number
    return new Promise((resolve, reject) => {
      cy.request({
        method: "POST",
        url: "/api/v2/pim/employees",
        body: {
          empPicture: null,
          employeeId: empId,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        this.addUser(response.body.data.empNumber, username, password);

        // Resolve the Promise with the employee number
        resolve(response.body.data.empNumber);
      });
    });
  }

  static addUser(empNumberr: number, username: string, password: string) {
    //creat user login deails for new employee
    cy.request({
      method: "POST",
      url: "/api/v2/admin/users",
      body: {
        empNumber: empNumberr,
        password: password,
        status: true,
        userRoleId: 2,
        username: username,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }


}
