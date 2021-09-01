import React from 'react';
import { Link } from 'react-router-dom';
import './mobile-menu.css';

const MobileMenu = ({ open, setOpen }) => {
  console.log();
  return (
    <div className='menu-wrap' open={open} onClick={() => setOpen(!open)}>
      <ul className={open ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/bio'>
            Bio
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/the-deep-roots'>
            The Deep Roots
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/works'>
            Works
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MobileMenu;
