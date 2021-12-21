import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import '../App.css'

const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
        createMarker: function() {return null},
        waypoints: [
            L.latLng(props.src[0], props.src[1]),
            L.latLng(props.dst[0], props.dst[1])
        ],
        itineraryClassName:'dummy',
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 6 }]
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
        show:false
    });
    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

