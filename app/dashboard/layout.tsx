import SideNav from '@/app/dashboard/SideNav';
import './dashboard.css'; // Import the CSS file

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}
