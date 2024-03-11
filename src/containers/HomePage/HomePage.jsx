import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import Award from '../../components/Award/Award'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeService from '../../components/HomeService/HomeService'
import Google from '../../components/Google/Google'
import Patients from '../../components/Patients/Patients'
import Team from '../../components/Team/Team'
import HomeNews from '../../components/HomeNews/HomeNews'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
    let blogData = {
        title: 'See our latest News & Events',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text"
    }
    return (
        <>
            <HomeBanner />
            <Award />
            <HomeAbout />
            <HomeService />
            <Google />
            <Patients />
            <Team />
            <HomeNews title={blogData} />
            <Footer />

        </>
    )
}

export default HomePage