import "./contact.css"

export default function Contact(){
    return(
        <div className="container-contact">
            <div className="left-container">
                <div><img src="../../public/Page-1.png" alt="page1" /></div>
                <div>
                    <h3>Pay Us a Visit</h3>
                    <p>Union St, Seattle, WA 98101, United States</p>
                </div>
            </div>

            <div className="center-container">
                <div><img src="../../public/phone-call.png" alt="phone" /></div>
                <div>
                    <h3>Give Us a Call</h3>
                    <p>(110) 1111-1010</p>
                </div>
            </div>

            <div className="right-container">
                <div><img src="../../public/mail.png" alt="mail" /></div>
                <div>
                    <h3>Send Us a Message</h3>
                    <p>Contact@HydraVTech.com</p>
                </div>
            </div>

        </div>
    )
}