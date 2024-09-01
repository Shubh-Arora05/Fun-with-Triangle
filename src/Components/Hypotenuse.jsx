import { useState } from "react";
import Navbar from "./Navbar";
import "../index.css";
import { useContext } from "react";
import {ThemeContext} from "../Context/Context";
function Hypotenuse(){
    const {theme , changeTheme}  = useContext(ThemeContext) ;

    function handletheme(){
       changeTheme();
    }
    


    const [base, setbase] = useState(0);
    const [perpendicular, setperpendicular] = useState(0);
    const [result, setresult] = useState('');

    function calculate_hypotenuse(){
        if(base !== 0 && perpendicular !== 0){
            let hypotenuse = Math.sqrt(base**2 + perpendicular**2);
            setresult(hypotenuse);
        }
    }

    return (
        <>
         <Navbar color = {"#3498db"} />
         <div className={theme}>
        <div className = "container"> 

            <div className="main"  >

                
    <h2 id = "heading" >Find   <span id = "head" style = {{color :"#3498db"}}>Hypotenuse</span></h2>

            <label >
                Enter Base : 
                <input type="number" id = "base" onChange={(e) => {setbase(Number(e.target.value))}}/>
            </label>

            <label >
                Enter Perpendicular : 
                <input type="number" id = "perpendicular" onChange={(e) => {setperpendicular(Number(e.target.value))}} />
            </label>

            

            </div>
            <button id ="btn" onClick={calculate_hypotenuse}>Calculate Hypotenuse</button>

            <h3 id = "output" style = {{color :"#3498db"}}>{result}</h3>


        </div>
        </div>

        </>
    )
}

export default Hypotenuse ;