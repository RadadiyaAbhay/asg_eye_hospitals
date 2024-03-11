import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner from "./../../assets/banner.png"
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'


const ServicePage = () => {
  let data ={
    title : 'Services and Specialities' ,
    img : banner ,
    path : ['/ Specialities '],
    desc: ''
  }
  return (
    <>
      <Banner data={data}/>
      <Services/>
      <Footer />

    </>
  )
}

export default ServicePage