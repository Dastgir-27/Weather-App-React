import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./DisplayWeatherData.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function DisplayWeatherData({tempData}){
    let Summer_Url = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a";
    let Winter_Url = "https://images.unsplash.com/photo-1648518520687-34a14d251b10";
    let Rainy_Url = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f";
    return (
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="weatherImg"
                    height="140"
                    image={tempData.humidity > 80 ? Rainy_Url : tempData.temp > 20 ? Summer_Url : Winter_Url }
                />  
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {tempData.location} {tempData.country} {tempData.humidity > 80 ? <ThunderstormIcon/> : tempData.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>🌡️Temperature: {tempData.temp}&deg;C</p>
                        <p>💧Humidity: {tempData.humidity} </p>
                        <p>🔼Max: {tempData.max}&deg;C | 🔽Min: {tempData.min}&deg;C</p>
                        
                        <p>📝Feels like the climate will be <i>{tempData.feelsLike}</i></p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}