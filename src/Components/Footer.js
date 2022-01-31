import React from 'react';
import './footer.css'
import logo from './Images/logo-64.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       <div className="footer">
            <Link  to={'/'}>
              <div className="logo align">
                  <img src={logo} alt="logo" height={50} />
                  <h2 className='Title black'>Chain</h2>
              </div>
            </Link>
           <h3 className='rights black'>All Rights Reserved</h3>
           <ul>
               <li>
                    <Link className='border' to={'/Crypto'}>Crypto</Link>
               </li>
               <li>
                    <Link className='border' to={'/Exchanges'}>Exchanges</Link>
               </li>
               <li>
                    <Link className='border' to={'/News'}>News</Link>
               </li>
           </ul>
       </div>
    </div>
  )};

export default Footer;
