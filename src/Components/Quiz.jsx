import { useState } from "react";
import Navbar from "./Navbar";
import { useContext } from "react";

import {ThemeContext} from "../Context/Context";

    import "../index.css"
function Quiz(){
    const [result, setresult] = useState('') ;
    const {theme }= useContext(ThemeContext);

    const answers = ["80°", "Hypotenuse"];

    function check_ans(){

      
       
        let size = 0;
        var userAns = new FormData(form);
        for(let i of userAns.entries()){
            size++;
        }

        let index = 0;
        let marks = 0 ;
        if(size !== 2){
            alert("Please fill in all the fields");
        }else{
            for(let i of userAns.values()){
              if(i === answers[index]){
                marks++;
              }
              index += 1;
            }
        }

        setresult(`Score is ${marks}`);

    }

       
    return(
        <>
         <Navbar color = {"rgb(75, 183, 75)"} />
         <div className={theme}>
        <div className="container">
            <div className="main">
            <h2 id  = "heading">Triangle <span id = "head"  style = {{color :"rgb(75, 183, 75)"}}>Quiz </span></h2>
            <form  id = "form">

            <div className="ques_ans">
            <p>1.  What will be third angle if first two are 45° and 55°?</p>
            <div id = "id_label">
                <label>
                <input type="radio" name="questionOne"  value="70°"/>70°
              </label>
              <label  >
                <input type="radio" name="questionOne"  value="80°"/>80°
              </label>

              <label >
                <input type="radio" name="questionOne"  value="90°"/>90°
              </label>
              </div>

                </div>

                <div className="ques_ans">
                    <p>2. Which is the longest side in a right angle triangle?</p>
                   
<div id = "id_label">         
               <label >
                        <input type="radio" name="questionTwo"  value="Hypotenuse"/>Hypotenuse
                    </label>

                    <label >
                        <input type="radio" name="questionTwo"  value="base"/>Base
                    </label>

                    <label >
                        <input type="radio" name="questionTwo"  value="perpendicular"/>Perpendicular
                    </label>
                    </div>

                </div>

                

               

            </form>

          

        </div>

        <button id = "btn" onClick={check_ans}>Sumbit</button>

<h3 id = "output"  style = {{color :"rgb(75, 183, 75)"}}>{result}</h3>
        </div>
        </div>
        </>
    )
}

export default Quiz ;