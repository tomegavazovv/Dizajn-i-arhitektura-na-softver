import L from 'leaflet'

export const DrinkIcon = new L.Icon({
    iconUrl: require('../data/resources/drinksIcon.png'),
    iconAnchor: 5,
    popupAnchor: [8, -7],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'dummy'
})