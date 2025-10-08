// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home'
// import About from './pages/About'
// import Project from "./pages/Project";
// import Blog from './pages/Blog'
// import NotFound from './pages/NotFound'; 
// import Certificate from "./pages/Certificate";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/project' element={<Project />} />
//         <Route path='/certificate' element={<Certificate />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Project from "./pages/Project";
// import Blog from './pages/Blog';
import NotFound from './pages/NotFound'; 
import Certificate from "./pages/Certificate";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap semua route dengan MainLayout */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/certificate' element={<Certificate />} />
        </Route>
        
        {/* NotFound page tanpa layout (opsional) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;