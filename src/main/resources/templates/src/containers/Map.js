import React from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Marker from '../components/Marker';
import {Row, Col} from 'react-materialize';
import {API_KEY} from "../services/constants";

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
        bounds.extend(new maps.LatLng(
            place.geometry.location.lat,
            place.geometry.location.lng,
        ));
    });
    return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
    });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
};

class Map extends React.Component {

    constructor(props) {
        super(props);
        axios.defaults.baseURL = 'http://localhost:8080';
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11,
            places: [
                {
                    id: 0,
                    name: 'Here',
                    geometry: {
                        location: {
                            lat: 44,
                            lng: 44
                        }
                    }
                },
                {
                    id: 1,
                    name: 'i',
                    geometry: {
                        location: {
                            lat: 45,
                            lng: 45
                        }
                    }
                },
                {
                    id: 2,
                    name: 'am',
                    geometry: {
                        location: {
                            lat: 46,
                            lng: 46
                        }
                    }
                }
            ]
        }
    }

    componentDidMount() {
        // axios.get(`${axios.defaults.baseURL}/locations`, {...this.props.book})
        //     .then(response => response.json())
        //     .then(data => this.setState({places: data.results}));
    }

    render() {
        console.log(this.state.places);
        return (
            <Row>
                <Col s={12}>
                    <div className="container">
                        <div className='min-height-block' style={{height: '700px'}}>
                            <GoogleMapReact
                                bootstrapURLKeys={{key: API_KEY}}
                                defaultCenter={this.state.center}
                                defaultZoom={this.state.zoom}
                                yesIWantToUseGoogleMapApiInternals
                                onGoogleApiLoaded={({map, maps}) => apiIsLoaded(map, maps, this.state.places)}
                            >
                                {this.state.places.map(place => (
                                    <Marker
                                        number={place.id}
                                        key={place.id}
                                        text={place.name}
                                        lat={place.geometry.location.lat}
                                        lng={place.geometry.location.lng}
                                    />
                                ))}
                            </GoogleMapReact>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Map);