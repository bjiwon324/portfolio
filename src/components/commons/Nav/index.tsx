import React, { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const navList = ["profile", "skills", "project", "feedback", "contact"];

const Nav = ({ isHome = true }) => {
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav__container")}>
        <Link href="https://github.com/bjiwon324" className={cx("nav__link")}>
          github
          <span className={cx("nav__arrow")}> &#10140;</span>
        </Link>
        <ul className={cx("nav__list")}>
          {isHome ? (
            navList.map((item, index) => (
              <li key={index} className={cx("nav__item")}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))
          ) : (
            <Link className={cx("nav__item")} href={"/"}>
              home
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
