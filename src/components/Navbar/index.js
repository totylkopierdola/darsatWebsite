import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logoBezNapisuu.png'; 
import {
    Nav, 
    NavbarContainer, 
    NavLeft,
    NavLogo,
    NavLogoText,
    MainText,
    VerticalText,
    MobileIcon,
    NavRight, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>            
                <NavbarContainer>
                    <NavLeft>
                        <NavLogo to="/" src={logo}></NavLogo>
                        <NavLogoText>
                            <MainText to="/" >DARSAT</MainText>
                            <VerticalText to="/" >PLUS</VerticalText>
                        </NavLogoText>
                    </NavLeft>
                   
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavRight>
                        <NavItem>
                            <NavLinks to="/naprawa">Naprawa</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/zakup">Zakup</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/onas">O nas</NavLinks>
                        </NavItem>
                    </NavRight>

                    <NavBtn>
                            <NavBtnLink to="kontakt">Kontakt</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
