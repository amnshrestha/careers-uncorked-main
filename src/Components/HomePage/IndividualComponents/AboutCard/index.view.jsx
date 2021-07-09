import React from 'react'

import "./index.css"

import uncorkedLogo from "../../../../assets/images/uncorkedLogoLarge.png"
import aboutRightBG from "../../../../assets/images/Backgrounds/AboutRightBG.png"

import $ from 'jquery';

const AboutCard = () => {

    const backgroundStyle={
        backgroundImage: `url(${aboutRightBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <>
        <section id="aboutCard">
            <div className="logoArea">
                <img src={uncorkedLogo} alt="MainLogo" className="mainLogo" />
            </div>
            <div className="allContent" style ={backgroundStyle}>
                <div className="mainTitle">About</div>
                <div className="subTitle">CAREERS UNCORKED</div>
                <div className="description">
                    <p>
                        Uncorked is new and it brings a refreshing approach. 
                        It’s a community and a network built on the foundation of 
                        open stories and fostering relationships.
                    </p>
                    <p>
                        Everyone has a great story and we can learn from these shared 
                        experiences. Because chances are you are going through the 
                        same struggles and we are here for you. To learn, grow and 
                        network! Build relationships, uncork your potential and share 
                        your stories to helps others.
                    </p>
                </div>
                <a href={process.env.PUBLIC_URL +'/about'}>
                    <button className="btn btn-light learnMore">Learn More</button>
                </a>
                
            </div>
        </section>

        <section id="aboutCardMobile">
            <div className="allContent" style ={backgroundStyle}>
                <div className="mainTitle">About</div>
                <div className="subTitle">CAREERS UNCORKED</div>
                <div className="description">
                    <p>
                        Uncorked is new and it brings a refreshing approach. 
                        It’s a community and a network built on the foundation of 
                        open stories and fostering relationships.
                    </p>
                    <p>
                        Everyone has a great story and we can learn from these shared 
                        experiences. Because chances are you are going through the 
                        same struggles and we are here for you. To learn, grow and 
                        network! Build relationships, uncork your potential and share 
                        your stories to helps others.
                    </p>
                </div>
                <a href={process.env.PUBLIC_URL +'/about'}>
                    <button className="btn btn-light learnMore">Learn More</button>
                </a>
            </div>
        </section>
        </>
    )
}

export default AboutCard
