import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import { FrontSide, LinksSide, Icon, CloseIcon } from './styled';
const SideBar = ({isOpen, toggle}) => {
  return (
        <div>
            <FrontSide isOpen = {toggle}>
                <Icon onClick={isOpen}>
                    <CloseIcon />
                </Icon>
               <LinksSide>
                    <Link onClick={isOpen} className='font-large' to={'/Crypto'}>Crypto</Link>
                    <Link onClick={isOpen}  className='font-large' to={'/Exchanges'}>Exchanges</Link>
                    <Link onClick={isOpen}  className='font-large' to={'/News'}>News</Link>
               </LinksSide>
            </FrontSide>
        </div>
  );
};

export default SideBar;
