import React from 'react'

import uncorkedLogo from "../../assets/images/uncorkedLogo.png"
import bubbles from "../../assets/images/NavBarBackgrounds/NavBArBG2.png"
import "./index.css"

const NavBar = () => {

    // Kept in jsx instead of css because 
    // the backgroundColor is supposed to be dynamic based on page
    
    const navBarStyle = {
        backgroundColor:'#FFE696',
        backgroundImage: `url(${bubbles})`,
    }
    
    return (
        
        <nav className="navbar navbar-expand-lg"
        style={navBarStyle}>
            <div className="container-fluid">
                <a className="navbar-brand"  href="#">
                    <img src={uncorkedLogo} id="navBarLogo" alt="Uncorked Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nostyle" aria-current="page" href={process.env.PUBLIC_URL +'/about'}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nostyle" aria-current="page" href="/#/stories">Stories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nostyle" aria-current="page" href="/#/podcast">Podcast</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nostyle" aria-current="page" href="/#/blogs">Blogs</a>
                        </li>
                        <li className="nav-item" id="join-us-button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <a className="nav-link nostyle"  aria-current="page">Join Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
