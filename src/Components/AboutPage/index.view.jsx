import React from 'react'

import members from "./index.data"
import AboutUsBG from "../../assets/images/Backgrounds/StoriesBG.png"

import ContactFooter from "../ContactFooter"
import $ from 'jquery';


import "./index.css"

const AboutPage = () => {
    const changeNavColor = ()=>{
        $(".navbar").css("background-color","rgb(255, 230,150)")
    }
    changeNavColor();
    const memberDesign = (memberList) => {
        return memberList.map(eachMember => {
            return (
                <div className="memberPresented">
                    <img src={eachMember.image} alt="memberImage" className="memberImage"/>
                    <div className="memberInfo">
                        {eachMember.name}<br/>
                        {eachMember.position}
                    </div>
                </div>
            )
        })
    }
    const aboutUSBG = {
        background: `url(${AboutUsBG}) no-repeat center center fixed`,
    }
    return (
        <section id = "aboutPage" style = {aboutUSBG}>
            <br/>
            <div className="pageTitle">About Us</div>
            <div className="aboutParagraph">
                <div className="mainTitle">CAREERS UNCORKED</div>
                <div className="description">
                    <p>Uncorked is new and it brings a refreshing approach. 
                    It’s a community and a network built on the foundation of 
                    open stories and fostering relationships.</p>
                    <p>Everyone has a great story and we can learn from these shared 
                    experiences. Because chances are you are going through the 
                    same struggles and we are here for you. To learn, grow and 
                    network! Build relationships, uncork your potential and share 
                    your stories to helps others.</p>
                </div>
            </div>
            <div className="secondTitle">Meet The Team</div>
            <div className="listOfMembers">
                {memberDesign(members)}
            </div>
            <ContactFooter/>
            
        </section>
    )
}

export default AboutPage
