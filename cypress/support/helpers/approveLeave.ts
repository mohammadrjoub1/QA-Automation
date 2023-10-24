export class approveLeave{


static approveLeave(id){
    cy.log(`${id}`)
    cy.request({
        method: "PUT",
        url: `/api/v2/leave/employees/leave-requests/${id}`,
        body: {
            "action": "APPROVE"
        },
      });


}


}