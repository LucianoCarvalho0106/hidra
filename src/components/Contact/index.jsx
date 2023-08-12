import "./contact.css"
import phone from "../../images/phone-call.png"
import page1 from "../../images/Page-1.png"
import mail from "../../images/mail.png"

export default function Contact(){
    return(
        <div className="content">
                <div className="container-contact">
            <div className="left-container">
                <div><img src={page1} alt="page1" /></div>
                <div>
                    <h3>Pay Us a Visit</h3>
                    <p>Union St, Seattle, WA 98101, United States</p>
                </div>
            </div>

            <div className="center-container">
                <div><img src={phone} alt="phone" /></div>
                <div>
                    <h3>Give Us a Call</h3>
                    <p>(110) 1111-1010</p>
                </div>
            </div>

            <div className="right-container">
                <div><img src={mail} alt="mail" /></div>
                <div>
                    <h3>Send Us a Message</h3>
                    <p>Contact@HydraVTech.com</p>
                </div>
            </div>

            </div>
        </div>
        
    )
}