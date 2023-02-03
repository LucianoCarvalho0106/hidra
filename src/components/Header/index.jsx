import  "./header.css"
import {useState} from "react"
import logo from "../../images/Frame.png"
import menu from "../../images/menu.png"

function Header (){
    const [mobile,setMobile] = useState(false)
    const handleClick = ()=>{
        setMobile(!mobile)
        console.log(mobile)
    }
    return(
        <header className={`${mobile ? 'mobile' : ''}`}>
            <div className="logo">
                <img src={logo} alt="logo" />
                <div>HIDRA</div>
            </div>
            <ul>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
            </ul>
            <div className={`btns-header`}>
                <button className="contact">CONTACT US</button>
                <button className="join">JOIN HYDRA</button>
            </div>
            <button onClick={handleClick} className="btn-menu"><img src={menu} alt="menu" /></button>
        </header>
    )
}

export default Header