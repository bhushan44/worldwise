import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
let CityContext = createContext();
function ContextProvider({ children }) {
  const [cities, setcities] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  let url = "http://localhost:8000";
  useEffect(function () {
    async function fetchcities() {
      let data = await fetch(`${url}/cities`);
      let res = await data.json();
      setcities(res);
    }
    fetchcities();
  }, []);
  async function getCity(id) {
    let data = await fetch(`${url}/cities/${id}`);
    let res = await data.json();
    setCurrentCity(res);
  }
  async function createCity(newcity) {
    const res = await fetch(`${url}/cities`, {
      method: "POST",
      body: JSON.stringify(newcity),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    setcities((cities) => [...cities, data]);
  }
  return (
    <CityContext.Provider
      value={{ cities: cities, currentCity, getCity, createCity }}
    >
      {children}
    </CityContext.Provider>
  );
}
function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("citiescontext used outside the provider");
  return context;
}

export { ContextProvider, useCities };
