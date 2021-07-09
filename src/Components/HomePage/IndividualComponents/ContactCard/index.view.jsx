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
                <button type="button" className="btn btn-light signUp" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sign Up
                </button>
            </div>
        </section>

        <section id="contactCardMobile">
            <div className="logoArea">
                <img src={mailImage} className="emailImage" alt="emailImage" />
            </div>
            <div className="allContent" >
                <div className="mainTitle">SIGN UP</div>
                <div className="subTitle">TO OUR MAILING LIST</div>
                <button type="button" className="btn btn-light signUp" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sign Up
                </button>            
            </div>
        </section>
        </>
    )
}

export default ContactCard

