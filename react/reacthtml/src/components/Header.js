import React from "react";

import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="topMobile">
                        <img src="/bilder/Logga.png" alt="Logga Nordmalings Ridklubb" className="logo"/>
                        <iconify-icon 
                            className="btn" 
                            icon={this.props.isActive ? "ph:caret-double-left-light" : "ph:list-light"} 
                            onClick={this.props.toggleSidebar}
                        ></iconify-icon>

                    </div>
                    <ul className="nav">
                        <li><NavLink to="/">Hem</NavLink></li>
                        <li><NavLink to="/BorjaRida">Ridskola</NavLink></li>
                        <li><NavLink to="/Kalender">Kalender</NavLink></li>
                        <li><NavLink to="/Tavling">Tävling</NavLink></li>
                        <li><NavLink to="/OmOss">Om Oss</NavLink></li>
                        <li><NavLink to="/Kontakt">Kontakt</NavLink></li>
                    </ul>

                    <div className="socialIcons" >
                        <iconify-icon icon="ph:line-vertical-light"></iconify-icon>
                        <NavLink to="https://www.instagram.com/nordmalingsridklubb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <iconify-icon icon="ph:instagram-logo-light"></iconify-icon>
                        </NavLink>
                        <NavLink to="https://www.facebook.com/nordmalingsridklubb">
                            <iconify-icon icon="ph:facebook-logo-light"></iconify-icon>
                        </NavLink>
                        <iconify-icon icon="ph:line-vertical-light"></iconify-icon>
                        <iconify-icon icon="ph:magnifying-glass-light"></iconify-icon>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;