import React, { useState, useEffect } from "react";
import "../Main/main.css";
import Day from "../../components/Day/Day";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

async function fetchWeatherData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=-23.5489&lon=-46.6388&appid=ae9bb8d429f61293e2d0cc73c650b947"
  );
  const data = await response.json();
  return data;
}

function Main() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData().then((data) => setWeatherData(data));
  }, []);

  const windDirection = weatherData?.list[0].wind.deg;
  const compassStyle = {
    transform: `rotate(${windDirection}deg)`,
  };

  const humidity = weatherData?.list[0].main.humidity;
  const barStyle = {
    width: `${humidity}%`,
  };

  return (
    <div className="container-main">
      <div className="btn-CF">
        <button className="btn-C"> ºF</button>
        <button className="btn-F"> ºC</button>
      </div>
      <div id="week-container" className="container-week">
        {weatherData &&
          weatherData.list
            .filter((item, index) => index % 8 === 0)
            .slice(0, 5)
            .map((day, index) => (
              <div key={index}>
                <Day day={day} index={index} />
              </div>
            ))}
      </div>
      <div>
        <h1 className="today-h1">Todays Hightlights</h1>
      </div>
      <div id="box-status" className="status-box">
        {weatherData && (
          <>
            <div className="status-1">
              <p className="txt">Wind status</p>
              <p id="result">
                {weatherData.list[0].wind.speed}
                <span>mph</span>
              </p>
              <div id="compass">
                <div className="circle"><FontAwesomeIcon style={compassStyle} icon={faLocationArrow} /></div>
                <p>WSW</p>
              </div>
            </div>
            <div className="status-2">
              <p className="txt">Humidity</p>
              <p id="result">
                {weatherData.list[0].main.humidity}
                <span>%</span>
              </p>
              <div id="bar100-1">
                <i>0</i>
                <i>50</i>
                <i>100</i>
              </div>
              <div className="humidity-bar-container">
                <div className="humidity-bar" style={barStyle}></div>
              </div>
              <p className="bar100-2">%</p>
            </div>
            <div className="status-3">
              <p className="txt">Visibility</p>
              <p id="result">
                {weatherData.list[0].visibility / 1000}
                <span>mph</span>
              </p>
            </div>
            <div className="status-4">
              <p className="txt">Air Pressure</p>
              <p id="result">
                {weatherData.list[0].main.pressure}
                <span>mb</span>
              </p>
            </div>
          </>
        )}
      </div>
      <footer id="devtag" className="dev">
        created by <span className="footer-name"> Felipe Messias</span> -
        devChallenges.io
      </footer>
    </div>
  );
}

export default Main;
