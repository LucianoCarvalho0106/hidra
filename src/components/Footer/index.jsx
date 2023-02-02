import "./footer.css"

export default function()
{
    return(
        <footer>
            <div className="container-divs">
                <div className="logo-footer"> <img src="../../public/Frame.png" alt="logo" /></div>
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
                        <button><img src="../../public/facebook.png" alt="" /></button>
                        <button><img src="../../public/twitter.png" alt="" /></button>
                        <button><img src="../../public/linkedin.png" alt="" /></button>
                        <button><img src="../../public/youtube.png" alt="" /></button>
                        <button><img src="../../public/instagram.png" alt="" /></button>
                        <button><img src="../../public/pinterest.png" alt="" /></button>
                    </div>
                    <button id="button-footer">BUILD YOUR WORLD</button>
                    <img className="vector19" src="../../public/Vector 19.png" alt="vector19" />
                    <img className="vector18" src="../../public/Vector 18.png" alt="vector19" />
                </div>
              
            </div>
                <hr />
            <div className="rodape">
                <h5>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h5>
            </div>
        </footer>
    )
}