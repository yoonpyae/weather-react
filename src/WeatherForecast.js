import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
  
    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);
  
    function handleResponse(response) {
      console.log(response.data);
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            {forecast.slice(0, 5).map(function (dailyForecast, index) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      let apiKey = "22b87393a0c4d40fffa30fb7ef2to93a";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return null;
    }
  }