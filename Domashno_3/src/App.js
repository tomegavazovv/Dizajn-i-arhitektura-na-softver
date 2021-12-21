import React, { Component } from 'react';
import Map from './components/Map';
import { data } from './data/data'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    }
  }

  changeSearchName = (newSearchName) => {
    console.log(newSearchName)
    this.setState({ searchName: newSearchName })
  }

  render() {
    var filteredData = this.state.searchName == '' ? data : data.filter(o => o.name.toLowerCase().includes(this.state.searchName.toLowerCase()));
    return (
      <div >
        <Map callback={this.changeSearchName} data={filteredData}  />
      </div>
    );
  }
}
export default App;