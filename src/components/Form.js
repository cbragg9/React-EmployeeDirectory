import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  state = {
    name: ""
  };

  handleInputChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="form-box">
        <form className="form-group justify-content-center d-flex">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
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
