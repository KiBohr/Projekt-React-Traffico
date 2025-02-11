import { useState } from 'react'
import FAQ from './components/FAQ'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Hero from './components/Hero'



export default function App(){
  return(
    <>
      <Hero></Hero>
      <FAQ></FAQ>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  )
}