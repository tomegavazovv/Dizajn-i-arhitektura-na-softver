import React from 'react'
import DetailBar from './DetailBar'
import '../App.css'

const SideBar = React.forwardRef((props, ref) => {

    function closeButton() {
        return props.object.id != undefined ?
            <button id='clearButton' onClick={props.handleClearButtonClick}>Clear</button> : ''
    }

    return (
        <div>
            <input id='searchBar' ref={ref} placeholder='Name of object/s here'></input>
            <button id='searchButton' type='submit' onClick={props.handleSearchNameSubmit}>Search</button>
            <button id='locateMe' onClick={props.handleLocateMeClick}>Locate me</button>
            <DetailBar columns={props.columns} callback={props.callback} object={props.object} /> {closeButton()}
            {props.object.id != undefined ? <button id='showRouteButton' onClick={props.handleShowRouteClick}>Show Route</button> : ''}
        </div>);
});

export default SideBar;
