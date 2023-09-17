import React, {useEffect, useState, useRef} from 'react'
import './menu.css'


const menu = (
 { sidebar,
  setSidebar
 }
) => {
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSidebar(!sidebar);
    }
  };


  return (
    <>
      <div className='menu-container' ref={menuRef}>
            <div className='menu-list-container'>
                <h4 className='menu-list-title'>Custom Vacation and Travel</h4>
                <ul className='menu-list'>
                    <li className='menu-list-item'>Home</li>
                    <li className='menu-list-item'>About us</li>
                    <li className='menu-list-item'>Meet Your Agent</li>
                    <li className='menu-list-item'>Get a quote</li>
                    <li className='menu-list-item'>Contact us</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default menu
