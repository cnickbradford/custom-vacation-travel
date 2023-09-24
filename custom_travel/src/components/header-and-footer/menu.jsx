import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom";
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
                    <li className='menu-list-item'><Link to="/" className="menu-link">Home</Link></li>
                    <li className='menu-list-item'><Link to="/about" className='menu-link'>About us</Link> </li>
                    <li className='menu-list-item'><Link to="/agent" className='menu-link'>Meet Your Agent</Link></li>
                    <li className='menu-list-item'><Link to="/quote" className='menu-link'>Get a quote</Link></li>
                    <li className='menu-list-item'><Link to="/contact" className='menu-link'>Contact us</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default menu
