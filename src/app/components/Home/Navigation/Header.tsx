"use client"
import React, { useState } from 'react'
import NavBar from './NavBar'
import MobileNavBar from './MobileNavBar';

const Header = () => {
    const [showNav,setShowNav] = useState(false);
    const openHandelNav = () => setShowNav(true);
    const closeHandelNav = () => setShowNav(false);
    return <div>
        <NavBar openNav={openHandelNav}/>
        <MobileNavBar showNav={showNav} closeNav={closeHandelNav}/>
    </div>
}

export default Header;