import { useState } from "react";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import BoDashboard from "./pages/BoDashboard"


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
 

  return (
    <div > 
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen}/>
      <BoDashboard/>
    </div>
  )
}

export default App
