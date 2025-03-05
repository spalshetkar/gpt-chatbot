import { Outlet } from 'react-router-dom';
import NavBar from '../navigation/NavBar';
import Footer from '../common/Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <NavBar />
      <main className="content-area">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;