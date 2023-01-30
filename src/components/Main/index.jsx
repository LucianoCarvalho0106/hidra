import "./main.css"

export default function Main(){
    return(
        <main>
            <div className="left">
                <div>
                    <h1><span className="color">Dive</span> Into The Depths <br />
                    Of <span className="color"> Virtual Reality</span></h1>
                </div>
                <img className="vector1" src="../../public/Vector 1.png" alt="vetor1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <div className="bottom">
                    <img className="vector2" src="../../public/Vector 2.png" alt="vector2" />
                    <button>BUILD YOUR WORLD</button>
                    <img className="vector3" src="../../public/Vector 3.png" alt="vector3" />
                    <img className="vector4" src="../../public/Vector 4.png" alt="vector4" />
                    <img  src="../../public/shape.png" alt="seta" />
                </div>
            </div>
            
           
            <div className="right">
               
            </div>
        </main>
    )
}