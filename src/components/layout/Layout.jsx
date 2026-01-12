import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <main className="lg:pl-72 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;



