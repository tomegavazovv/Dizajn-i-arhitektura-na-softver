import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { FoodIcon } from '../Icons/FoodIcon'
import { DrinkIcon } from '../Icons/DrinkIcon'
import { ClientIcon } from '../Icons/ClientLocationIcon'
import 'leaflet/dist/leaflet.css'
import SideBar from './SideBar'
import useGeoLocation from './useGeoLocation'
import Routing from './RouteMachine'
const Map = (props) => {
    const [object, setObject] = useState({
        'name': 'name'
    })

    const [routingButton, setRoutingButton] = useState(false)

    var [map, setMap] = useState({
        map: '',
        isInit: false
    })

    const location = useGeoLocation();

    const showLoc = (loc) => {
        if (props.flyTo != '' && map.isInit) {
            map.map.flyTo(loc)
        }

    }
    const showMyLocation = () => {
        if (location.loaded && !location.error) {
            map['map'].flyTo([location.coordinates.lat, location.coordinates.lng])
        } else {
            alert(location.error.message)
        }
    }

    function handleClickEvent(e, o) {
        const newObj = o;
        setObject(newObj);
    }

    function handleButtonClick(e) {
        e.preventDefault();
        props.callback(tmp)
    }

    function showRoute(e) {
        if (routingButton) setRoutingButton(false)
        else setRoutingButton(true)
    }

    function closeRoute() {
        if (routingButton) setRoutingButton(false)
    }

    var data = props.data;
    var tmp = ''

    return (
        <div>
            <div style={{ borderRight: '1px solid grey', backgroundColor: 'rgb(173, 209, 158)', width: '20vw', height: '92.5vh', position: 'absolute', zIndex:'999999' }}>
                <input
                    style={{ padding: '15px', marginTop: '30px', marginLeft: '35px',  zIndex: 999, borderRadius:'10px', border:'none' }}
                    placeholder='Name of object/s here'
                    onChange={(e) => tmp = e.target.value}></input>
                <button style={{width:'40%', padding:'7px', marginLeft:'75px', marginTop:'5px', borderRadius:'30px', backgroundColor:'#548CFF', color:'white', border:'none', fontSize:'16px', fontWeight:'bolder'}}
                 type='submit' onClick={handleButtonClick}>Search</button>
                <br/><br></br>
                <button style={{position:'absolute', left:'800px',top:'550px', zIndex:'9999', width:'100px', 'padding':'10px', borderRadius:'30px', backgroundColor:'#548CFF', border:'none', color:'white', fontWeight:'bolder'}}
                  onClick={showMyLocation}>Locate me</button>
                <SideBar callback={props.callback} object={object} />
                {typeof object != 'undefined' && object['name'] != 'name'? <button style={{width:'50%', padding:'5px', marginLeft:'70px' , borderRadius:'10px', color:'black', border:'none', fontSize:'14px', fontWeight:'bolder'}}
                onClick={() => setObject({name:'name'})}>Clear</button> : ''} 
                <br></br><br></br>
                {typeof object != 'undefined' && object['name'] != 'name'?<button style={{width:'50%', padding:'15px', marginLeft:'70px', marginTop:'5px', borderRadius:'30px', backgroundColor:'#548CFF', color:'white', border:'none', fontSize:'16px', fontWeight:'bolder'}} onClick={showRoute}>Show Route</button> : ''}
            </div>
            <div >
                <MapContainer whenCreated={m => setMap({ map: m, isInit: true })}
                    center={[41.9947, 21.4264]}
                    zoom={12}
                    style={{ width: '80%', height: '92.5vh', float: 'right' }}>
                    <TileLayer
                        tileSize={256}
                        attribution='copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {data.filter(o => o['lat'] != '').map((o) =>
                        <Marker
                            eventHandlers={{
                                click: (e) => {
                                    handleClickEvent(e, o)
                                    closeRoute()
                                }
                            }}
                            icon={['restaurant', 'fast_food', 'pub'].includes(o['amenity']) ?
                                FoodIcon : DrinkIcon}
                            key={`marker-${o['id']}`} position={[o['lat'], o['lon']]}>
                            <Tooltip style={{ width: '200px' }}>
                                <h3>{o['name']}</h3>
                                <h4 style={{ color: 'red' }}>{o['amenity'].charAt(0).toUpperCase() + o['amenity'].slice(1)}</h4>
                            </Tooltip>
                        </Marker>
                    )}

                    <Marker key={'tome'} icon={ClientIcon}
                        position={[location.coordinates.lat, location.coordinates.lng]}>
                        <Tooltip><h3>You are here</h3></Tooltip>

                    </Marker>
                    {console.log(object, 'pred routing')}
                    {map.isInit && routingButton &&
                        <Routing map={map} src={[location.coordinates.lat, location.coordinates.lng]}
                            dst={[object['lat'], object['lon']]} />}

                </MapContainer>
                {console.log(props.flyTo)}
                {props.flyTo[1] == undefined ? console.log('pra2333') : map.isInit ? showLoc([props.flyTo[0], props.flyTo[1]]) : ''}
            </div>
        </div>
    )
}

export default Map