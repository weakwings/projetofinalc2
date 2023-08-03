import { useState, useRef } from "react";
import search from "../../components/Search/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ onCitySelect, currentCity, errorMessage }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const offcanvasRef = useRef();

  const handleCityClick = (city) => {
    setSelectedCity(city);
    onCitySelect(city);
    handleCloseOffcanvas();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
      onCitySelect(inputValue);
      handleCloseOffcanvas();
    }
  };

  const handleLocationClick = () => {
    const mapUrl = `https://www.openstreetmap.org/search?query=${currentCity}`;

    window.open(mapUrl, "_blank");
  };

  const handleCloseOffcanvas = () => {
    offcanvasRef.current.dispatchEvent(new Event("hidden.bs.offcanvas"));
  };

  return (
    <div className="searchbox">
      <button
        id="btnSearch"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Seach for places
      </button>

      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div id="header-canvas" className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="offcanvasWithBothOptionsLabel"
          ></h5>
          <p
            type="button"
            id="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </p>
        </div>
        <div id="body-canvas" className="offcanvas-body">
          <div id="search-sidebar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              className="box-search"
              type="search"
              placeholder="   search location"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
            <button className="btn-search" onClick={handleSearchClick}>
              Search
            </button>
            {errorMessage && <p id="errormg" className="error-message">{errorMessage}</p>}
            <div className="cities-box">
              <p onClick={() => handleCityClick("London")}>London</p>
              <p onClick={() => handleCityClick("Barcelona")}>Barcelona</p>
              <p onClick={() => handleCityClick("Long Beach")}>Long Beach</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-L" onClick={handleLocationClick}>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
    </div>
  );
}

export default Search;
