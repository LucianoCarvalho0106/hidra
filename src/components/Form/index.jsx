import "./form.css"

export default function Form(){
    return(
        <div className="container-form">
            <div>
                <span><h2>JOIN HYDRA</h2></span>
                <h2>Let’s Build Your VR Experience</h2>
            </div>
            <form >
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <input className="subject" type="text" placeholder="Subject" />
                <textarea rows={6} placeholder="Tell Us Something..."></textarea>
                <button>SEND TO HYDRA</button>
            </form>
        </div>
    )
}