import React from "react";

class VaraHastar extends React.Component {
    render () {
        return (
            <section>
                <div className="container">
                    <h2>Våra Hästar</h2>
                    <div className="hastar">
                        <div>
                            <h3>Ponnys</h3>
                            <div className="imgHastarVaraHastar hastbilder">
                                <div><img src="bilder/Tiffaney.png" alt="Ponnyn Tiffaney"/><p>Tiffaney</p></div>
                                <div><img src="bilder/Columbia.png" alt="Ponnyn Columbia"/><p>Columbia</p></div>
                                <div><img src="bilder/Charlie.png" alt="Ponnyn Charlie"/><p>Charlie</p></div>                            
                                <div><img src="bilder/Blackie.png" alt="Ponnyn Blackie"/><p>Blackie</p></div>
                                <div><img src="bilder/Emiley.png" alt="Ponnyn Emiley"/><p>Emiley</p></div>                       
                                <div><img src="bilder/Sarah(Zally).png" alt="Ponnyn Sarah(Zally)"/><p>Sarah(Zally)</p></div>
                            </div>
                        </div>

                        <div>
                            <h3>Storhästar</h3>
                            <div className="imgHastarVaraHastar hastbilder">
                                <div><img src="bilder/Enzo.png" alt="Hästen Enzo"/><p>Enzo</p></div>
                                <div><img src="bilder/Ebbe.png" alt="Hästen Ebbe"/><p>Ebbe</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default VaraHastar;