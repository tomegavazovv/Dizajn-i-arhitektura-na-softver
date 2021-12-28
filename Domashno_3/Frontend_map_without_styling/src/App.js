import React, { Component } from 'react';
import Map from './components/Map';
import { data } from './data/data'
import './App.css'
import Table from './components/Table'
import ButtonView from './components/ButtonView'
import axios from './components/axios'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      buttonClicked: true,
      cityData: []
    }
  }


  componentDidMount() {
    axios.post('/food/Skopje').then(response => {
      this.setState({
      ...this.state,
      cityData:response.data}
    )

  })}

  async getData (city){
    // var xhr = new XMLHttpRequest()
    //
    // xhr.addEventListener('load', () => {
    //   console.log(xhr.responseText)
    // })
    // xhr.open('GET', 'http://localhost:8080/api/cities/food/Skopje')
    //
    // xhr.send()

    var data = []
    const response = await axios.post('/Skopje').then(response => {
      data = response.data
    })
    return data

  }


  changeSearchName = (newSearchName) => {
    console.log(newSearchName)
    var filteredData = this.state.cityData.filter(o => o['name'] === newSearchName)
    console.log(this.state.cityData[1]['name'])
    this.setState({ ...this.state, searchName: newSearchName, cityData:filteredData})
  }

  handleButtonView = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      buttonClicked: this.state.buttonClicked ? false : true,
    })
  }

  getButtons = (forMapView) => {
    if (forMapView)
      return (
        <>
          <ButtonView name={'Map View'} class={'clicked'} />
          <ButtonView onClick={this.handleButtonView} name={'Table View'} />
        </>
      )
    else
      return (

        <><ButtonView onClick={this.handleButtonView} name={'Map View'} />
          <ButtonView name={'Table View'} class={'clicked'} /></>

      )
  }

  handleGoClick = (name, loc) => {
    if (name != undefined)
      this.setState({
        searchName: name,
        buttonClicked: this.state.buttonClicked ? false : true,
        location: loc
      })
  }

  handleTypeChange = (e) => {

    this.setState({
      ...this.state,
      type: e.target.value
    })
  }

  handleTerraceChange = (e) => {
    console.log(this.state.data.filter(o => o.outdoor_sitting == 'No'))
  }

  handleSmokingChange = (e) => {
    this.setState({
      ...this.state,
      smoking: e.target.value
    })
  }

  handleCityChange = (e) => {
    console.log('city')
    this.setState({
      ...this.state,
      cityData: this.getData(e.target.value)
    })
  }

  filterData = () => {
    var filteredData = this.state.cityData
    if (this.state.searchName != "")
      filteredData = filteredData.filter(o => o.name == this.state.searchName)
    if (typeof (this.state.smoking) != 'undefined' && this.state.smoking != 'smoking')
      if (this.state.smoking.charAt(0).toLowerCase() == 'n')
        filteredData = filteredData.filter(o => o.smoking.toLowerCase().startsWith('n'))
      else filteredData = filteredData.filter(o => o.smoking != "" && !o.smoking.toLowerCase().startsWith('n'))
    if (typeof (this.state.type) != 'undefined' && this.state.type != 'type') {
      filteredData = filteredData.filter(o => o.amenity == this.state.type)
    }

    console.log(filteredData.length)
    return filteredData.length == 0 ? [] : filteredData
  }

  filters = () => {
    return (<div>
      <select  style={{ backgroundColor: '#467be4ef', border: '1px solid grey', color: 'white', fontSize: '14px', fontWeight: 'bold', position: 'absolute', top: '60px', left: '320px', width: '120px', padding: '3px', borderRadius: '20px', textAlign: 'center', zIndex: '99999' }}
        onChange={this.handleCityChange} id="cities" name="cities">
        <option value="City">--City--</option>
        <option selected value="Skopje">Skopje</option>
        <option value="Tetovo">Tetovo</option>
        <option value="Bitola">Bitola</option>
        <option value="Kumanovo">Kumanovo</option>
        <option value="Prilep">Prilep</option>
        <option value="Ohrid">Ohrid</option>
        <option value="Strumica">Strumica</option>
        <option value="Veles">Veles</option>
        <option value="Štip">Štip</option>
        <option value="Kavadarci">Kavadarci</option>
        <option value="Gostivar">Gostivar</option>
        <option value="Kočani">Kočani</option>
        <option value="Kičevo">Kičevo</option>
        <option value="Struga">Struga</option>
        <option value="Radoviš">Radoviš</option>
        <option value="Gevgelija">Gevgelija</option>
        <option value="Debar">Debar</option>
        <option value="Kriva Palanka">Kriva Palanka</option>
        <option value="Sveti Nikole">Sveti Nikole</option>
        <option value="Negotino">Negotino</option>
        <option value="Delčevo">Delčevo</option>
        <option value="Vinica">Vinica</option>
        <option value="Probištip">Probištip</option>
        <option value="Aračinovo">Aračinovo</option>
        <option value="Berovo">Berovo</option>
        <option value="Kratovo">Kratovo</option>
        <option value="Bogovinje">Bogovinje</option>
        <option value="Bogdanci">Bogdanci</option>
        <option value="Studeničani">Studeničani</option>
        <option value="Sopište">Sopište</option>
        <option value="Kruševo">Kruševo</option>
        <option value="Vrapčište">Vrapčište</option>
        <option value="Valandovo">Valandovo</option>
        <option value="Želino">Želino</option>
        <option value="Tearce">Tearce</option>
        <option value="Makedonski Brod">Makedonski Brod</option>
        <option value="Demir Kapija">Demir Kapija</option>
        <option value="Pehčevo">Pehčevo</option>
        <option value="Brvenica">Brvenica</option>
        <option value="Novo Selo">Novo Selo</option>
        <option value="Vevčani">Vevčani</option>
        <option value="Petrovec">Petrovec</option>
        <option value="Lipkovo">Lipkovo</option>
        <option value="Demir Hisar">Demir Hisar</option>
        <option value="Rosoman">Rosoman</option>
        <option value="Plasnica">Plasnica</option>
        <option value="Mogila">Mogila</option>
        <option value="Krivogaštani">Krivogaštani</option>
        <option value="Zrnovci">Zrnovci</option>
        <option value="Gradsko">Gradsko</option>
        <option value="Vasilevo">Vasilevo</option>
        <option value="Bosilovo">Bosilovo</option>
        <option value="Staro Nagoričane">Staro Nagoričane</option>
        <option value="Rankovce">Rankovce</option>
        <option value="Novaci">Novaci</option>
        <option value="Konče">Konče</option>
        <option value="Obleševo">Obleševo</option>
        <option value="Belčišta">Belčišta</option>
        <option value="Jegunovce">Jegunovce</option>
        <option value="Lozovo">Lozovo</option>
        <option value="Dolneni">Dolneni</option>
        <option value="Rostuša">Rostuša</option>
        <option value="Centar Župa">Centar Župa</option>
        <option value="Zelenikovo">Zelenikovo</option>
        <option value="Čučer-Sandevo">Čučer-Sandevo</option>
        <option value="Karbinci">Karbinci</option>
        <option value="Star Dojran">Star Dojran</option>
        <option value="Ilinden">Ilinden</option>
        <option value="Makedonska Kamenica">Makedonska Kamenica</option>
        <option value="Resen">Resen</option>
      </select>
      <select style={{ backgroundColor: '#467be4ef', border: '1px solid grey', color: 'white', fontSize: '14px', fontWeight: 'bold', position: 'absolute', top: '60px', left: '450px', width: '120px', padding: '3px', borderRadius: '20px', textAlign: 'center', zIndex: '99999' }}
        onChange={this.handleTypeChange} id="types" name="types">
        <option value='type'>--Type--</option>
        <option value='restaurant'>Restaurant</option>
        <option value='pub'>Pub</option>
        <option value='fast_food'>Fast Food</option>
        <option value='bar'>Bar</option>
        <option value='cafe'>Cafe</option>
        <option value='nightclub'>Night Club</option>
      </select>
      <select style={{ backgroundColor: '#467be4ef', border: '1px solid grey', color: 'white', fontSize: '14px', fontWeight: 'bold', position: 'absolute', top: '60px', left: '580px', width: '120px', padding: '3px', borderRadius: '20px', textAlign: 'center', zIndex: '99999' }}
        onChange={this.handleTerraceChange} id="terrace" name="terrace">
        <option value='terrace'>--Terrace--</option>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </select>
      <select style={{ backgroundColor: '#467be4ef', border: '1px solid grey', color: 'white', fontSize: '14px', fontWeight: 'bold', position: 'absolute', top: '60px', left: '710px', width: '120px', padding: '3px', borderRadius: '20px', textAlign: 'center', zIndex: '99999' }}
        onChange={this.handleSmokingChange} id="smoking" name="smoking">
        <option value='smoking'>--Smoking--</option>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </select>
    </div>)
  }

  render() {
    var flyTo = { ...this.state.location == undefined ? [2] : this.state.location }
    console.log(this.filterData())

    if (this.state.buttonClicked)
      return (
        <div>
          <div className="topnav">
            <a onClick={this.handleButtonView}>Table View</a>
            <a className='active'>Map View</a>
            <a style={{ float: 'left', marginLeft: 0 }} onClick={() => window.location.reload()}>Reset</a>
          </div>
          {this.filters()}
          <Map flyTo={flyTo} callback={this.changeSearchName} data={this.filterData()} />
        </div>
      );
    else
      return (
        <div>
          <div className="topnav">
            <a className='active'>Table View </a>
            <a onClick={this.handleButtonView} name={'Map View'}>Map View</a>
          </div>
          <div>
            {this.filters()}
          </div>
          <div><br></br><br></br></div>
          <Table callbackName={this.handleGoClick} data={this.state.cityData} />
        </div>
      );
  }
}
export default App;