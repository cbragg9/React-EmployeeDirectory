import React from "react";
import "../styles/TableHeader.css";

function TableHeader(props) {
  return (
    <tr>
      <th scope="col">Image</th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="name">
        <i className={props.sortedBy === "name" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        Name
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="phone">
        <i className={props.sortedBy === "phone" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        Phone
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="email">
        <i className={props.sortedBy === "email" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        Email
      </th>
      <th scope="col" className="sortBy" onClick={props.handleSort} id="dob">
        <i className={props.sortedBy === "dob" ? "fas fa-sort" : "fas fa-sort hidden"}></i>
        DOB
      </th>
    </tr>
  )
}

export default TableHeader;