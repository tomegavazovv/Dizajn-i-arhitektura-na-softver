import React, { Component } from 'react'
import Map from './components/Map'
import './App.css'
import Table from './components/Table'
import { FilterByName } from './filters/FilterByName'
import { MainFilter } from './filters/MainFilter'
import NavBar from './components/NavBar'
import CityFilter from './components/CityFilter'
import TypeFilter from './components/TypeFilter'
import TerraceFilter from './components/TerraceFilter'
import SmokingFilter from './components/SmokingFilter'
import { cityData } from './data/FetchCityData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      mapViewButtonClicked: true,
      appData: [],
      showObject: {},
    }
  }

  // Handlers
  changeSearchName = (newSearchName) => {
    this.setState({
      ...this.state, 
      searchName: newSearchName
    })
  }

  handleGoButtonClick = (name, loc) => {
    var obj = FilterByName(name, this.state.appData)[0]
    if (name != undefined)
      this.setState({
        ...this.state,
        location: loc,
        mapViewButtonClicked: true,
        showObject:obj
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
    cityData(e.target.value)
      .then(res => {
        var loc = this.state.locationSet==true ? [] : res[0]
        this.setState({
          ...this.state,
          appData:res,
          cityLoc: [loc[0], loc[1]],
        })
      })
  }

  checkViewmapViewButtonClicked = (e) => {
    return e.target.text == 'Map View' && this.state.mapViewButtonClicked != true
      || e.target.text == 'Table View' && this.state.mapViewButtonClicked == true
  }

  filterData = (toFilter) => {
    return MainFilter(this.state.smoking, this.state.type, this.state.terrace, this.state.searchName, toFilter)
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
          <Map showObject={this.state.showObject} flyTo={flyTo} callback={this.changeSearchName} data={this.filterData(this.state.appData)} /> :
          <Table handleMapItButtonClick={this.handleGoButtonClick} data={this.filterData(this.state.appData)} />}
      </div>
    )
  }
}
export default App;