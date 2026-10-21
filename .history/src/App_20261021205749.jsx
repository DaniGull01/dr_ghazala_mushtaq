import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Research from './components/Research'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import WhyChooseMe from './components/WhyChooseMe'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      
      <Certifications />
      <Research />
      <Skills />
      <Achievements />
      <WhyChooseMe />
       <Reviews/>
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}