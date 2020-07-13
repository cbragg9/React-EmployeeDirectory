import React from "react";
import Moment from "moment";

function TableRow(props) {
  const dateFormatted = Moment(props.DOB).format("L");
  return (
    <tr>
      <th scope="row"><img src={props.image} alt="img_thumbnail"></img></th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{dateFormatted}</td>
    </tr>
  )
}

export default TableRow;