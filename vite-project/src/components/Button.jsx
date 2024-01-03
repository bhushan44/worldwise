import React from "react";
import styles from "./Button.module.css";
export default function Button({ children, onClick, type }) {
  return (
    <div>
      <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
