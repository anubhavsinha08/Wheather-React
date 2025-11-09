import SearchBox from "./searchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>WEATHER FORECAST</h1>
      <SearchBox />
      <br />
      <InfoBox />
    </div>
  );
}
