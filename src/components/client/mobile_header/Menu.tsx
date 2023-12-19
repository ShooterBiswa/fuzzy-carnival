"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import NavItems from "./nav";
import { AnimatePresence } from "framer-motion";

const Menu = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <button
        className={`md:hidden ${styles.button}`}
        onClick={() => setActive(!isActive)}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </button>

      <AnimatePresence mode="wait">{isActive && <NavItems />}</AnimatePresence>
    </>
  );
};

export default Menu;
