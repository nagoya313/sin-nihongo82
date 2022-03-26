import SideBar from '../molecules/SideBar.client';
import AppBar from '../organisms/AppBar.client';
import Footer from '../organisms/Footer.client';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="drawer h-screen w-full">
    <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      <AppBar />
      <div className="flex h-full">
        <div className="w-80 hidden md:block border-r">
          <SideBar />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-1 p-8 prose max-w-none">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="nav-drawer" className="drawer-overlay" />
      <div className="overflow-y-auto bg-base-100 w-80">
        <SideBar />
      </div>
    </div>
  </div>
);
