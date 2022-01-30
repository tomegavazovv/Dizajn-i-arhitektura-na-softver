import L from 'leaflet'

export const ClientIcon = new L.Icon({
    iconUrl: require('../data/clientLoc.png'),
    iconAnchor: 5,
    popupAnchor: [8, -7],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 35),
    className: 'dummy'
})