import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Careers' text='Take a look at some of the career opportunities available below:' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
