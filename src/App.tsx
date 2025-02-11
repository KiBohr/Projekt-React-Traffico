import { useState } from 'react'
import Header from './components/Hero'
import FAQ from './components/FAQ'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'


export default function App(){
  return(
    <>
      <Header></Header>
      <FAQ></FAQ>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  )
}