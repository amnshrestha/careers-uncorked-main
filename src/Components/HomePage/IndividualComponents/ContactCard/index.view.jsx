import React from 'react'

import mailImage from "../../../../assets/images/MailImage.png"
import "./index.css"

const ContactCard= () => {
    const backgroundStyle={
        backgroundImage: `url(${mailImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <>
        <section id="contactCard">
            <div className="logoArea">
                <img src={mailImage} className="emailImage" alt="emailImage" />
            </div>
            <div className="allContent" >
                <div className="mainTitle">SIGN UP</div>
                <div className="subTitle">TO OUR MAILING LIST</div>
                <a href="#"><button type="button" class="btn btn-light signUp">Sign Up</button></a>
            </div>
        </section>

        <section id="contactCardMobile">
            <div className="logoArea">
                <img src={mailImage} className="emailImage" alt="emailImage" />
            </div>
            <div className="allContent" >
                <div className="mainTitle">SIGN UP</div>
                <div className="subTitle">TO OUR MAILING LIST</div>
                <a href="#"><button type="button" class="btn btn-light signUp">Sign Up</button></a>
            </div>
        </section>
        </>
    )
}

export default ContactCard

