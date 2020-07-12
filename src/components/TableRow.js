import React from "react";

function TableRow(props) {

  return (
    <tr>
      <th scope="row"><img src={props.image} alt="img_thumbnail"></img></th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.DOB}</td>
    </tr>
  )

}

export default TableRow;