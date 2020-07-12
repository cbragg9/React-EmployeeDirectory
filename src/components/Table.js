import React from "react";
import TableRow from "./TableRow.js";
import "../styles/Table.css";

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
                <th scope="col" className="sortBy" onClick={props.handleSort} data-header="name">Name</th>
                <th scope="col" className="sortBy" onClick={props.handleSort} data-header="phone">Phone</th>
                <th scope="col" className="sortBy" onClick={props.handleSort} data-header="email">Email</th>
                <th scope="col" className="sortBy" onClick={props.handleSort} data-header="dob">DOB</th>
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
              ) : <tr />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default Table;