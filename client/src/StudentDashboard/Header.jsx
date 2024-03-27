import React,{useState} from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import './Side.css';
import Calendar from '../components/Calender';

function Header({ OpenSidebar }) {

  const [isScheduleVisible, setIsScheduleVisible] = useState(false);

  const toggleScheduleVisibility = () => {
    setIsScheduleVisible(prevState => !prevState);
  };
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      

      <div className='dropdown header-right flex flex-row gap-7'>
    <button className="dropbtn" onClick={toggleScheduleVisibility}>Weekly Schedule &#9660;</button>
    <div className={`dropdown-content ${isScheduleVisible ? 'show' : ''}`}>
      <Calendar />
    </div>
  </div>
            <div className='flex'>
      <BsSearch className='icon' />
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
        </div>
      
    </header>
  );
}

export default Header;