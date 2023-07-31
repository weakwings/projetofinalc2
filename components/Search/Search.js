import React from "react";
import search from "../../components/Search/search.css";

function Search() {
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
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>I will not close if you click outside of me.</div>
        </div>
      </div>
      <button className="btn-L">
        <span class="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
}

export default Search;
