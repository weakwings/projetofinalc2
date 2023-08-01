import React from "react";
import search from "../../components/Search/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const handleLocationClick = () => {
    const cityPosition = [-23.5489, -46.6388];

    const mapUrl = `https://www.openstreetmap.org/#map=13/${cityPosition[0]}/${cityPosition[1]}`;

    window.open(mapUrl, "_blank");
  };

  return (
    <div className="searchbox">
      <button
        id="btnSearch"
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Seach Location
      </button>

      <div
        class="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">
            <nav>
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <input
                    class="box-search"
                    type="search"
                    placeholder="  search location"
                    aria-label="Search"
                  />
                  <button class="btn-search" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>London</p>
          <p>Barcelona</p>
          <p>Long Beach</p>
        </div>
      </div>
      <button className="btn-L" onClick={handleLocationClick}>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
    </div>
  );
}

export default Search;
