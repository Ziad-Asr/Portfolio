import About from './components/About/About'
import Contact from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App