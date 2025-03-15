import React from "react";

class Sidemenu extends React.Component {
    render () {
        return (
            <div className="sidemenu">
                <ul>
                    <li>
                        <a href="index.html">
                            <iconify-icon icon="ph:house-light"></iconify-icon>
                            <span className="navItem">Hem</span>
                        </a>
                    </li>
                    <li>
                        <a href="BorjaRida.html">
                            <iconify-icon icon="ph:horse-light"></iconify-icon>
                            <span className="navItem">Ridskola</span>
                        </a>
                    </li>
                    <li>
                        <a href="Kalender.html">
                            <iconify-icon icon="ph:calendar-blank-light"></iconify-icon>
                            <span className="navItem">Kalender</span>
                        </a>
                    </li>
                    <li>
                        <a href="Tavling.html">
                            <iconify-icon icon="ion:ribbon-outline"></iconify-icon>
                            <span className="navItem">Tävling</span>
                        </a>
                    </li>
                    <li>
                        <a href="OmOss.html">
                            <iconify-icon icon="system-uicons:info-circle"></iconify-icon>
                            <span className="navItem">Om Oss</span>
                        </a>
                    </li>
                    <li>
                        <a href="Kontakt.html">
                            <iconify-icon icon="ph:chat-light"></iconify-icon>
                            <span className="navItem">Kontakt</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Sidemenu;