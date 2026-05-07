import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#03045e]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}