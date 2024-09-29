import React, { useState } from 'react';
import logo from '../assests/Logo.png'; // Corrected the spelling of 'assets'
import profile from '../assests/profile.jpg'; // Corrected the spelling of 'assets'
import { Link } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (

        <div className="Header">
            <div className="Logo">
                <img src={logo} />
            </div>
            <div className="Navigation">
                <div className="Avater">
                    <Link href="#">
                        <figure><img src={profile} /></figure> Bob Hyden </Link>
                    <ul>
                        <li>
                            <figure><img src={profile} /></figure>
                            <h4> Bob Hyden <span>Administrator</span></h4>
                        </li>
                        {/* <li><a href="change-password.html"><span><i className="fa fa-cog"></i></span> Change Settings </a></li> */}
                        <li><Link to='/'><span><i className="fa fa-sign-out"></i></span> Logout</Link></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
}

export default Header;
