import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { FoodIcon } from '../Icons/FoodIcon'
import { DrinkIcon } from '../Icons/DrinkIcon'
import { ClientIcon } from '../Icons/ClientLocationIcon'
import 'leaflet/dist/leaflet.css'
import useGeoLocation from './useGeoLocation'
import { TableColumns } from '../data/TableColumns'
import Routing from './RouteMachine'
import '../App.css'
import SideBar from './SideBar'

const Map = (props) => {

    // State 
    const [object, setObject] = useState({})
    const [routingButton, setRoutingButton] = useState(false)
    const [map, setMap] = useState({
        instance: '',
        isInit: false
    })
    const searchNameRef = React.useRef();
    const location = useGeoLocation();

    React.useEffect(() => {
        setObject(props.showObject)
    },[])

    // Handlers
    function handleMarkerClick(_e, o) {
        const newObj = o;
        setObject(newObj);
        setRoutingButton(false)
    }

    function handleSearchNameSubmit(e) {
        e.preventDefault();
        props.callback(searchNameRef.current.value)
    }

    const handleLocateMeClick = () => {
        if (location.loaded && !location.error) {
            map['instance'].flyTo([location.coordinates.lat, location.coordinates.lng])
        } else {
            alert(location.error.message)
        }
    }

    const showLoc = (loc) => {
        if (props.flyTo != '' && map.isInit) {
            map.instance.setZoom(35)
            map.instance.flyTo(loc)
        }
    }


    const handleClearButtonClick = () => {
        setRoutingButton(false)
        setObject({name : ''})
    }

    return (
        <div>
            <div className='sideBarContainer'>
                <SideBar ref={searchNameRef} handleShowRouteClick={() => setRoutingButton(true)} 
                handleSearchNameSubmit={handleSearchNameSubmit} handleLocateMeClick={handleLocateMeClick} 
                callback={props.callback} columns={TableColumns} object={object} handleClearButtonClick={handleClearButtonClick}/>
            </div>
            <div>
                <MapContainer whenCreated={m => setMap({ instance: m, isInit: true })} center={[41.6086, 21.7453]} zoom={9.4}>
                    <TileLayer tileSize={256} attribution='copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {/* Map each node to Marker */}
                    {map.isInit && props.data.filter(o => o['lat'] != '').map((o) =>
                        <Marker
                            eventHandlers={{ click: (e) => { handleMarkerClick(e, o) } }}
                            icon={['restaurant', 'fast_food', 'pub'].includes(o['amenity']) ? FoodIcon : DrinkIcon}
                            key={`marker-${o['id']}`} position={[o['lat'], o['lon']]}>

                            <Tooltip style={{ width: '200px' }}>
                                <h3>{o['name']}</h3>
                                <h4 style={{ color: 'red' }}>{o['amenity'].charAt(0).toUpperCase() + o['amenity'].slice(1)}</h4>
                            </Tooltip>
                        </Marker>
                    )}
                    <Marker key='myloc' icon={ClientIcon} position={[location.coordinates.lat, location.coordinates.lng]}>
                        <Tooltip><h3>You are here</h3></Tooltip>
                    </Marker>
                    {/* Only if map is initiated initiate routing*/}
                    {map.isInit && routingButton &&
                        <Routing map={map} src={[location.coordinates.lat, location.coordinates.lng]} dst={[object['lat'], object['lon']]} />}
                </MapContainer>
                {/* Fly to location if clicked MapIt button from Table View */}
                {Object.keys(props.flyTo).length == 0 ? '' : map.isInit ? showLoc([props.flyTo[0], props.flyTo[1]]) : ''}
            </div>
        </div>
    )
}

export default Map