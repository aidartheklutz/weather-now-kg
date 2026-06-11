import React from "react";
import { cities } from "../../assets/utils/cities";
import NavBar from "../../assets/components/NavBar/NavBar";
import { NavLink } from "react-router";
import "./SettingsPage.css";

function Settings({ city, setCity }) {
  function changeCity(newCity) {
    setCity(newCity);
  }

  return (
    <>
      <NavBar />

      <div className="content margins">
        <NavLink to="/">
          <i className="bi bi-arrow-left"></i> Назад
        </NavLink>
        <h2>Выбор города</h2>
        <p>
          Ваш город: <b>{cities[city].name}</b> (id: {city})
        </p>
        <div className="city-buttons">
          {Object.keys(cities).map((city) => (
            <button
              className="city-button"
              key={city}
              onClick={() => changeCity(city)}
            >
              {cities[city].name}
            </button>
          ))}
        </div>
        <br></br>
        <h2>О проекте</h2>
        <p>
          Этот проект я сделал в качестве небольшой практики с API и дизайном,
          суммарно это заняло около четырёх часов. Я являюсь студентом
          бишкекского колледжа TSI AUCA. Вы можете посетить мой личный сайт
          здесь:{" "}
          <a href="https://aidartheklutz.github.io" target="_none">
            aidartheklutz.github.io
          </a>
          <p>
            The weather icons are the intellectual property of Google, I do not
            own the rights to them.
          </p>
        </p>
      </div>
    </>
  );
}

export default Settings;
