import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BoProfitRecord from "./pages/BoProfitRecord";
import BoDashboard from "./pages/BoDashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    //** while running this code please comment one component and run thw other component dont comment navbar and sidebar component **
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} sidebarRef={sidebarRef} />
      <BoDashboard />
      {/* <BoProfitRecord/> */}
    </div>
  );
}

export default App;