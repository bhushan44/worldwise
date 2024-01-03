import React from "react";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CityContext";
export default function CountryList() {
  let { cities } = useCities();
  if (cities.length === 0) {
    return (
      <Message message="add your first city by clicking the city on a map"></Message>
    );
  }
  let countries = cities.reduce((arr, cur) => {
    if (!arr.map((el) => el.country).includes(cur.country))
      return [...arr, { country: cur.country, emoji: cur.emoji }];
    else return arr;
  }, []);
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((city) => (
          <CountryItem country={city}></CountryItem>
        ))}
      </ul>
    </div>
  );
}
