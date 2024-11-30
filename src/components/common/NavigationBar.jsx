import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 10) {
            setIsVisible(false); // Scrolling down and past a threshold
        } else if ( currentScrollY < lastScrollY) {
            setIsVisible(true); // Scrolling up
        }

        setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  return (
    <nav 
        className={`NavigationBar ${isVisible ? "visible" : "hidden"}`}
        id='NavigationBar'
    >
        <div className="nb-wrap">
            <div className="nbw-left">
                Logo
            </div>
            <div className="nbw-center">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about">About</NavLink>
                <NavLink exact to="/contact">Contact Us</NavLink>
            </div>
            <div className="nbw-right">
                Logo
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar