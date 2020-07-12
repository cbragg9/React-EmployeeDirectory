import React from "react";
import "../styles/Header.css";

function Header() {

  return (
    <div className="row d-flex justify-content-center header-box">
      <div className="col-8">
        <h1>Employee Directory</h1>
        <h6>Click on carrots to filter by heading or use the search box to narrow your results</h6>
      </div>
    </div>
  )

}

export default Header;