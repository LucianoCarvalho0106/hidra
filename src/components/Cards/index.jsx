import "./cards.css"

import card4 from "../../images/card4.png"
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card3 from "../../images/card3.png"


export default function Cards(){
    return(
        <section className="cards-container">
            <div className="card">
                <img src={card4} alt="card4" />
                <h4>SIMULATION</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>

            <div className="card">
                <img src={card1} alt="card1" />
                <h4>EDUCATION</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>

            <div className="card">
                <img src={card2} alt="card2" />
                <h4>SELF-CARE</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button>TRY IT NOW</button>
            </div>

            <div className="card">
                <img src={card3} alt="card3" />
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