import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
export default function CityItem({ city }) {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      // weekday: "long",
    }).format(new Date(date));
  const { cityName, emoji, date, id, position } = city;
  return (
    <li className={styles.cityItem}>
      <Link
        className={styles.cityItem}
        to={`${city.id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deletebtn}>&times;</button>
      </Link>
    </li>
  );
}
