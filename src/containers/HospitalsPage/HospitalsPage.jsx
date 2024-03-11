import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner from "./../../assets/banner2.png"
import Map from '../../components/Map/Map'
import Hospitals from '../../components/Hospitals/Hospitals'
import Footer from '../../components/Footer/Footer'


const HospitalsPage = () => {
    let data ={
        title : 'Hospitals' ,
        img : banner ,
        path : ['/ Hospitals '],
        desc: 'ASG Eye Hospitals brings state of art technology ophthalmology care with an aim to extend the highest standard of eye care. The hospital will provide services includingsuperspecialist consultations by ASG expert doctors, best inpatient treatments using the most diagnosis and treatment of complex eye conditions.'
      }
  return (
    <>
    <Banner data={data}/>
    <Map/>
    <Hospitals/>
    <Footer />
    </>
  )
}

export default HospitalsPage