export class createEmployeeViaApi {
  static addEmployeeViaApi(
    empID: string,
    firstName: string,
    lastName: string,
    middleName: string,
    username: string,
    password: string,
  ) {
    //add new employee using API
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
      body: {
        empPicture: null,
        employeeId: empID,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      console.log(response.body.data.empNumber);
      this.addUser(response.body.data.empNumber, username, password);
    });
  }
  static addUser(empNumberr: number, username: string, password: string) {
    //creat user login deails for new employee
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",
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
