import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  render() {
    return (
      <div className="form-box">
        <form className="form-group justify-content-center d-flex">
          <input
            value={this.props.currentState.searchInput}
            name="searchInput"
            onChange={this.props.handleInputChange}
            type="text"
            placeholder="Search"
            className="form-control"
          />
        </form>
      </div>
    );
  }
}

export default Form;
