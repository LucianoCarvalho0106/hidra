import "./tecnologies.css"

export default function (){
    return(
        <div className="container-tecnologies">
            <div className="tecnologies">
                <span><h2>TECHNOLOGIES & HARDWARE</h2></span>
                <h2>USED BY HYDRA VR.</h2>
                <button><img src="../../public/setaBaixa.png" alt="arrow bottom" /></button>
            </div>
            <div className="network">
                <img src="../../public/tech4.png" alt="tech4" />
                <img src="../../public/tech2.png" alt="tech2" />
                <img src="../../public/tech3.png" alt="tech3" />
                <img src="../../public/tech1.png" alt="tech1" />
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
                <img className="setaLonga" src="../../public/Component 1.png" alt="seta longa" />
            </div>
        </div>
    )
}