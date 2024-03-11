import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner2 from "./../../assets/banner2.png"
import Form from '../../components/Form/Form'
import ContactFooter from '../../components/ContactFooter/ContactFooter'


const ContactPage = () => {
    let data = {
        title: 'Contact Us',
        img: banner2,
        path: ['/ Contact '],
        desc: 'Connect with ASG Eye Hospital - Your Gateway to Exceptional Eye Care and Support'
    }
    return (
        <>
            <Banner data={data}/>
            <Form/>
            <ContactFooter/>
        </>
    )
}

export default ContactPage