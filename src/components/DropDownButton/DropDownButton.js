import React, { useState } from "react";

import style from "./DropDownButton.module.css";

const DropDownButton = ({ title, icon, links }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <React.Fragment>
      <button className={`${style.dropDownButton}`} onClick={handleButtonClick}>
        <div className="icon-type">
          <i className={icon}></i>
        </div>
        <div className="label">{title}</div>

        <div className="icon-ddl">
          <i className="fa-solid fa-angle-down"></i>
        </div>

        {showMenu && (
          <div className={`${style.dropDownContent}`}>
            {links?.map((link, index) => (
              <a
                href={link.external ? ` mailto: ${link.link}` : link.link}
                target="_blank"
                key={index}
                className={style.dropDownItem}
              >
                <i className={`${link.icon} ${style.icon}`}></i>
                <div>
                  <div className={style.title}>{link.title}</div>
                  <div className={style.description}>{link.description}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </button>
    </React.Fragment>
  );
};

export default DropDownButton;
