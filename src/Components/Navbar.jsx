import React,{useState,useEffect} from 'react';
import logo from '../images/Netflix-Logo.wine.svg';
import avatar from '../images/avatar.png';
import  '../css/Navbar.css'
function Navbar() {
    const[show,setShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 27) {
            setShow(true)
          } else setShow(false);
        });
        return () => {
          window.removeEventListener("scroll",null)
        }
      }, []);
  return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src={logo} alt='Netflix-logo'/>
            <img className='nav_avatar' src={avatar} alt='avatar'/>
        </div>
  )
}

export default Navbar