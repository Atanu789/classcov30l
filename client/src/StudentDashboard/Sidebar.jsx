import React, { useState } from 'react';
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsX,
} from 'react-icons/bs';
import '../StudentApp.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const sidebarStyle = {
    backgroundColor: isHovered ? '#0605333e' : '#0605333e',
    transform: sidebarHidden ? 'translateX(-100%)' : 'none',
    width: sidebarHidden ? '0' : '250px', // Adjust width based on sidebar state
  };

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const toggleSidebarVisibility = () => {
    setSidebarHidden(!sidebarHidden);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''} style={sidebarStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className='sidebar-title flex bg-[#2826713e] '>
        <div className='sidebar-brand bg-[#06053300] rounded-full h-[70px] w-[70px] '>
          PROFILE
        </div>

        <div
          className="toggle-sidebar-btn"
          onClick={toggleSidebarVisibility}
          style={{ fontSize: '35px', cursor: 'pointer' }}
        >
          <BsX />
        </div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/Stud" className='flex'>
            <BsGrid1X2Fill className='icon' />
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/notes" className='flex'>
            <BsFillGrid3X3GapFill className='icon' />
            Take Notes
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/quiz " className='flex'>
            <BsPeopleFill className='icon' />
            Attempt Quiz
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/assignment" className='flex'>
            <BsListCheck className='icon' />
            Assignment
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/Voca" className='flex'>
            <BsGrid1X2Fill className='icon' />
            Word Challenge
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/Stud" className='flex'>
            <BsMenuButtonWideFill className='icon' />
            Update Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings" className='flex'>
            <BsFillGearFill className='icon' />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
