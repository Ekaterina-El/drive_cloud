import React from "react";
import s from "./ErrorBlock.module.css"

const ErrorBlock = ({error, clearError}) => {
  return (
    <div className={s.errorBlock}>
      <div className={s.error}>
        <div>Ошибка</div>
        <div>{error}</div>
        <button className={s.btn} onClick={clearError}>
          О`кей
        </button>
      </div>
    </div>
  );
};

export default ErrorBlock;
