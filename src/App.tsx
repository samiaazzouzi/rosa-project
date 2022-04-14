import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftComponent from './components/LeftComponent';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Map from './components/Map';



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
            <Map />
          </div>
          <div className="col">
            right side
          </div>
        </div>
      </div>



    </div>

  );
}

export default App;
