import React from 'react'
 import {
   BrowserRouter as Router,
   Route,
 } from "react-router-dom";
import Navbar from './Components/Navbar'
import Weather from './Components/Weather'
import Footer from './Components/Footer'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Weather />
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App;