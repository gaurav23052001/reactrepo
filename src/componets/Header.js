import React, { useState } from 'react';
import logo from '../assests/Logo.png'; // Corrected the spelling of 'assets'
import profile from '../assests/profile.jpg'; // Corrected the spelling of 'assets'

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (

        <div class="Header">
            <div class="Logo">
                <img src={logo} />
            </div>
            <div class="Navigation">
                <div class="Avater">
                    <a href="javascript:void(0);">
                        <figure><img src={profile} /></figure> Bob Hyden </a>
                    <ul>
                        <li>
                            <figure><img src={profile} /></figure>
                            <h4> Bob Hyden <span>Administrator</span></h4>
                        </li>
                        {/* <li><a href="change-password.html"><span><i class="fa fa-cog"></i></span> Change Settings </a></li> */}
                        <li><a href="login.html"><span><i class="fa fa-sign-out"></i></span> Logout</a></li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    );
}

export default Header;
