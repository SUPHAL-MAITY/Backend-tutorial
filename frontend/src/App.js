
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {
  const[jokes,setJokes]=useState([])


  useEffect(()=>{
    getJokes()
  },[])


  const getJokes=async(req,res)=>{

    try {
      const {data}= await axios.get("/api/jokes")
      setJokes(data)
      

      
    } catch (error) {
      console.log(error)
      
    }
    
  }


  return (
    <>
    <h1>Hustle_with_suphal</h1>
    <p>JOKES:{jokes.length}</p>
    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
   
    
    </>
  );
}

export default App;
