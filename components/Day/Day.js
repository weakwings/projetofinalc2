import React from "react";
import Image from "next/image";

function getWeatherImage(weather) {
  switch (weather) {
    case "Clear":
      return "/Clear.png";
    case "Clouds":
      return "/LightCloud.png";
    case "Drizzle":
      return "/LightRain.png";
    case "Rain":
      return "/HeavyRain.png";
    case "Thunderstorm":
      return "/Thunderstorm.png";
    case "Snow":
      return "/Snow.png";
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
      return "/Shower.png";
    default:
      return "/HeavyCloud.png";
  }
}

function Day({ day, index }) {

  return (
    <div className="box-week">
      <div className="week-card">
        {index === 0
          ? "Tomorrow"
          : new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
      </div>
      <Image
        src={getWeatherImage(day.weather[0].main)}
        alt={day.weather[0].main}
        width={50}
        height={50}
      />
      <div className="TsHs">
        {Math.round(day.main.temp_min - 273.15)}ºC{" "}
        {Math.round(day.main.temp_max - 273.15)}ºC
      </div>
    </div>
  );
}

export default Day;



