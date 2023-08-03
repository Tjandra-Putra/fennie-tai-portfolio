import React from "react";

import style from "./Navbar.module.css";
import Badge from "../../Badge/Badge";
import DropDownButton from "../../DropDownButton/DropDownButton";
import { menuLinks } from "../../../constants/contact";
import Button from "../../Button/Button";
import resume from "../../../assets/files/Tjandra_Putra_Resume.pdf";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Badge title="portfolio" theme="strawberry" />
      <DropDownButton title="Menu" icon="fa-solid fa-layer-group" links={menuLinks} />
      <Button title="Resume" icon="fa-solid fa-cloud-arrow-down" link={resume} />
    </div>
  );
};

export default Navbar;
