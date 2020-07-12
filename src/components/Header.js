import React from "react";
import "../styles/Header.css";

function Header() {

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center header-box">
        <div className="col-8">
          <h1>Employee Directory</h1>
          <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
        </div>
      </div>
    </div>
  )

}

export default Header;