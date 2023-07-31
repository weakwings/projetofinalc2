"use client";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";

async function fetchSidebarData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=-23.5489&lon=-46.6388&appid=ae9bb8d429f61293e2d0cc73c650b947"
  );
  const data = await response.json();
  return data;
}

function Home() {
  const [sidebarData, setSidebarData] = useState(null);
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    fetchSidebarData().then((data) => setSidebarData(data));
  }, []);

  return (
    <div id="content">
      <div id="container_1">
        <Search />
        <Sidebar data={sidebarData} />
      </div>
      <div id="container_2">
        <Main data={mainData} />
      </div>
    </div>
  );
}

export default Home;
