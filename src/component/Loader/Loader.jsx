import React from "react";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.spinnerBlock}>
      <div className={s.spinner}>
        <div className={s.ldio}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
