import { useState } from "react";
import Navbar from "./Navbar";
import "../index.css"
import { useContext } from "react";
import {ThemeContext} from "../Context/Context";

function Area(){
    
    const {theme}= useContext(ThemeContext);
    const [base, setbase] = useState(0);
    const [height, setheight] = useState(0);
    const [area, setarea] = useState('');
    function calculate_area(){
        setarea(0.5*base*height);
    }
    return (
        <>
        <Navbar color = {"brown"} />
        <div className={theme}> 
        <div className="container">

            <div className = "main ">

            <h2 id = "heading">Find  <span  id = "head"  style = {{color :"brown"}} >Area</span></h2>
         
         <label > Enter Base:
            <input type="number" name="" onChange={(e) =>setbase(Number(e.target.value))} id="base" />
         </label>

         <label > Enter Height : 
            <input type="number" name="" onChange={(e) =>setheight(Number(e.target.value))} id="height" />
         </label>

         
       
         </div>
         <button id ="btn" onClick={calculate_area}>Calculate Area</button>

         <h3 id = "output"  style = {{color :"brown"}}>{area}</h3>
        </div>
        </div>
        </>
    )
}

export default Area ;