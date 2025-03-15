import React from "react";

class Home extends React.Component {
    render() {
        return (
            <main>
                <div className="bakgrundStartsida">
                    <div className="App">
                        <div className="wrapper">
                            <div className="container">
                                <div className="block1Startsida">
                                    <p title="det här är en slogan"> den lilla klubben med det stora hjärtat</p>
                                    <h1>Nordmalings Ridklubb</h1>
                                    <div className="buttonStartsida">
                                        <a href="BorjaRida.html"> Börja Rida </a>
                                        <a href="VaraHastar.html"> Våra Hästar </a>
                                        <a href="Kontakt.html"> Välkommen Hit </a>
                                        <a href="Kalender.html"> Ridhusschema </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;