import React from 'react';
import '../../App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios';
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import logo from '../../logo.png';

// import facilityMarker from './resources/facility_marker.png';
// import 'leaflet/dist/leaflet.css';

let facilityIcon = L.icon({
    iconRetinaUrl: require('./resources/facility_marker.png'),
    iconUrl: require('./resources/facility_marker.png'),
    shadowUrl: require('./resources/facility_marker.png')
});
let technicianIconFixing = L.icon({
    iconRetinaUrl: require('./resources/technician_marker_fixing.png'),
    iconUrl: require('./resources/technician_marker_fixing.png'),
    shadowUrl: require('./resources/technician_marker_fixing.png')
});

let technicianIconTraveling = L.icon({
    iconRetinaUrl: require('./resources/technician_marker_traveling.png'),
    iconUrl: require('./resources/technician_marker_traveling.png'),
    shadowUrl: require('./resources/technician_marker_traveling.png')
})
class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.map = undefined;
        this.state = {
            facilities: [],
            workerMarkers: []
        };
    }
    componentDidMount() {
        // console.log(this.map)
        this.map.leafletElement.on('moveend', () => {
            // const {}
            const bounds = this.map.leafletElement.getBounds();
            const bottomLeft = [bounds['_southWest'].lng, bounds['_southWest'].lat].map(x => Number(x));
            const upperRight = [bounds['_northEast'].lng, bounds['_northEast'].lat].map(x => Number(x));
            axios.post('http://localhost:8000/getFacilitiesInBox', { bottomLeft, upperRight })
                .then(res => this.setState({ facilities: res.data }));
            axios.get('http://localhost:8000/getWorkerMarkers')
                .then(res => { this.setState({ workerMarkers: res.data }) });
        });
    }
    render() {
        return (
            <div>
                <Map ref={(ref) => { this.map = ref; }} style={{ height: '90vh', width: '100%' }}
                    center={[29.749907, -95.358421]} zoom={10}>
                    <TileLayer
                        attribution='Chevron Technologies 2019'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                    />
                    <MarkerClusterGroup
                        disableClusteringAtZoom={7}
                        spiderfyOnMaxZoom={false}>
                        {this.state.facilities.map(facility => {
                            let coordinates = facility.location.coordinates;
                            coordinates.reverse();
                            return (
                                <Marker
                                    icon={facilityIcon}
                                    position={coordinates}
                                    key={facility.facilityId}>
                                    <Popup>
                                        <div>
                                            <img style={{ height: '1.5em', width: '1.5em' }} src={logo} alt="logo" />
                                            <span style={{ fontWeight: 'bolder' }}>Facility ID:</span> <br />
                                            <div>{facility.facilityId}</div>
                                        </div>
                                    </Popup>
                                </Marker>);
                        }).concat(this.state.workerMarkers.filter(worker => worker.state > 0).map(worker => {
                            return (
                                <Marker
                                    key={worker.name}
                                    icon={worker.state === 2 ? technicianIconTraveling : technicianIconFixing}
                                    position={worker.coordinates} >
                                    <Popup>
                                        <div style={{ fontWeight: 'bolder' }}>Technician:<br />
                                            <div>{worker.name} is currently {worker.state === 2
                                                ? 'traveling to this facility.'
                                                : 'working on the facility.'}
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>)
                        }))}
                    </MarkerClusterGroup>
                </Map>

            </div>);
    }
}


export default MapView;