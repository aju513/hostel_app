import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Hostel from "./pages/Hostel";
import SendOtp from "./pages/SendOtp";
import Seater from "./pages/Seater";
import FAQ from "./pages/FAQ";
import HostelDetail from "./pages/HostelDetail";
import UserProfile from "./pages/User/UserProfile";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import NewLogin from "./pages/NewLogin";
import AddHostel from "./pages/vendor/hostel/AddHostel";
import Dashboard from "./pages/vendor/Dashboard";
import AddRoom from "./pages/vendor/room/AddRoom";
import { HostelProvider } from "./context/HostelContext";
 

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HostelProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/login" element={<NewLogin />} />
            <Route path="/send_otp" element={<SendOtp />} />
            <Route path="/seater" element={<Seater />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/view" element={<HostelDetail />} />
            <Route path="/user_profile" element={<UserProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vendor/hostel/add" element={<AddHostel />} />
            <Route path="/vendor/hostel/add-room" element={<AddRoom />} />
          </Routes>
        </HostelProvider>
      </AuthProvider>

      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
