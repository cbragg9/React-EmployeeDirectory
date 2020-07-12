import React from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import API from "./utils/API.js";

class App extends React.Component {
  state = {
    searchInput: "",
    seeds: {},
    filtered: {},
    sortedBy: ""
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

  // Filter the seeds state using the searchInput state and set the state with the new array
  filterAndDisplayResults = () => {
    let filteredSeeds = this.state.seeds.filter(employee => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return employeeName.includes(this.state.searchInput);
    });

    this.setState({
      filtered: filteredSeeds
    })
  };

  // Sort the filtered results based off the table header that is clicked
  handleSort = (event) => {
    const sortByCategory = event.target.getAttribute("data-header");

    // If already sorting by the chosen header/category, reverse the results
    if (this.state.sortedBy === sortByCategory) {
      return this.setState({
        filtered: this.state.filtered.reverse(),
        sortedBy: sortByCategory
      })
    }

    // Else, sort by the new category and set state
    let sortedSeeds = this.state.filtered.sort((a, b) => {
      switch (sortByCategory) {
        case("name"):
          return a.name.first < b.name.first ? 1 : -1
        case("dob"):
          return a.dob.date < b.dob.date ? 1 : -1
        default:
          return a[sortByCategory] < b[sortByCategory] ? 1 : -1
      } 
    });

    this.setState({
      filtered: sortedSeeds,
      sortedBy: sortByCategory
    })
  }

  render() {
    return (
      <div className="text-center">
        <Header />
        <Form handleInputChange={this.handleInputChange} currentState={this.state} />
        <Table results={this.state.filtered} handleSort={this.handleSort}/>
      </div>
    )
  }
}

export default App;
