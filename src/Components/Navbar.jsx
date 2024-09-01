import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import {ThemeContext} from "../Context/Context";
import { useContext } from "react";



const Navbar = (props) => {
  const {theme , changeTheme}  = useContext(ThemeContext) ;
  const [toggle, settoggle] = useState("none");
  const {color} = props;
  
  return (
    
    <nav className="navbar"  style = {  {backgroundColor: color } }>
      <div className="logo">
        <h3>Fun with Triangle</h3>
        <a href="#" className="toggle-btn"   onClick={(e)=>{
          toggle === "none" ? settoggle("active") :settoggle("none");
        }} >
          <span   className = "bar"></span>
          <span  className = "bar"></span>
          <span  className = "bar"></span>
        </a>
      </div>

      <ul className={"nav-links " + toggle} >
        <li><Link to="/">Is_triangle</Link></li>
        <li><Link to="/area">Area</Link></li>
        <li><Link to="/hypotenuse">Hypotenuse</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li  id = "mode_text" onClick={changeTheme}>{theme === 'dark' ? "Mode Light" : "Mode Dark"}

</li>

        <li  id = "mode_btn" onClick={changeTheme}>{theme === 'dark' ? <FaToggleOff /> : <FaToggleOn />}

        </li>


      </ul>

    </nav>
  );
}

export default Navbar;
