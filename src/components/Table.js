import React from "react";

function Table() {

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Image</th>
                <td>Martha Wilson</td>
                <td>Phone</td>
                <td>Email</td>
                <td>DOB</td>
              </tr>
              <tr>
                <th scope="row">Image</th>
                <td>Dennis Bailey</td>
                <td>Phone</td>
                <td>Email</td>
                <td>DOB</td>
              </tr>
              <tr>
                <th scope="row">Image</th>
                <td>Mae Weaver</td>
                <td>Phone</td>
                <td>Email</td>
                <td>DOB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default Table;