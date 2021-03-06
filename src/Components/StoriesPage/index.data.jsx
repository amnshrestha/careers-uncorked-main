import React, {useState,useEffect} from 'react'

import FetchService from '../../assets/helper/FetchService';

const FetchStoriesFromYoutube = () =>{
    const [allData, setAlldata] = useState({});
    const [preparedData, setPreparedData] = useState([]);
    const [dataFound, setdataFound] = useState(false);
    const [dataPrepared, setDataPrepared] = useState(false);

    useEffect(() => {

        const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLIy7-i_9rAyQ9teMuV1dJHWuVcsW5y39o&key="+process.env.REACT_APP_YOUTUBE_API_KEY;
        FetchService.GET(url)
        .then((res) => {
            if(Object.keys(res).length > 0 && !dataFound){
                setAlldata(res.items);
                setdataFound(true);
            }
            return manageData();
        })
    }, [allData])

    const manageData = () =>{
        var mainArray = [];
        if(Object.keys(allData).length > 0){
            allData.map((eachVideo) => {
                var title = eachVideo.snippet.title;
                var description = eachVideo.snippet.description;
                var videoID = eachVideo.snippet.resourceId.videoId;
                var modalID = "#"+eachVideo.snippet.resourceId.videoId;
                var videoURL = "https://www.youtube.com/embed/"+eachVideo.snippet.resourceId.videoId;
                var thumbnailURL = eachVideo.snippet.thumbnails.standard.url;
                var toAppend = {
                    "title":title,
                    "description":description,
                    "videoID":videoID,
                    "modalID":modalID,
                    "videoURL":videoURL,
                    "thumbnailURL": thumbnailURL,
                }
                mainArray.push(toAppend);
            });
            setPreparedData(mainArray);
            setDataPrepared(true);
        }
    }

    return preparedData;
}

export default FetchStoriesFromYoutube;