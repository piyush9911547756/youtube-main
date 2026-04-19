import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Category from "./Components/Category";
import Video from "./Components/Video";
import WatchPage from "./Components/WatchPage";
const App = () => {

  const [category, setCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "All";
  });

  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 900);


  useEffect(() => {
    localStorage.setItem("selectedCategory", category);
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
   setSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar
        setCategory={setCategory}
        sidebarOpen={sidebarOpen}
      />


      <div>
        <Category
          sidebarOpen={sidebarOpen}
          onCategorySelect={setCategory}
          selectedCategory={category}
        />
      </div>

   
      <div
        style={{
          marginLeft: sidebarOpen && window.innerWidth >= 900 ? "240px" : "0",
          marginTop: "90px",
          transition: "margin 0.3s ease",
        }}
      >
        <Routes>
          <Route path="/" element={<Video category={category} />} />
          <Route path="/watch/:videoId" element={<WatchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
