import React, {useState} from 'react';
import logo from '../Images/logo-64.png'
import { AiFillHome, AiOutlineBulb, AiOutlineRobot, AiOutlineApartment } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Nav.css'



const NavBar = ({isOpen}) => {
  
  return (
    <div className='nav'>
        <nav>
          <div className="space">
            <Link  to={'/'}>
              <div className="logo">
                  <img src={logo} alt="logo" height={50} />
                  <h1 className='Title black'>Chain</h1>
              </div>
            </Link>
            <ul className='burger'>
                
                <li><Link className='border' to={'/Crypto'}>Crypto</Link></li>
                <li><Link className='border' to={'/Exchanges'}>Exchanges</Link></li>
                <li><Link className='border' to={'/News'}>News</Link></li>
            </ul>
            <div className="hamburger" onClick={isOpen}>
              <FaBars height={80}/>
            </div>
            
            </div>
        </nav>
    </div>
  )};

export default NavBar;
