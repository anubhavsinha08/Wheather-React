import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";

export default function InfoBox({info}) {
    let init_url="https://images.unsplash.com/photo-1669453343304-ced8306f87fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1931";

  // let info = {
  //   city:"Delhi",
  //   temp: 27,
  //   temp_min: 21,
  //   temp_max: 29,
  //   humidity: 56,
  //   feel_like: 12,
  //   weather: "HAZE",
  // };
  return (
    <div className="InfoBox">
      {/* <h1>{info.weather}</h1> */}
      <div className='infoContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={init_url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>TEMPERATURE: {info.temp}&deg;C</p>
            <p>HUMIDITY: {info.humidity}&deg;C</p>
            <p>MIN_TEMP: {info.temp_min}</p>
            <p>MAX_TEMP: {info.temp_max}</p>
            <p>The Wheather can be described as <b>{info.weather}</b>  and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
