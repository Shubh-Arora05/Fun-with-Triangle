import {useState} from 'react' ;
import "../index.css";
import {ThemeContext} from "../Context/Context";
import { useContext } from "react";



function Is_triangle(props){

  const  {color} = props ;
  const {theme} = useContext(ThemeContext)

    

    var [s1, sets1] = useState(0);
    var [s2, sets2] = useState(0);
    var [s3, sets3] = useState(0);
    const [result, setresult] = useState('');

    function check_triangle(){

        let sum = s1 + s2 + s3 ;
        if(sum === 180){
          setresult(`It is a Triangle`);
        }
        else{
            setresult(`It is not a Triangle`);
        }
    }
    return (
        <>
        <div className={theme}>
         
        
        
        <div className="container" >
       

            <div  className="main" >
            <h2 id = "heading">Is  <span id = "head" style = {{color:color}}>Triangle? </span></h2>
           
            <label>
                    Angle one : 
                <input type="number" name="" onChange={(e) =>{sets1(Number(e.target.value))}} id="s11" /> 
            </label>

            <label>
            Angle two : 
                <input type="number" name=""  onChange={(e) =>{sets2(Number(e.target.value))}}  id="s22" />
            </label>

            <label>
            Angle three : 
                <input type="number" name=""  onChange={(e) =>{sets3(Number(e.target.value))}}  id="s33" />
            </label>

           

        </div>

        <button id = "btn" onClick={check_triangle}>Check</button>

<h3 id = "output" style = {{color:color}}>{result}</h3>

        </div>

        </div>
        </>
    )
}

export default Is_triangle ;