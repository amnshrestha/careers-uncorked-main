import React from 'react'
import AboutCard from './IndividualComponents/AboutCard'
import ContactCard from './IndividualComponents/ContactCard'
import IntroCard from './IndividualComponents/IntroCard'
import ProductCard from './SubComponents/Product'

const HomePage = () => {
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
