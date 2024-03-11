import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner from "./../../assets/banner.png"
import HomeNews from '../../components/HomeNews/HomeNews'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'

const BlogPage = () => {
    let data = {
        title: 'News & Events',
        img: banner,
        path: ['/ Blog '],
        desc: ''
    }
    let blogData = {
        title: 'Our Most recent Articals',
        desc : ""
    }
    return (
        <>
            <Banner data={data} />
            <HomeNews title={blogData} />
            <Blog/>
      <Footer />

        </>
    )
}

export default BlogPage