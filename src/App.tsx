import React, { useEffect, useState } from "react";

import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import MainWeatherComponent from "./Components/MainWeatherComponent";
import FiveDayComponent from "./Components/FiveDayComponent";
import { getLocationCoords, getWeather } from "./Dataservice/dataservice";
import { ICurrentWeather } from "./Interfaces/interface";
import { get } from "http";

function App() {

  const [feelsLike, setFeelsLike] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [temp, setTemp] = useState<number>(0);
  const [tempMax, setTempMax] = useState<number>(0);
  const [tempMin, setTempMin] = useState<number>(0);
  const [windSpd, setWindSpd] = useState<number>(0);
  const [icon, setIcon]  = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [sunrise, setSunrise] = useState<number>(0)
  const [sunset, setSunset] = useState<number>(0)

  const [searchName, setSearchName] = useState<string>("manteca")

  useEffect(() => {
    getLocationCoords(searchName)
    const getCurrent = async () => {
      const fetchedData = await getWeather();
      console.log(fetchedData);
      
      setDesc(fetchedData.weather[0].description)
      setFeelsLike(fetchedData.main.feels_like)
      setHumidity(fetchedData.main.humidity)
      setIcon(fetchedData.weather[0].icon)
      setTemp(fetchedData.main.temp)
      setTempMax(fetchedData.main.temp_max)
      setTempMin(fetchedData.main.temp_min)
      setWindSpd(fetchedData.wind.speed)
      setSunrise(fetchedData.sys.sunrise)
      setSunset(fetchedData.sys.sunset)
    };

    // getCurrent();
  }, [searchName]);
 
  // useEffect(() =>{
  //   console.log(searchName)
  // },[searchName])
  

  return (
    <div className="bg-blue-400 w-screen h-screen">
      <NavbarComponent keydown={setSearchName}/>
      <MainWeatherComponent desc={desc} feelsLike={feelsLike} humidity={humidity} temp={temp} tempMax={tempMax} tempMin={tempMin} windSpd={windSpd} icon={icon} sunrise={sunrise} sunset={sunset}/>
      <div className="mx-16 grid grid-cols-5">
        <FiveDayComponent />
        <FiveDayComponent />
        <FiveDayComponent />
        <FiveDayComponent />
        <FiveDayComponent />
      </div>
    </div>
  );
}

export default App;
