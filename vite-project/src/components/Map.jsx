import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  let navigate = useNavigate();
  const [searchparams, setsearchparams] = useSearchParams();
  let lat = searchparams.get("lat");
  let lng = searchparams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      map
      <h1>
        {lat},{lat}
      </h1>
    </div>
  );
}
