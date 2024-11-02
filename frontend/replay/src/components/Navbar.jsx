import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLinkClick = () => {
        setMenuOpen(false);
    }

    return <nav>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/ideas" onClick={handleLinkClick}>Ideas</NavLink>
            </li>
            <li>
                <NavLink to="/submit" onClick={handleLinkClick}>Upload Idea</NavLink>
            </li>
        </ul>
    </nav>
}
