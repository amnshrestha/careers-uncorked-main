import React from 'react'

import "./index.css"

import introCardBG from "../../../../assets/images/Backgrounds/homePageFirstCardBG.png"
import introCardMobileBG from "../../../../assets/images/Backgrounds/homepageFirstCardMobileBG.png"

const IntroCard = () => {

    const backgroundStyle={
        backgroundImage: `url(${introCardBG})`,
        backgroundColor:'#7FC9D4',
        backgroundPosition: '-5px -5px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const backgroundStyleMobile={
        backgroundImage: `url(${introCardMobileBG})`,
        backgroundColor:'#7FC9D4',
        backgroundPosition: '0 0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <>
            <section id="introCard" style ={backgroundStyle}>
                <div className="allContent">
                    <div className="mainTitle">CAREERS UNCORKED</div>
                    <div className="subTitle">ONE COMMUNITY, WHERE JOURNEYS CONVERGE</div>
                    <p className="description">Sign up to our mailing list to receive reminder for our upcoming events</p>
                    <a href="#">
                        <button type="button" class="btn btn-light signUp">Sign Up</button>
                    </a>
                </div>
            </section>

            <section id="introCardMobile" style = {backgroundStyleMobile}>
                <div className="allContent">
                    <div className="mainTitle">CAREERS UNCORKED</div>
                    <div className="subTitle">ONE COMMUNITY, WHERE JOURNEYS CONVERGE</div>
                    <p className="description">Sign up to our mailing list to receive reminder for our upcoming events</p>
                    <a href="#">
                        <button type="button" className="btn btn-light signUp">Sign Up</button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default IntroCard
