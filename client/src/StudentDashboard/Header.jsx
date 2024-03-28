import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

import Calendar from "../components/Calender";
import Example from "./Dropdown";

function Header({ OpenSidebar }) {
  return (
    <header className="header flex justify-between">
       <Example />
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <div className="flex gap-4 p-3">
       
        <div className="flex gap-5">
          <BsSearch className="icon" />

          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <BsPersonCircle className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
