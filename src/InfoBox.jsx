import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default  function InfoBox({info})  
{ 
   
    const Hot_IMAGE="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_IMAGE="https://images.unsplash.com/photo-1608905978123-558c415998e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_IMAGE="https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    return( 
        <div className="InfoBox">
          
            <div className="cardcontainer">
            <Card className="card2" sx={{ maxWidth: 435 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={info.humidity>80 ? RAIN_IMAGE :info.temp>30 ? Hot_IMAGE : COLD_IMAGE}
        title="green iguana"
      />   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
          info.humidity>80 ? <ThunderstormIcon/> :info.temp>30 ? <WbSunnyIcon/> : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p> Temperature={info.temp}&deg;C</p>
        <p>humidity={info.humidity}</p> 
        <p>Min Temp={info.tempMin}</p> 
        <p>Max Temp={info.tempMax}&deg;C</p>  
        <p> The weather can be Described as {info.weather} and feels like {info.feelsLike}&deg;C</p> 
        </Typography>  
      </CardContent>
     </Card>   
     </div> 
     </div>
    );   
}
