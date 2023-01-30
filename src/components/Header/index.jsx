import  "./header.css"


function Header (){
    return(
        <header>
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
            <div>
                <button className="contact">CONTACT US</button>
                <button className="join">JOIN HYDRA</button>
            </div>
        </header>
    )
}

export default Header