import L from 'leaflet'


export const FoodIcon = new L.Icon({
    iconUrl: require('../data/restIcon.png'),
    popupAnchor: [8, -7],
    shadowAnchor: null,
    iconSize: [35,35],
    className:'dummy'
})

