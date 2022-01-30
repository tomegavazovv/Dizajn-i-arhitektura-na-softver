import React, { Component } from 'react'
import Map from './components/Map'
import './App.css'
import Table from './components/Table'
import axis from './components/Axios'
import { data } from './data/data'
import { FilterByName } from './filters/FilterByName'
import { MainFilter } from './filters/MainFilter'
import NavBar from './components/NavBar'
import CityFilter from './components/CityFilter'
import TypeFilter from './components/TypeFilter'
import TerraceFilter from './components/TerraceFilter'
import SmokingFilter from './components/SmokingFilter'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      mapViewButtonClicked: true,
      appData: data,
    }
  }

  // Handlers
  changeSearchName = (newSearchName) => {
    var filteredData = []
    if (newSearchName == "")
      filteredData = this.filterData(data)
    else
      filteredData = FilterByName(newSearchName, this.state.appData)
    this.setState({ ...this.state, searchName: newSearchName, appData: filteredData })
  }

  handleGoButtonClick = (name, loc) => {
    var filtered = FilterByName(name, this.state.appData)
    if (name != undefined)
      this.setState({
        ...this.state,
        location: loc,
        mapViewButtonClicked: true,
        appData: filtered
      })
  }

  handleTypeFilter = (e) => {
    this.setState({
      ...this.state,
      type: e.target.value
    })
  }

  handleTerraceFilter = (e) => {
    this.setState({
      ...this.state,
      terrace: e.target.value
    })
  }

  handleSmokingFilter = (e) => {
    this.setState({
      ...this.state,
      smoking: e.target.value
    })
  }

  handleViewButtonClick = (e) => {
    e.preventDefault();
    if (this.checkViewmapViewButtonClicked)
      this.setState({
        ...this.state,
        mapViewButtonClicked: this.state.mapViewButtonClicked ? false : true,
      })
  }

  handleCityFilter = (e) => {
    // todo
    console.log(e.target.value)
  }

  checkViewmapViewButtonClicked = (e) => {
    return e.target.text == 'Map View' && this.state.mapViewButtonClicked != true
      || e.target.text == 'Table View' && this.state.mapViewButtonClicked == true
  }

  filterData = (toFilter) => {
    return MainFilter(this.state.smoking, this.state.type, this.state.terrace, toFilter)
  }

  render() {
    var flyTo = { ...this.state.location == undefined ? [] : this.state.location }
    return (
      <div id='container'>
        <NavBar clickHandler={this.handleViewButtonClick} forMap={this.state.mapViewButtonClicked} />
        <CityFilter changeHandler={this.handleCityFilter} />
        <TypeFilter changeHandler={this.handleTypeFilter} />
        <TerraceFilter changeHandler={this.handleTerraceFilter} />
        <SmokingFilter changeHandler={this.handleSmokingFilter} />
        {this.state.mapViewButtonClicked ?
          <Map flyTo={flyTo} callback={this.changeSearchName} data={this.filterData(this.state.appData)} /> :
          <Table handleMapItButtonClick={this.handleGoButtonClick} data={this.filterData(this.state.appData)} />}
      </div>
    )
  }
}
export default App;