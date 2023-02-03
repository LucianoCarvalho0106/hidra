import "./main.css"
import vector1 from "../../images/Vector 1.png"
import vector2 from "../../images/Vector 2.png"
import vector3 from "../../images/Vector 3.png"
import vector4 from "../../images/Vector 4.png"
import shape from "../../images/shape.png"

export default function Main(){
    return(
        <main>
            <div className="left">
                <div>
                    <h1><span className="color">Dive</span> Into The Depths <br />
                    Of <span className="color"> Virtual Reality</span></h1>
                </div>
                <img className="vector1" src={vector1} alt="vetor1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <div className="bottom">
                    <img className="vector2" src={vector2} alt="vector2" />
                    <button>BUILD YOUR WORLD</button>
                    <img className="vector3" src={vector3} alt="vector3" />
                    <img className="vector4" src={vector4} alt="vector4" />
                    <img className="seta"  src={shape} alt="seta" />
                </div>
            </div>
            
           
            <div className="right">
               
            </div>
        </main>
    )
}