import React from 'react'
import { NavItems } from './NavItems'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className = "NavBar">
            <h1 className = "navbar-logo">LOGO</h1>
            <div className = 'triangle-center'></div>
            <div className = 'right-side-nav'>
                <ul className = 'nav-menu'>
                    {NavItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <a className = {item.cName} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar