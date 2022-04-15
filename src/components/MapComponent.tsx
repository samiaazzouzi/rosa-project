import React, { useRef, useEffect, useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';
function MapComponent () {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaWFhenpvdXppIiwiYSI6ImNrb2U4Y3RtNDAydXMzMGxhZ21udGFveDUifQ.dk_PHGg5r9MO9cb5iI_MLA';
    const mapContainer = useRef(null);
    
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (!mapContainer.current) { return
        }; 
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v8',
            center: ([4.3666294, 50.8333432]),
            zoom: 9
        });
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            'office location .....'
        );
        const marker1 = new mapboxgl.Marker()
            .setLngLat([4.3666294, 50.8333432])
            .setPopup(popup)
            .addTo(map);
    });
    return (
        <div>
            <div ref={mapContainer} className="map-container" />
            <div className="card" style={{ width: "40rem", borderLeft: "0", borderTop: "0", borderRight: "0", borderBottom: "0" }}>
                <div className="card-body">
                    <h5 className="card-title">Spoken Languages</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm ">
                                <p>French (Français)</p>
                            </div>
                            <div className="col-sm ">
                                <p>English (English)</p>
                            </div>
                            <div className="col-sm">
                                <p>Dutch (Nederlands)</p>
                            </div>
                        </div>
                    </div>
                    <h5 className="card-title">Website</h5>
                  
                    <li><a href="Website Samia Azzouzi">Website Samia Azzouzi</a></li>
                    <h5 className="card-title">NIHII number</h5>
                    <p>123456789</p>
                </div>
            </div>
        </div>
    );
}
export default MapComponent


