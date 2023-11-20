import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MovingText from './components/MovingText'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  

  return (
    <div className='bg-dark'>
      <Navbar />
      <Banner />
      <Skills />
      <div className='mb-20'></div>
      <MovingText />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
