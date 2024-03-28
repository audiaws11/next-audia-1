import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
      <div className="bg-slate-200 text-black min-h-screen">
        <Navbar/>
        {children}
      </div>
    );
  }
  