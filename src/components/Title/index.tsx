import classNames from "classnames/bind";
import styles from "./Title.module.scss";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const Title = () => {
  return (
    <>
      <div className={cx("wrapper")}>
        <p className={cx("focus")}>Front-end</p>
        <div className={cx("mask")}>
          <p className={cx("text")}>Front-end</p>
        </div>
      </div>
    </>
  );
};

export default Title;
