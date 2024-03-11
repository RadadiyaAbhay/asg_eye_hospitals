import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import HomePage from './containers/HomePage/HomePage'
import ServicePage from './containers/ServicePage/ServicePage'
import BlogPage from './containers/BlogPage/BlogPage'
import ContactPage from './containers/ContactPage/ContactPage'
import HospitalsPage from './containers/HospitalsPage/HospitalsPage'
import AboutPage from './containers/AboutPage/AboutPage'
import ServiceDetailPage from './containers/ServiceDetailPage/ServiceDetailPage'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/service'} element={<ServicePage />} />
        <Route path={'/blog'} element={<BlogPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/hospitals'} element={<HospitalsPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/servicedetail'} element={<ServiceDetailPage />} />
      </Routes>
    </>
  )
}

export default App