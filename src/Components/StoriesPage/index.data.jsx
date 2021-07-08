import React, {useState,useEffect} from 'react'

import FetchService from '../../assets/helper/FetchService';

const FetchStoriesFromYoutube = () =>{
    const [allData, setAlldata] = useState({});
    const [preparedData, setPreparedData] = useState([]);
    const [dataFound, setdataFound] = useState(false);
    const [dataPrepared, setDataPrepared] = useState(false);

    useEffect(() => {
        
        const url = "confidential";
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
                console.log(eachVideo);
                var title = eachVideo.snippet.title;
                var description = eachVideo.snippet.description;
                var videoID = eachVideo.snippet.resourceId.videoId;
                var thumbnailURL = eachVideo.snippet.thumbnails.standard.url;
                var toAppend = {
                    "title":title,
                    "description":description,
                    "videoID":videoID,
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