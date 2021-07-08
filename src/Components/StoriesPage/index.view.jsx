import React from 'react'

import FetchStoriesFromYoutube from "./index.data"

import StoriesBG from "../../assets/images/Backgrounds/StoriesBG.png"
import YoutubeButton from "../../assets/images/youtubeButton.png"

import "./index.css"
import ContactFooter from '../ContactFooter'

const StoriesPage = () => {
    var listOfStories = FetchStoriesFromYoutube()
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
                        <a href="#">
                            <button type="button" class="btn btn-light watchButton">
                                <img src={YoutubeButton} alt="YoutubeIcon" className="youtubeButton"/>
                                Watch Video
                            </button>
                        </a>
                    </div>

                </div> 
            )
        })
    }
    const storiesBG = {
        background: `url(${StoriesBG}) no-repeat center center fixed`,
    }
    return (
        <>
        <section id="storiesPage" style = {storiesBG}>
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
