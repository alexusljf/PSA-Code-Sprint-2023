import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import PSAlogo from './psa-singapore-logo-copy.webp';

const Header = () => {

    return(
        <>
        <div className = "topBar">
            <div className='leftSection'>
            <a href = "https://www.singaporepsa.com/" target="_blank">
                    <button className = "homeButton">
                    <img src = {PSAlogo} alt = "PSA Logo Transparent" className='PSALogo'/>
                    </button>
            </a>
            </div>
        <div className="middleSection">
            <a href = "/">
                    <button className = "middleButton">
                        Home
                    </button>
            </a>
            <a href = "/about">
                    <button className = "middleButton">
                        About
                    </button>
            </a>
        </div>
            <div className="rightSection">
                <a href = "/faq">
                        <button className = "middleButton">
                            FAQ
                        </button>
                </a>
                <a href = "/contact">
                        <button className = "middleButton">
                            Contact Us
                        </button>
                </a>
            </div>
        </div>
        </>
    )
}
export default Header;