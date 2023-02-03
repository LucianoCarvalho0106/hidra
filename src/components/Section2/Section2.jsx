import "./section2.css"

import Component1  from "../../images/Component 1.png"
import vector7  from "../../images/Vector 7.png"
import vector8  from "../../images/Vector 8.png"


export default function Section2(){
    return(
        <section className="contents">
            <div className="flex-collum">
                <div className="introduction">
                    <h3 id="introduction-h3"><span>INTRODUCTION</span><br />TO HYDRA VR</h3>
                    <img className="seta-longa" src={Component1} alt="seta longa" />
                </div>
                <div className="pessoa-oculos"></div>
                
                <p className="eget" id="eget">
                    <br></br>
                    Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                    n tempor.
                </p>
                <button className="lets">LET’S GET IN TOUCH</button>
                <div className="title-oculos">
                    <h3 className="why-build"><span>WHY BUILD</span> <br />WITH HYDRA?</h3>
                    <img className="seta-longa" src={Component1} alt="seta longa" />
                    <img className="vector7" src={vector7} alt="vector7" />
                    <img className="vector8" src={vector8} alt="vector8" />
                    
                </div>
               
            </div>
            <div className="flex-collum">
                <p className="hiden">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae
                </p>
                <h3 className="about"><span>ABOUT</span> <br />HYDRA VR</h3>
                <p className="text2">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                    n tempor.
                </p>
                <button className="lets2">LET’S GET IN TOUCH</button>
                <div className="text-vitae">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </div>
            </div>
        </section>
    )
}
