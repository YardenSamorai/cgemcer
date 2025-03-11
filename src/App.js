import './App.css';
import React from 'react';
import DiamondCard from './pages/DiamondCard';
import {useState, useEffect} from 'react';
import TC167C from "./imges/TC167C.jpg";



function App() {

  const hardCodedDetails = { 
    stone_id: "TC-167",
    clarity: "Moderate",
    Measurements :"10.78 X 6.89 X 5.24" ,
    certificate_number: 151630,
    shape:"TR",
    lab: "ICA",
    carat: 2.23,
    origin: "Zambia",
    ratio: 1.56,
    price: "B-MNOIY", 
    total_price: "HEESI",
    cert_img: {TC167C},
    video:"https://v360.in/gemstone/vision360.html?d=TC-167C" ,
    cert_pdf: "https://app.barakdiamonds.com/Gemstones/Output/Certificates/151629.pdf?isPopup=true&tm=1741698462508", 
  };

  return (
    <div className="App">
      <DiamondCard details={hardCodedDetails}/>
    </div>
  );
}

export default App;