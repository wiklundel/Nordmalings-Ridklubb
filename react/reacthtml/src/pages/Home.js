import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="bakgrund-startsida">
                <div className="App">
                    <div class="wrapper">
                        <div class="sidemenu">
                        <ul>
                            <li>
                                <a href="index.html">
                                    <iconify-icon icon="ph:house-light"></iconify-icon>
                                    <span class="nav-item">Hem</span>
                                </a>
                            </li>
                            <li>
                                <a href="Börja_Rida.html">
                                    <iconify-icon icon="ph:horse-light"></iconify-icon>
                                    <span class="nav-item">Ridskola</span>
                                </a>
                            </li>
                            <li>
                                <a href="Kalender.html">
                                    <iconify-icon icon="ph:calendar-blank-light"></iconify-icon>
                                    <span class="nav-item">Kalender</span>
                                </a>
                            </li>
                            <li>
                                <a href="Tävling.html">
                                    <iconify-icon icon="ion:ribbon-outline"></iconify-icon>
                                    <span class="nav-item">Tävling</span>
                                </a>
                            </li>
                            <li>
                                <a href="Om_Oss.html">
                                    <iconify-icon icon="system-uicons:info-circle"></iconify-icon>
                                    <span class="nav-item">Om Oss</span>
                                </a>
                            </li>
                            <li>
                                <a href="Kontakt.html">
                                    <iconify-icon icon="ph:chat-light"></iconify-icon>
                                    <span class="nav-item">Kontakt</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                        <section>
                            <div class="container">
                                <div class="block1-startsida">
                                    <p title="det här är en slogan"> den lilla klubben med det stora hjärtat</p>
                                    <h1>Nordmalings Ridklubb</h1>
                                
                                    <div class="button-startsida">
                                        <a href="Börja_Rida.html"> Börja Rida </a>
                                        <a href="Våra_Hästar.html"> Våra Hästar </a>
                                        <a href="Kontakt.html"> Välkommen Hit </a>
                                        <a href="Kalender.html"> Ridhusschema </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;