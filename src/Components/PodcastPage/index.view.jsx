import React from 'react'

import podcastBGPic from "../../assets/images/Backgrounds/podcastBG.png"
import podcastLogo from "../../assets/images/podcastLogo.jpg"

import ContactFooter from "../ContactFooter"

import "./index.css"
import $ from 'jquery';


const PodcastPage = () => {
    
    const changeNavColor = ()=>{
        $(".navbar").css("background-color","#808080")
    }

    const modalForPodcast = ()=>{
        return(
            <div class="modal fade" id="podcastModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <iframe className="podcastIframe" src="https://mailchi.mp/30ef282f4fc9/international-perspective" frameborder="0" title="SubsciptionLink"></iframe>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    changeNavColor();

    const podcastBG = {
        background: `url(${podcastBGPic}) no-repeat center center fixed`,
    }

    return (
        <section id="PodcastPage" style = {podcastBG}>

            {modalForPodcast()}
            
            <br/>
            <div className="pageTitle">International Perspective</div>
            <div className="podcastLogoContainer">
                <img src={podcastLogo} alt="podcastLogo" className="podcastLogo"/>
            </div>
            <div className="description">A podcast where we discuss the success stories, experiences, and challenges of international students. If you are an international student looking to know carve your own path or if you are someone interested in knowing what it is like to be an international student this is the podcast for you! An Uncorked production Hosted by Daniel Munoz.</div>
            <div className="tuneInDiv">
                <button type="button" class="btn btn-light tuneIn" data-bs-toggle="modal" data-bs-target="#podcastModal">Tune In</button>
            </div>
            <div className="podcastEpisodes">
                <iframe className="eachEpisode" src="https://open.spotify.com/embed/episode/4J1aBIRkFRCtaEvksgsKiN?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className="eachEpisode" src="https://open.spotify.com/embed/episode/0Ft600qNDtOjpSM7fp5qTD?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className="eachEpisode" src="https://open.spotify.com/embed/episode/47LbiVmeXp8srhER5ONqi5?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className="eachEpisode" src="https://open.spotify.com/embed/episode/5sic0qWao3iA3iE3pArf1k?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className="eachEpisode" src="https://open.spotify.com/embed/episode/2p5jSFjcUT1wbyMvLDjVVN?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe className="eachEpisode" src="https://open.spotify.com/embed/episode/0TNbS736454GEPeTYRzNpm?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <br/>
            <ContactFooter/>
        </section>
    )
}

export default PodcastPage
