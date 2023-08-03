import React from "react";

import style from "./Badge.module.css";

const Badge = ({ title, theme }) => {
  const badgeClassName = `${style.badge} ${style[theme]}`;

  return <div className={badgeClassName}>{title}</div>;
};

export default Badge;
