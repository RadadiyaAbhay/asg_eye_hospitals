import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner from "./../../assets/banner2.png"
import ServiceBanner from '../../components/ServiceBanner/ServiceBanner'
import Treatments from '../../components/Treatments/Treatments'
import Questions from '../../components/Questions/Questions'
import Footer from '../../components/Footer/Footer'

const ServiceDetailPage = () => {
    let data ={
        title : 'Hospitals' ,
        img : banner ,
        path : ['/ Specialities ' , '/ Diabetic Retinopathy '],
        desc: ''
      }
    return (
        <>
            <Banner data={data} />
            <ServiceBanner/>
            <Treatments/>
            <Questions/>
      <Footer />

        </>
    )
}

export default ServiceDetailPage