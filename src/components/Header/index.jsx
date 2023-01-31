import  "./header.css"
import {useState} from "react"

function Header (){
    const [mobile,setMobile] = useState(false)
    const handleClick = ()=>{
        setMobile(!mobile)
        console.log(mobile)
    }
    return(
        <header className={`${mobile ? 'mobile' : ''}`}>
            <div className="logo">
                <img src="../../public/Frame.png" alt="logo" />
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
            <button onClick={handleClick} className="btn-menu"><img src="../../public/menu.png" alt="menu" /></button>
        </header>
    )
}

export default Header