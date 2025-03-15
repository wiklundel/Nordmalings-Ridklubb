import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div class="container">
                    <div class="top-mobile">
                        <img src="bilder/Logga.png" alt="Logga Nordmalings Ridklubb" class="logo"/>
                        <iconify-icon icon="ph:list-light" class="btn"></iconify-icon>
                    </div>
                    <ul class="nav">
                        <li><a href="index.html">Hem</a></li>
                        <li><a href="Börja_Rida.html">Ridskola</a></li>
                        <li><a href="Kalender.html">Kalender</a></li>
                        <li><a href="Tävling.html">Tävling</a></li>
                        <li><a href="Om_Oss.html">Om Oss</a></li>
                        <li><a href="Kontakt.html">Kontakt</a></li>
                    </ul>

                    <div class="social-icons" >
                        <iconify-icon icon="ph:line-vertical-light"></iconify-icon>
                        <a href="https://www.instagram.com/nordmalingsridklubb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <iconify-icon icon="ph:instagram-logo-light"></iconify-icon>
                        </a>
                        <a href="https://www.facebook.com/nordmalingsridklubb">
                            <iconify-icon icon="ph:facebook-logo-light"></iconify-icon>
                        </a>
                        <iconify-icon icon="ph:line-vertical-light"></iconify-icon>
                        <iconify-icon icon="ph:magnifying-glass-light"></iconify-icon>
                    </div>
                </div>      
            </header>
        );
    }
}
export default Header;