import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './styles.css'
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from "react-leaflet-cluster";
import Modal from './modal/modal'
import { useState } from 'react';
import markers from './places_mim_in.json'
import { Icon, divIcon, point } from "leaflet";

const customIcon = new Icon({
  iconUrl: require("./mim.png"),
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };


function Map_mim({x, new_zoom}) {
    const [modalActive, setActive] = useState(false)
    return (
        <div className="container_map">
        <MapContainer center={x} zoom={new_zoom}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                    <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
            >
                {/* Mapping through the markers */}
                {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>
                        <center><button className = 'pop_butt' onClick={() => setActive(true) & localStorage.setItem('text1', `${marker.text1}`) & localStorage.setItem('text2', `${marker.text2}`)
                    & localStorage.setItem('text3', `${marker.text3}`) & localStorage.setItem('url', `${marker.photo}`)}><b>{marker.text}</b></button></center>
                    
                    </Popup>
                
                </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
        <Modal active = {modalActive} set = {setActive} text1 = {localStorage.getItem('text1')} text2 = {localStorage.getItem('text2')} text3 = {localStorage.getItem('text3')} url = {localStorage.getItem('url')}/>
        </div>  
)

}
export default Map_mim