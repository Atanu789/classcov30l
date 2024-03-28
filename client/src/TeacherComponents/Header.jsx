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
    <header className="header flex justify-end">
      
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

     
       
        <div className="flex gap-5 justify-end">
          <BsSearch className="icon" />

          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <Example />
        </div>
   
     
    </header>
  );
}

export default Header;
