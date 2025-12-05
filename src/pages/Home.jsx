import Introduction from '../components/Introduction'
import Services from '../components/Services'
import Project from '../components/Project'  
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/contact'

function App() {
  return (
    <>
     <div className="overflow-x-hidden">
        <Introduction/>
        <Services/>
        <Project/>
        <WorkExperience/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
