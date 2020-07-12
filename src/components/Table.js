import React from "react";
import TableRow from "./TableRow.js";

function Table(props) {
  const results = props.results;
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
              {results.length ? (
                results.map(employee => (
                  <TableRow 
                    image={employee.picture.thumbnail}
                    name={employee.name.first + " " + employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    DOB={employee.dob.date}
                    key={employee.login.uuid}
                  />
                )) 
              ) : <TableRow />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default Table;