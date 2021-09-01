import React from 'react';
import './old-burger.css';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className='menu-wrap'>
      <input type='checkbox' className='toggler' />
      <div className='hamburger'>
        <div></div>
      </div>
      <div className='menu'>
        <div>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/bio'>Bio</Link>
              </li>
              <li>
                <Link to='/the-deep-roots'>The Deep Roots</Link>
              </li>
              <li>
                <Link to='/works'>Works</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
