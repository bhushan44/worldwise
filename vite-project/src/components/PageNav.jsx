import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo></Logo>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            {" "}
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
