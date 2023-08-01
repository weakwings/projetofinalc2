import React from "react";
import sidebar from "../../components/Sidebar/sidebar.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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

function Sidebar({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const kelvin = data.main.temp;
  const celsius = Math.round(kelvin - 273.15);
  const weather = data.weather[0].main;
  const date = new Date(data.dt * 1000);
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="sidebar-box">
      <div id="img-side">
        <Image src={getWeatherImage(weather)} alt={weather} width={200} height={200} />
      </div>
      <h1 className="temperature">
        {celsius}
        <span className="Cels">°C</span>
      </h1>
      <div className="weather">{weather}</div>
      <div className="date">Today - {dateString}</div>
      <div className="location">
      <FontAwesomeIcon icon={faLocationDot} />
      {data.name}
      </div>
    </div>
  );
}

export default Sidebar;
