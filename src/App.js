import React from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import API from "./utils/API.js";

class App extends React.Component {
  state = {
    searchInput: "",
    seeds: {},
    filtered: {}
  };

  // Populate state with 200 employee seeds from API
  componentDidMount = () => {
    API.search()
      .then(res => {
        this.setState({
          seeds: res.data.results,
          filtered: res.data.results
        });
      })
      .catch(err => console.log(err));
  };

  // Update search input state and update the filtered results state which will re-render
  handleInputChange = async event => {
    await this.setState({
      searchInput: event.target.value.toLowerCase()
    });
    this.filterAndDisplayResults();
  };

  filterAndDisplayResults = () => {
    let filteredSeeds = this.state.seeds.filter(employee => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return employeeName.includes(this.state.searchInput);
    });

    this.setState({
      filtered: filteredSeeds
    })
  };

  render() {
    return (
      <div className="text-center">
        <Header />
        <Form handleInputChange={this.handleInputChange} currentState={this.state} />
        <Table results={this.state.filtered} />
      </div>
    )
  }
}

export default App;
