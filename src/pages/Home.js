import React from 'react'
import "../styles/Home.css"
import {Link} from "react-router-dom";
import BannerImage from '../assets/back.jpg'

function Home() {
  return (
    <div>
        <div className="home" style={{backgroundImage:`url(${BannerImage})` }}>
            <div className="headerContainer" >
                <h1>Perfect Cart</h1>
                <p>FIND YOUR HAPPINESS THROUGH SHOPPING</p>
                <Link to="/shop">
                <button>SHOP</button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Home
