import React, {useState, useEffect} from 'react';
import "./header.css";
import logo from '../../images/CVT_logo.png';
import Menu from './menu.jsx';
import { Link } from "react-router-dom";


const header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to only run the effect once

  return (
    <>
      <div className='header-container'>
        {isMobile ? <div className='header-mobile'>
          <div className='mobile-header-logo'>
            <img className='mobile-logo' src={ logo } alt='logo' />
          </div>
            <i className='material-icons' onClick={() => setSidebar(!sidebar)}>menu</i>
            {sidebar ? 
            <>
            <Menu 
              sidebar={sidebar}
              setSidebar={setSidebar}
            /> 
            <div className='overlay'/>
            </>
            : null}
        </div> 
        : <div className='header-desktop'>
          <div className='menu-list-item'><Link to="/" className="menu-link">Home</Link></div>
          <div className='menu-list-item'><Link to="/agent" className="menu-link">More about us</Link></div>
          <img className='mobile-logo' src={ logo } alt='logo' />
          <div className='menu-list-item'><Link to="/quote" className="menu-link">Get a quote</Link></div>
          <div className='menu-list-item'><Link to="/contact" className="menu-link">Contact us</Link></div>
          <div className='desktop-header-logo'>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default header
