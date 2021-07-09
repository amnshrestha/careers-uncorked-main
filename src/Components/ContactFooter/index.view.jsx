import React from 'react'
import facebookOrangeIcon from "../../assets/images/facebookOrangeIcon.png"
import linkedinOrangeIcon from "../../assets/images/linkedInOrangeIcon.png"
import "./index.css"

const ContactFooter = () => {
    return (
        <div id="ContactFooter">
            <div className="leftSide">
                <div className="uncorkedTitle">Uncorked</div>
                <div className="uncorkedEmail">Email: careersuncorked@gmail.com</div>
            </div>
            <div className="rightSide">
                <a href="https://www.facebook.com/careersuncorked/" target="_blank"><img src={facebookOrangeIcon} alt="facebookIcon" className="facebookIcon" /></a>
                <a href="https://www.linkedin.com/company/careers-uncorked" target="_blank"><img src={linkedinOrangeIcon} alt="linkedinIcon" className="linkedinIcon" /></a>
            </div>
        </div>
    )
}

export default ContactFooter
