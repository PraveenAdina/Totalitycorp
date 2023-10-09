import React from 'react'
import MultiplePizzas from "../assets/log.jpeg"
import "../styles/About.css"
function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage:`url(${MultiplePizzas})` }}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p> hello ...this is a best website that brings you happiness.  </p>
        </div>

      
    </div>
  )
}

export default About
