import "./tecnologies.css"

import tech1 from "../../images/tech1.png"
import tech2 from "../../images/tech2.png"
import tech3 from "../../images/tech3.png"
import tech4 from "../../images/tech4.png"
import setaBaixa from "../../images/setaBaixa.png"
import Component1 from "../../images/Component 1.png"


export default function (){
    return(
        <div className="container-tecnologies">
            <div className="tecnologies">
                <span><h2>TECHNOLOGIES & HARDWARE</h2></span>
                <h2>USED BY HYDRA VR.</h2>
                <button><img src={setaBaixa} alt="arrow bottom" /></button>
            </div>
            <div className="network">
                <img src={tech4} alt="tech4" />
                <img src={tech2} alt="tech2" />
                <img src={tech3} alt="tech3" />
                <img src={tech1} alt="tech1" />
            </div>
            <div className="text-tecnologies">
                <div>
                    <span><h2>HOW WE BUILD</h2></span>
                    <h2>WITH HYDRA VR?</h2>
                </div>
                
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
                <img className="setaLonga" src={Component1} alt="seta longa" />
            </div>
        </div>
    )
}