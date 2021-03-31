import styled from 'styled-components'; 
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll' ;


export const Nav = styled.nav`
    background: whitesmoke;
    height: 10rem;
    margin-top: -10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:sticky; 
    top: 0;
    z-index: 10;
    border-bottom: 4px solid rgba(194, 165, 121, 0.5);

    &:hover{
        transition: 0.6s ease-in-out;
        border-bottom: 4px solid rgba(179, 141, 86, 1);
    }
`;

export const NavbarContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    height: 9.375rem;
    z-index: 1;
    width: 100%;
    max-width: 100%;
`;

export const NavLeft = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    
    @media screen and (max-width:1920px) and (min-width:900px) {
        padding-left: 5rem;
    }

    @media screen and (max-width: 480) {
        display: none;
    }
`

export const NavLogo = styled.img`
    display: flex;
    align-items: center;
    list-style: none;
    height: 7.5rem;
    padding-right: 2rem;
    padding-left: 1rem;

    &:hover{
        transition: 0.4s ease-in-out;
        opacity: 80%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480) {
        display: none;
    }
`

export const NavLogoText = styled.div`
    height: 8.5rem;
    color: var(--darkblue);;
    justify-content: center;
    cursor: pointer;
    display: flexbox;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
    flex-basis: 70%;
    width: 21rem;
    
`;


export const MainText = styled.h1`
    font-family: "Bebas Neue";
    font-weight: 400;
    font-size: 7rem;

    &:hover{
        transition: 0.4s ease-in-out;
        opacity: 80%;
    }

    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }

        @media screen and (max-width: 350px) {
        display: none;
    }

`;

export const VerticalText = styled.h1`
    font-family: "Bebas Neue";
    color: var(--orange);
    font-weight: 400;
    font-size: 3.2rem;
    margin: 0;
    height: 5.625rem;
    writing-mode: vertical-rl;

    &:hover{
        transition: 0.4s ease-in-out;
        opacity: 80%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        /* display: none; */
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1170px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0; 
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer; 
        color: #000;
    }

    /* @media screen and (max-width: 1170px)  {
        display: none;
    } */
`;

export const NavRight = styled.ul`
    height: 9.4rem;
    width: 50rem;
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 1170px)  {
        display: none;
    }

    @media screen and (max-width: 768px)  {
        display: none;
    }

    @media screen and (max-width: 480) {
        display: none;
    }
`;
export const NavItem = styled.li`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 9.75rem;
    width: 200px;
    padding: 10px;
    font-size: 1.2rem;

    &:hover {
        transition: all 0.6s ease-in-out;
        background-color: #dcdcdc;
    }
`;

export const NavLinks = styled(LinkR)`
    text-align: center;
    vertical-align: middle;
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%; 
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;


export const NavBtn = styled.nav`
    display: flexbox;
    height: 3rem;
    text-align: center;
    
    padding-top: 4rem;
    padding-right: 2rem;

    @media screen and (max-width: 1170px)  {
        display: none;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 0.25rem;
    background: var(--darkblue);
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.6s ease-in-out;
        background: var(--orange);
    }
`