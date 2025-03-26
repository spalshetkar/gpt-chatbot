import { Outlet } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';

const MainLayout = () => {
  return (
    <div className="flex h-full">
      {/* Dashboard sidebar */}
      <div className="w-64 border-r border-gray-200 overflow-y-auto">
        <DashboardPage />
      </div>
      
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout; 