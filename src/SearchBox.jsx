import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo})
{   
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_key="ae98d399120e7202d963ef5dd5925813";


    let getWeatherinfo = async()=>{
      try{let respone= await fetch(
        `${API_URL}?q=${city}&appid=${API_key}&units=metric`);
      let jsonResponse= await respone.json();
      console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };
            console.log(result);
            return result;
          }catch(err){
            throw err;
          }
          
        };
       
   
   let handlechange=(evt)=>{
    setCity(evt.target.value);
   }          
   
   let handleSubmit= async (evt)=>{
    try{
      evt.preventDefault();
      console.log(city);
      setCity("");
       let newinfo=await getWeatherinfo();
       updateInfo(newinfo);
    }catch(err){
      setError("No such place in our API");
    }
     
   };
  
    return(  
    <div className="SearchBox">
       
        <form on onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
         Search
       </Button> 
       {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
    </div>
    );    
}