import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import react,{useState} from 'react'  
export default function WeatherApp()
{ 
    const[weatherinfo,setWeather]=useState({
        city:"nagpur",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newinfo)=>{
        setWeather(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    );
}