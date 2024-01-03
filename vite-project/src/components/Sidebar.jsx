import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <Outlet></Outlet>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;copyright{new Date().getFullYear} by worldwise Inc
        </p>
      </footer>
    </div>
  );
}
