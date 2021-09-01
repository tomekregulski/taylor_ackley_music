import React from 'react';
import './menu-toggle.css';

const MenuToggle = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <div
      aria-label='Toggle menu'
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
      className={open ? 'toggle active' : 'toggle'}
    >
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
  );
};

export default MenuToggle;
