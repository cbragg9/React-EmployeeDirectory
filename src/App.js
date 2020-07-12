import React from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import Table from "./components/Table.js";

class App extends React.Component {
  state = {
    searchInput: ""
  };

  handleInputChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  render() {
    return (
      <div className="text-center">
        <Header />
        <Form handleInputChange={this.handleInputChange} currentState={this.state}/>
        <Table />
      </div>
    )
  }

}

export default App;
