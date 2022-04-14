import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import React from "react";

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoic2tvcm5vdXMiLCJhIjoiY2s4dDBkNjY1MG13ZTNzcWEyZDYycGkzMyJ9.tjfwvJ8G_VDmXoClOyxufg',
});


export default function App() {

    return (
        
        <Map
            style="mapbox://styles/mapbox/streets-v8"
            containerStyle={{
                height: "40vh",
                width: "40vw",
            }}

            center={[4.3517103,50.8503396 ]}
            
            
        >       
        </Map>
    );
}


