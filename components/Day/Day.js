import React from "react";
import Image from "next/image";
import "../../components/Day/day.css";

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

function Day({ day, index, unit }) {
  const date = new Date(day.dt * 1000);
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="box-week">
      <div className="week-card">{index === 0 ? "Tomorrow" : dateString}</div>
      <Image
        src={getWeatherImage(day.weather[0].main)}
        alt={day.weather[0].main}
        width={50}
        height={50}
      />
      <div>
        <span className="Tmin">
          {Math.round(day.main.temp_min)}
          {unit === "metric" ? "°C" : "°F"}
        </span>
        <span className="Tmax">
          {Math.round(day.main.temp_max)}
          {unit === "metric" ? "°C" : "°F"}
        </span>
      </div>
    </div>
  );
}

export default Day;
