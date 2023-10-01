import React from "react";
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css';
import PSAlogo from './psa-singapore-logo-copy.webp';

const Header = () => {
    return (
        <div className="topBar">
            <div className='leftSection'>
                <Link to="https://www.singaporepsa.com/" target="_blank">
                    <button className="homeButton">
                        <img src={PSAlogo} alt="PSA Logo Transparent" className='PSALogo' />
                    </button>
                </Link>
            </div>
            <div className="middleSection">
                <Link to="/">
                    <button className="middleButton">
                        Home
                    </button>
                </Link>
                <Link to="/about">
                    <button className="middleButton">
                        About
                    </button>
                </Link>
            </div>
            <div className="rightSection">
                <Link to="/faq">
                    <button className="middleButton">
                        FAQ
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="middleButton">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header;
