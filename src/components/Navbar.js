import React,{useState} from 'react'
import Logo from "../assets/ecommerce.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
function Navbar() {
    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavbar=()=>
    {
        setOpenLinks(!openLinks);
    };
  return (
    <div className="navbar">
      <div className='leftSide' id={openLinks ? "open" : "false"}>
        <img src = {Logo} alt="PIzza Logo" />
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}
export default Navbar;
