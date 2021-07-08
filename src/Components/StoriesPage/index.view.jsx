import React, {useState,useEffect} from 'react'

import FetchStoriesFromYoutube from "./index.data"

import StoriesBG from "../../assets/images/Backgrounds/StoriesBG.png"
import YoutubeButton from "../../assets/images/youtubeButton.png"

import "./index.css"
import ContactFooter from '../ContactFooter'
import $ from 'jquery';


const StoriesPage = () => {

    const changeNavColor = ()=>{
        $(".navbar").css("background-color","#FFE696")
    }
    changeNavColor();

    const [currentVideo, setcurrentVideo] = useState("");

    var listOfStories = FetchStoriesFromYoutube()
    
    // Updating video URL for the modal 
    const videoButtonClicked=(url)=>{
        setcurrentVideo(url);
    }

    // Pause the video when crossed is clicked on
    const closeVideo= ()=>{
        $('iframe').attr('src', $('iframe').attr('src'));
    }

    const forEachStory = (listOfStories) => {
        return listOfStories.map(eachStory =>{
            return (
                <div className="eachStoryItem">
                    <div className="videoImageContainer">
                        <img src={eachStory.thumbnailURL} alt="test" className="videoImage"/>
                    </div>
                    <div className="textAndButton">
                        <div className="videoTitle">
                            {eachStory.title}
                        </div>
                        <div className="videoDescription">
                            {eachStory.description}
                        </div>
                        <div  className="watchingOptions">
                            <button 
                            type="button" 
                            className="btn btn-light watchButton normalButton" 
                            data-bs-toggle="modal" data-bs-target="#abc" 
                            onClick={() => videoButtonClicked(eachStory.videoURL)}>
                                <img src={YoutubeButton} alt="YoutubeIcon" className="youtubeButton"/>
                                <span className="watchVideoText">Watch Video</span> 
                            </button>

                            <button type="button" className="btn btn-light watchButton mobileButton" data-bs-toggle="modal" data-bs-target="#abc">
                                <a href={eachStory.videoURL} >
                                    <img src={YoutubeButton} alt="YoutubeIcon" className="youtubeButton"/>
                                    <span className="watchVideoText">Watch Video</span>
                                </a>
                                 
                            </button>
                        </div>
                    </div>
                </div> 
            )
        })
    }
    const modal = ()=>{
        return (
            <div className="modal fade" id="abc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Test</h5>
                            <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            onClick = {closeVideo}></button>
                        </div>
                        <div className="modal-body">
                            <iframe 
                            width="560" 
                            height="315" 
                            src={currentVideo}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>

                            </iframe>
                        </div>
                        <div className="modal-footer">
                            <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"
                            onClick = {closeVideo}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const storiesBG = {
        background: `url(${StoriesBG}) no-repeat center center fixed`,
    }
    return (
        <>
         {modal()}
        <section id="storiesPage" style = {storiesBG}>
            <br/>
            <div className="pageTitle">Our Stories</div>
            {forEachStory(listOfStories)}
            <br/>
        </section>
        <section id="storiesPageMobile" style = {storiesBG}>
            <br/>
            <div className="pageTitle">Our Stories</div>
            {forEachStory(listOfStories)}
            <br/>
        </section>
       
        <ContactFooter/>
        </>
    )
}

export default StoriesPage
