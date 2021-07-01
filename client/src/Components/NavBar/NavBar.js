import React, {useState} from 'react'
import { NavItems } from './NavItems'
import './NavBar.css'
// Hamburger
import Hamburger from 'hamburger-react'


const NavBar = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <nav className = "NavBar">
            <h1 className = "navbar-logo">LOGO</h1>
            <div className = 'triangle-center'></div>
            <div className = 'right-side-nav'>
                {/* Web */}
                <div>
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
                {/* Responsive  */}
                <div className = "hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <div className = {isOpen ? 'slide-out': 'slide-back-in'}>
                    <ul className = {isOpen? 'show-list' : 'do-not-show' }>
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
            </div>
        </nav>
    )
}

export default NavBar
