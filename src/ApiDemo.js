import React, {useState, useEffect} from "react";
import axios from "axios";


export default function ApiDemo(props){

    const [count, setCount] = useState(0)
    const [age, setAge]= useState(0)

    useEffect(()=>{
console.log("loaded")
    }, [count])
    
    return(
<div>
   <h2>API comp {count}</h2>
   <h2>Age {age}</h2>
   <button onClick={()=>{setCount(count+1)}}>Increase</button>
   <button onClick={()=>{setAge(age+1)}}>Increase Age</button>
</div>
    )

}