import React, {useState} from "react";
import{Card} from "antd"
export default function Movie(props){

    const[age, setAge]=useState(2022-props.year)

    return(
        <Card title="Movie info"  style={{width:300}}>
            <hr />
            <p>{props.title}</p>
            <p>{props.year}</p> 
            <p>{props.genre}</p>
            <p>{props.director}</p>
            <p>{age}</p>
            <hr />
            </Card>
       
    )
}