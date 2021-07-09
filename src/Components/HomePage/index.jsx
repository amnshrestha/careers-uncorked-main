import React from 'react'
import AboutCard from './IndividualComponents/AboutCard'
import ContactCard from './IndividualComponents/ContactCard'
import IntroCard from './IndividualComponents/IntroCard'
import ProductCard from './SubComponents/Product'

import $ from 'jquery';


const HomePage = () => {
    const changeNavColor = ()=>{
        $(".navbar").css("background-color","rgb(255, 230,150)")
    }
    changeNavColor();

    return (
        <div>
            <IntroCard/>
            <AboutCard/>
            <ProductCard/>
            <ContactCard/>
        </div>
    )
}

export default HomePage
