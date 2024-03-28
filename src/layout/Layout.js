import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
      <div className="bg-slate-200 text-black min-h-screen">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    );
  }
  