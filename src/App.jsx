import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
// import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import OurClients from './components/OurClients'
import LatestWork from './components/LatestWork'
import ContactForm from './components/ContactForm'
import Technologies from './components/Technologies'
import Industries from './components/Industries'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Technologies />
      <Industries />
      <LatestWork />
      <ContactForm />
      {/* <Features /> */}
      <OurClients />
      <Footer />
    </div>
  )
}

export default App
