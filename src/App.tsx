import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Popper from "popper.js";
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
        <div className="navbar">
          <a href="" className="text-decoration-none" style={{color: "#E4A598", fontSize: "2.5em"}}>ROSA</a>  
            <select id="select1">
              <option value="free">EN</option>
              <option value="basic">NL</option>
              <option value="premium">FR</option>
            </select>
        </div>
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
