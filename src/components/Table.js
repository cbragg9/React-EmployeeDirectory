import React from "react";
import TableRow from "./TableRow.js";
import TableHeader from "./TableHeader.js";

function Table(props) {
  const results = props.results;
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <table className="table table-striped table-responsive-lg">
            <thead>
              <TableHeader handleSort={props.handleSort} sortedBy={props.sortedBy} />
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