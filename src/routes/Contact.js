import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Faq from '../components/contact/Contact'
import '../components/contact/Contact.css'
import '../components/contact/Question.css'


const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Contact' text='More information below on how to reach us ' />
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Contact
