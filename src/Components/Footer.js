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
                 
                  <h2 className='Title white'>BlockChain</h2>
              </div>
            </Link>
           <p className='rights white'>BlockChain © 2022 All rights reserved.</p>
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
