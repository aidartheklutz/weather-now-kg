import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "bishkek";
  });

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);
  return (
    <Routes>
      <Route index element={<HomePage city={city} setCity={setCity} />} />
      <Route
        path="/settings"
        element={<SettingsPage city={city} setCity={setCity} />}
      />
    </Routes>
  );
}

export default App;
