import React, { useState } from "react";

import style from "./Button.module.css";

const Button = ({ title, icon, link }) => {
  return (
    <React.Fragment>
      <a className={`${style.button}`} href={link} target="_blank">
        <div className="icon-type">
          <i className={icon}></i>
        </div>
        <div className="label">{title}</div>
      </a>
    </React.Fragment>
  );
};

export default Button;
