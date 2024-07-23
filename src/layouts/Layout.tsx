import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "./layout.css";
interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className={`w-[95%] lg:w-[90%] m-auto ${className} `}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
