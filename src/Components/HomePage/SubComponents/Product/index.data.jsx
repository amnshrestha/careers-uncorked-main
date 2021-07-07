import SharfuzAndSid from "../../../../assets/images/SaS.png"
import MichellePic from "../../../../assets/images/Michelle.png"
import DanielPic from "../../../../assets/images/Daniel.png"
import linkedInLogo from "../../../../assets/images/linkedInImage.png"

import facebookWhiteLogo from "../../../../assets/images/Logos/facebook-white-2.png"
import linkedinWhiteLogo from "../../../../assets/images/Logos/linkedin-white-2.png"
import youtubeWhiteLogo from "../../../../assets/images/Logos/youtube-white-2.png"
import applePodcast from "../../../../assets/images/Logos/applePodcast.png"
import spotify from "../../../../assets/images/Logos/spotify.png"
import deloite from "../../../../assets/images/Logos/deloitteLogo.png"
import ibm from "../../../../assets/images/Logos/IBMLogo.png"
import amazon from "../../../../assets/images/Logos/amazonLogo.png"
import ey from "../../../../assets/images/Logos/EYLogo.png"
import mnc from "../../../../assets/images/Logos/MnCLogo.png"
import microsoft from "../../../../assets/images/Logos/MicrosoftLogo.png"


import homepageHangoutBG from "../../../../assets/images/Backgrounds/homepageHangoutBG.png"
import homepageBlogsBG from "../../../../assets/images/Backgrounds/homepageBlogsBG.png"
import homepagePodcastBG from "../../../../assets/images/Backgrounds/homepagePodcastBG.png"
import homepageLinkedInBG from "../../../../assets/images/Backgrounds/homepageLinkedInBG.png"

const allProducts = [
    {
        title:"Careers Uncorked Hangouts",
        subtitle:"Our Livestream",
        description:"Join our hangouts where we talk about their struggles, barriers and experiences individuals wentt hrough to achieve success. Everyone has a great story and we can learn from these shared experiences. Because chances are you are going through the same struggles and we are here for you.",
        logos:[
            {
                logoImage:facebookWhiteLogo,
                logoLink:"#"
            },
            {
                logoImage:linkedinWhiteLogo,
                logoLink:"#"
            },
            {
                logoImage:youtubeWhiteLogo,
                logoLink:"#"
            }
        ],
        buttonText:"View Livestream",
        buttonLink:"#",
        mainPic:SharfuzAndSid,
        pictureName:"Sharfuz Sifat & Sidhant Ahluwalia",
        picturePosition:"Co-Hosts",
        backupColor:"#FFCF59",
        backgroundImage:homepageHangoutBG,
        textColor:"white",
    },
    {
        title:"Careers Uncorked Blogs",
        description:"FIND OUR INSIGNT ON THINGS FROM GETTING AN MBA TO MAKING THE MOST OF COLLEGE DURING A PANDEMIC",
        logos:[],
        buttonText:"View Blogs",
        buttonLink:"#",
        mainPic:MichellePic,
        pictureName:"Michelle Shue",
        picturePosition:"Chief Writer",
        backupColor:"#22168E",
        backgroundImage:homepageBlogsBG,
    },
    {
        title:"International Perspective",
        subtitle:"Our Podcast",
        description:"A podcast where we discuss the success stories, experiences, and challenes of international students. If you are an internationla student looking to carve your own path or if you are somenoe inteerested in knowing what it is like to be an international student, this is the podcast for you!",
        logos:[
            {
                logoImage:applePodcast,
                logoLink:"#"
            },
            {
                logoImage:spotify,
                logoLink:"#"
            }
        ],
        buttonText:"View Podcast",
        buttonLink:"#",
        mainPic:DanielPic,
        pictureName:"Daniel Munoz Huerta",
        picturePosition:"Podcast Host",
        backupColor:"#ADADAD",
        backgroundImage:homepagePodcastBG,
        textColor:"white",
    },
    {
        title:"Careers Uncorked On LinkedIn",
        subtitle:"Follow Us on LinkedIn",
        description:"We’re offering free LinkedIn Profile reviews to help you get closer to your next job! Our reviewers have received interviews from companies including",
        logos:[
            {
                logoImage:deloite,
                logoLink:"#"
            },
            {
                logoImage:ibm,
                logoLink:"#"
            },
            {
                logoImage:amazon,
                logoLink:"#"
            },
            {
                logoImage:ey,
                logoLink:"#"
            },
            {
                logoImage:mnc,
                logoLink:"#"
            },
            {
                logoImage:microsoft,
                logoLink:"#"
            }
        ],
        buttonText:"Follow Us",
        buttonLink:"#",
        mainPic:linkedInLogo,
        backupColor:"#284CCA",
        backgroundImage:homepageLinkedInBG,
        textColor:"white",
    },
]

export default allProducts;