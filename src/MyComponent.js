import React, {useState} from "react";

export default 

function MyComponent(){

    const[temp, setTemp] = useState(5)
    const[mode, setMode] = useState("Cold")
    const [degree, setDegree] = useState("C")

    function convertdegree(){
        if (degree === "C"){
            setTemp((temp*1.8)+32) 
            
        }
        if (degree === "F"){
            setTemp((temp-32)/1.8)
            
        }

        
    }
    return(
        <div>
            
            <h1>{temp}</h1> 
            <h1>{mode}</h1>
            <h1>{temp} &#176; {degree}</h1>
             
            <button onClick={() => {setTemp(temp+1)}}>+</button>
            <button onClick={() => {setTemp(temp-1)}}>-</button>
            <hr />
            <br />
             
            <button onClick={() =>{setMode("Cold")}}>Cold</button>
            <button onClick={() =>{setMode("Hot")}}>Hot</button>
            <button onClick={() =>{setMode("Auto")}}>Auto</button>
            <br />
            <hr />
            <br />
            
            <button onClick={() =>{setDegree("C")}}>C</button>
            <button onClick={() =>{setDegree("F")}}>F</button>
            <button onClick={() =>{convertdegree()}}>Convert</button>
            </div>
    )
}