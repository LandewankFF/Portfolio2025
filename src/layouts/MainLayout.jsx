import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[70px]"> {/* pt-[70px] untuk offset navbar fixed */}
        <Outlet /> {/* Pages akan render di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;