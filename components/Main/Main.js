import React from "react";
import "../Main/main.css";
import Day from "../../components/Day/Day";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

function Main({ data, forecast, unit, setUnit }) {
  if (!data || !forecast) {
    return <div>Loading...</div>;
  }

  const windDirection = data.wind.deg;
  const compassStyle = {
    transform: `rotate(${windDirection}deg)`,
  };

  const humidity = data.main.humidity;
  const barVolume = {
    width: `${humidity}%`,
  };

  return (
    <div className="container-main">
      <div className="btn-CF">
        <button className="btn-C" onClick={() => setUnit("imperial")}>
          {" "}
          ºF
        </button>
        <button className="btn-F" onClick={() => setUnit("metric")}>
          {" "}
          ºC
        </button>
      </div>
      <div id="week-container" className="container-week">
        {forecast &&
          forecast.list &&
          forecast.list
            .filter((item, index) => index % 8 === 0)
            .slice(1, 5)
            .map((day, index) => (
              <div key={index}>
                <Day day={day} index={index} unit={unit} />
              </div>
            ))}
      </div>
      <div>
        <h1 className="today-h1">Todays Hightlights</h1>
      </div>
      <div id="box-status" className="status-box">
        <>
          <div className="status-1">
            <p className="txt">Wind status</p>
            <p id="result">
              {Math.round(data.wind.speed)}
              <span>mph</span>
            </p>
            <div id="compass">
              <div className="circle">
                <FontAwesomeIcon style={compassStyle} icon={faLocationArrow} />
              </div>
              <p>WSW</p>
            </div>
          </div>
          <div className="status-2">
            <p className="txt">Humidity</p>
            <p id="result">
              {data.main.humidity}
              <span>%</span>
            </p>
            <div id="bar100-1">
              <i>0</i>
              <i>50</i>
              <i>100</i>
            </div>
            <div className="humidity-bar-container">
              <div className="humidity-bar" style={barVolume}></div>
            </div>
            <p className="bar100-2">%</p>
          </div>
          <div className="status-3">
            <p className="txt">Visibility</p>
            <p id="result">
              {Math.round(data.visibility / 1609)}
              <span>miles</span>
            </p>
          </div>
          <div className="status-4">
            <p className="txt">Air Pressure</p>
            <p id="result">
              {data.main.pressure}
              <span>mb</span>
            </p>
          </div>
        </>
      </div>
      <footer id="devtag" className="dev">
        created by <span className="footer-name"> Felipe Messias</span> -
        devChallenges.io
      </footer>
    </div>
  );
}

export default Main;
