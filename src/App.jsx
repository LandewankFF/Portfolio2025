import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Services from './components/Services'
import Project from './components/Project'  
import WorkExperience from './components/WorkExperience'
import Footer from './components/Footer'
import Contact from './components/contact'

function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar/>
        <Introduction/>
        <Services/>
        <Project/>
        <WorkExperience/>
        <Contact/>
        <Footer/>
      </div>

    </>
  )
}

export default App
