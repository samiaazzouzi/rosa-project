import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftComponent from './components/LeftComponent';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import MapComponent from './components/MapComponent';
import RightComponent from './components/RightComponent';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a href="" className="text-decoration-none" style={{ color: "#E4A598"}}>ROSA</a>  
        </h1>
      </header>
      <div className="container">

        <div className="row">
          <div className="col">
            <LeftComponent />
            <MapComponent />
          </div>
          <div className="col">
            <RightComponent />
          </div>
        </div>
      </div>



    </div>

  );
}

export default App;
