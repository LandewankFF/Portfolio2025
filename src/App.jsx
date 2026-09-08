

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Project from "./pages/Project";
import Blog from './pages/blog';
import Certificate from "./pages/Certificate";
import NotFound from './pages/NotFound'; 

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProject from './pages/admin/AdminProject';
import AdminBlog from './pages/admin/AdminBlog';
import AdminCertificate from './pages/admin/AdminCertificate';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/certificate' element={<Certificate />} />
        </Route>
        
        {/* Admin Login (Public) */}
        <Route path='/admin/login' element={<Login />} />

        {/* Protected Admin Routes with AdminLayout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/projects' element={<AdminProject />} />
            <Route path='/admin/blogs' element={<AdminBlog />} />
            <Route path='/admin/certificates' element={<AdminCertificate />} />
          </Route>
        </Route>

        {/* NotFound page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;