import { useEffect, useRef, useState } from "react";

interface IWeatherInfo {
  coord: {
    lat: number;
    long: number;
  };
  city: string;
  description: string;
  temperature: number;
}

const tempData: IWeatherInfo = {
  coord: {
    lat: 2000,
    long: 3000
  },
  city: "Rohak",
  description: "Cool",
  temperature: 270
};

const API_KEY = "e43b83b9cb9fa9598bb8c1fa4da2f00b";
const CITY = "Rohtak";

export default function WeatherForcasting(props: any) {
  const [data, setData] = useState(tempData);
  const [apiKey, setApiKey] = useState(API_KEY);
  const [city, setCity] = useState(CITY);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then(res => res.json())
        .then((data: any) => {
          setData({
            coord: data?.coord,
            city: data?.name,
            description: data?.weather[0].description ?? "No Description",
            temperature: data?.main.temp
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, [apiKey, city]);

  function cityChange() {
    setCity(`${inputRef.current?.value}`);
  }

  return (
    <div className="weather-forcasting-container">
      <div className="weather-forcasting-container__input">
        <label>Enter City Name</label>
        <input ref={inputRef} />
        <button type="button" onClick={cityChange}>
          {" "}
          Search{" "}
        </button>
      </div>
      <div className="weather-forcasting-container__data">
        <div> Latitude : {data.coord.lat} </div>
        <div> Longitute : {data.coord.long} </div>
        <div> City: {data.city} </div>
        <div> Description: {data.description} </div>
        <div> temperature: {data.temperature} </div>
      </div>
    </div>
  );
}
