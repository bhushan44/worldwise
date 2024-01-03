import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
let CityContext = createContext();
function ContextProvider({ children }) {
  const [cities, setcities] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  let url = "http://localhost:8000";
  useEffect(function () {
    async function fetchcities() {
      let data = await fetch(`${url}/cities`);
      let res = await data.json();
      setcities(res);
    }
    fetchcities();
  }, []);
  return (
    <CityContext.Provider value={{ cities: cities }}>
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
