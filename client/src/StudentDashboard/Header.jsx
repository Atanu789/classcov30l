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
import Example1 from "./ProfileDropdown";

function Header({ OpenSidebar }) {
  return (
    <header className="header flex justify-between">
       
      <div className="menu-icon">

        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <Example />

      <div className="flex gap-4 p-3">
       
        <div className="flex gap-5">
          <BsSearch className="icon" />

          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <Example1 />
        </div>
      </div>
    </header>
  );
}

export default Header;
