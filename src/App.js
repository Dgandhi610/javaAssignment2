import Movie from "./Movie";
import {Row} from "antd";
import ApiDemo from "./ApiDemo";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {

 const MovieList = [
{title:"The Godfather",
year:"1972",
genre:"Drama",
director:"Francis Ford Capolla"
}, 
{title:"Superbad",
year:"2007",
genre:"Comedy",
director:"Greg Mottola"},
{title:"The Departed",
year:"2006",
genre:"Drama",
director:"Martin Scorsese"},
{title:"Saving Private Ryan",
year:"1998",
genre:"Action",
director:"Steven Spielberg"},
{title:"The Expendables",
year:"2010",
genre:"Action",
director:"Sylvester Stallone"}];

const [blogs, setBlogs]= useState(null)

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{setBlogs(response.data)}).catch(()=>{console.log("API call failed!!!")})
},[])
 


return (
    <div>
        <Row gutter={16}>
       {blogs && blogs.map((blogObj)=> {
        return <Movie key={blogObj.id} title={blogObj.title}vear={blogObj.userId} />
       })}
       </Row>

       <Row>
<ApiDemo />
       </Row>
       </div>
  );
    }
export default App;
