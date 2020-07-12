import React from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import API from "./utils/API.js";

class App extends React.Component {
  state = {
    searchInput: "",
    results: {}
  };

  componentDidMount = async () => {
    await API.search()
      .then(res => {
        this.setState({
          results: res.data.results
        });
      })
      .catch(err => console.log(err));
      // this.state.results.forEach(employee => console.log(employee.name.first));
  }

  handleInputChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  render() {
    return (
      <div className="text-center">
        <Header />
        <Form handleInputChange={this.handleInputChange} currentState={this.state} />
        <Table />
      </div>
    )
  }

}

export default App;
