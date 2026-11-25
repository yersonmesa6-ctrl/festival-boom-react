import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-[#FFE600] text-black">
      <Header />
      <main className="pt-16 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;