import "./circulos.css"
import i01 from "../../images/01.png"
import i02 from "../../images/02.png"
import i03 from "../../images/03.png"
import i04 from "../../images/04.png"
import vector15 from "../../images/Vector 15.png"

export default function Circulos (){
    return(
        <div className="container-circulos">
            <div className="text-network">
                <button><img src={i01} alt="01" /></button>
                <button><img src={i02} alt="02" /></button>
                <button><img src={i03} alt="03" /></button>
                <button><img src={i04} alt="04" /></button>
            </div>
            <img className="vector15" src={vector15} alt="vector15" />
        </div>
    )
}