import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'

export const FrontSide = styled.div`
    position: fixed;
    left: 0;
    top: -100%;
    height: 100vh;
    background: black;
    width: 100vw;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const LinksSide = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
justify-content: center;
padding-top: 150px;
align-items: center;
color: white;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline:none;
`;