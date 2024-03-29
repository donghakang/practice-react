import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav `
    height: 60px;
    background: #000;
    padding: 0rem calc((100vw-1300px) / 2);
    display: flex;
    justify-contents: space-between;
    align-items: center;
`
const Logo = styled(Link)``

const NavItems = styled.div``

const NavbarLink = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
`

const Header = () => {
    return (
        <Navbar>
            <Logo to="/">Animal</Logo>
            <NavItems>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/services">Styles</NavbarLink>
            </NavItems>
            </Navbar>
    )
}

export default Header
