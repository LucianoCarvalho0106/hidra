import "./cards.css"

export default function Cards(){
    return(
        <section className="cards-container">
            <div className="card">
                <img src="../../public/card4.png" alt="card4" />
                <h4>SIMULATION</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>

            <div className="card">
                <img src="../../public/card1.png" alt="card1" />
                <h4>EDUCATION</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>

            <div className="card">
                <img src="../../public/card2.png" alt="card2" />
                <h4>SELF-CARE</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>

            <div className="card">
                <img src="../../public/card3.png" alt="card3" />
                <h4>OUTDOOR</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>
        </section>
    )
}