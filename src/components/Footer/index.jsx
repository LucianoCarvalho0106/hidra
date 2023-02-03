import "./footer.css"

import logoFooter from "../../images/Frame.png"
import vector19 from "../../images/Vector 19.png"
import vector18 from "../../images/Vector 18.png"

import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import instagram from "../../images/instagram.png"
import pinterest from "../../images/pinterest.png"


export default function()
{
    return(
        <footer>
            <div className="container-divs">
                <div className="logo-footer"> <img src={logoFooter} alt="logo" /></div>
                <div>
                    <ul>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>TECHNOLOGIES</li>
                        <li>HOW TO</li>
                        <li>JOIN HYDRA</li>
                    </ul>
                </div>

                <div >
                <ul>
                        <li>F.A.Q</li>
                        <li>SITEMAP</li>
                        <li>CONDITIONS</li>
                        <li>LICENSES</li>
                        
                    </ul>
                </div>

                <div className="content" >
                    <h4>SOCIALIZE WITH HYDRA</h4>
                    <div className="social-icons">
                        <button><img src={facebook} alt="" /></button>
                        <button><img src={twitter} alt="" /></button>
                        <button><img src={linkedin} alt="" /></button>
                        <button><img src={youtube} alt="" /></button>
                        <button><img src={instagram} alt="" /></button>
                        <button><img src={pinterest} alt="" /></button>
                    </div>
                    <button id="button-footer">BUILD YOUR WORLD</button>
                    <img className="vector19" src={vector19} alt="vector19" />
                    <img className="vector18" src={vector18} alt="vector18" />
                </div>
              
            </div>
                <hr />
            <div className="rodape">
                <h5>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h5>
            </div>
        </footer>
    )
}