import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import { Footer, Header } from "./Layout";
import Search from "./Search";
import Activity from "./Activity";
import PriceM from "./PriceM";
import ActivityManager from "./ActivityManager"; // Import ActivityManager

function App() {
  const location = useLocation();
  const isAuthOrAboutRoute =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/about" ||
    location.pathname === "/search" ||
    location.pathname === "/activity" ||
    location.pathname === "/priceM" ||
    location.pathname === "/activity-manager"; // Add this path

  return (
    <div>
      {!isAuthOrAboutRoute && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/priceM" element={<PriceM />} />
        <Route path="/activity-manager" element={<ActivityManager />} />{" "}
        {/* Add this route */}
      </Routes>
      {!isAuthOrAboutRoute && <Footer />}
    </div>
  );
}

export default App;
