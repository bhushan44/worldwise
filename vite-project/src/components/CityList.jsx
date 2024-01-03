import React, { useContext } from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CityContext";
export default function CityList() {
  let { cities } = useCities();
  console.log("cities", cities);
  if (cities.length === 0) {
    return (
      <Message message="add your first city by clicking the city on a map"></Message>
    );
  }
  return (
    <div className={styles.cityList}>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} id={city.id}></CityItem>
        ))}
      </ul>
    </div>
  );
}
