import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { cities } from "../../assets/utils/cities";
import NavBar from "../../assets/components/NavBar/NavBar";
import "./HomePage.css";
const weather_api_key = import.meta.env.VITE_OPENWEATHER_API_KEY;
// const weather_api_key = 0;

const weatherIconMap = {
  // Thunderstorm
  200: { icon: "isolated_scattered_tstorms_day", name: "Гроза" },
  201: { icon: "strong_tstorms", name: "Гроза с дождём" },
  202: { icon: "strong_tstorms", name: "Сильная гроза" },
  210: { icon: "isolated_scattered_tstorms_day", name: "Лёгкая гроза" },
  211: { icon: "strong_tstorms", name: "Гроза" },
  212: { icon: "strong_tstorms", name: "Сильная гроза" },
  221: { icon: "strong_tstorms", name: "Рваная гроза" },
  230: { icon: "isolated_scattered_tstorms_day", name: "Гроза с моросью" },
  231: { icon: "isolated_scattered_tstorms_day", name: "Гроза с моросью" },
  232: { icon: "strong_tstorms", name: "Сильная гроза с моросью" },

  // Drizzle
  300: { icon: "drizzle", name: "Морось" },
  301: { icon: "drizzle", name: "Морось" },
  302: { icon: "drizzle", name: "Сильная морось" },
  310: { icon: "drizzle", name: "Небольшой дождь" },
  311: { icon: "drizzle", name: "Дождь с моросью" },
  312: { icon: "drizzle", name: "Сильный дождь с моросью" },
  313: { icon: "drizzle", name: "Ливень с моросью" },
  314: { icon: "drizzle", name: "Сильный ливень с моросью" },
  321: { icon: "drizzle", name: "Ливневая морось" },

  // Rain
  500: { icon: "scattered_showers_day", name: "Небольшой дождь" },
  501: { icon: "showers_rain", name: "Умеренный дождь" },
  502: { icon: "heavy_rain", name: "Сильный дождь" },
  503: { icon: "heavy_rain", name: "Очень сильный дождь" },
  504: { icon: "heavy_rain", name: "Экстремальный дождь" },
  511: { icon: "sleet_hail", name: "Ледяной дождь" },
  520: { icon: "scattered_showers_day", name: "Кратковременный дождь" },
  521: { icon: "showers_rain", name: "Ливень" },
  522: { icon: "heavy_rain", name: "Сильный ливень" },
  531: { icon: "showers_rain", name: "Рваный ливень" },

  // Snow
  600: { icon: "flurries", name: "Небольшой снег" },
  601: { icon: "snow_showers_snow", name: "Снег" },
  602: { icon: "heavy_snow", name: "Сильный снег" },
  611: { icon: "sleet_hail", name: "Мокрый снег" },
  612: { icon: "wintry_mix_rain_snow", name: "Снег с дождём" },
  613: { icon: "wintry_mix_rain_snow", name: "Снег с дождём" },
  615: { icon: "wintry_mix_rain_snow", name: "Лёгкий снег с дождём" },
  616: { icon: "wintry_mix_rain_snow", name: "Снег с дождём" },
  620: { icon: "snow_showers_snow", name: "Снегопад" },
  621: { icon: "snow_showers_snow", name: "Ливневый снег" },
  622: { icon: "heavy_snow", name: "Сильный снегопад" },

  // Atmosphere
  701: { icon: "haze_fog_dust_smoke", name: "Туман" },
  711: { icon: "haze_fog_dust_smoke", name: "Дымка" },
  721: { icon: "haze_fog_dust_smoke", name: "Мгла" },
  731: { icon: "haze_fog_dust_smoke", name: "Пыль" },
  741: { icon: "haze_fog_dust_smoke", name: "Густой туман" },
  751: { icon: "haze_fog_dust_smoke", name: "Песчаная буря" },
  761: { icon: "haze_fog_dust_smoke", name: "Пыльная буря" },
  762: { icon: "blizzard", name: "Вулканический пепел" },
  771: { icon: "blowing_snow", name: "Шквалистый ветер" },
  781: { icon: "tornado", name: "Торнадо" },

  // Clear
  800: { icon: "sunny", name: "Ясно" },

  // Clouds
  801: { icon: "partly_cloudy", name: "Малооблачно" },
  802: { icon: "partly_cloudy", name: "Переменная облачность" },
  803: { icon: "mostly_cloudy_day", name: "Облачно" },
  804: { icon: "cloudy", name: "Пасмурно" },
};

function HomePage({ city, setCity }) {
  const userLat = cities[city]["lat"];
  const userLon = cities[city]["lon"];
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&appid=${weather_api_key}&units=metric`,
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(weatherData ? "I KNOW THE WEATHER!" : "sorry couldn't connect");
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="center weather-info">
          <h1 id="cityName">{cities[city].name}</h1>
          <img
            src={
              weatherData
                ? `../../src/assets/weather-icons/${weatherIconMap[weatherData.weather[0].id].icon}.png`
                : "../../src/assets/weather-icons/sunny.png"
            }
          />
          <div className="weather-data">
            <p id="weather">
              {weatherData
                ? weatherIconMap[weatherData.weather[0].id].name
                : "[ЗАГРУЗКА]"}
            </p>
            <p>{weatherData ? weatherData.main.temp : "[ЗАГРУЗКА]"}°C</p>
            <p id="feelsLike">
              Ощущается как{" "}
              {weatherData ? weatherData.main.feels_like : "[ЗАГРУЗКА]"}°C
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
