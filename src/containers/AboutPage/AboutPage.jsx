import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner from "./../../assets/banner.png"
import Mission from '../../components/Mission/Mission'
import About from '../../components/About/About'
import OurTeam from '../../components/OurTeam/OurTeam'
import Footer from '../../components/Footer/Footer'


const AboutPage = () => {
    let data ={
        title : 'About Us' ,
        img : banner ,
        path : ['/ About Us '],
        desc: ''
      }
  return (
    <>
    <Banner data={data}/>
    <About/>
    <Mission/>
    <OurTeam/>
    <Footer />

    </>
  )
}

export default AboutPage