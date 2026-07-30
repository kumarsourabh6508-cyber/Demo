import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ClockPage from "./Apps/Clock/pages/ClockPage";

import "./Styles/App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <button
        type="button"
        className="sidebar-arrow-button"
        onClick={openSidebar}
        aria-label="Open sidebar"
      >
        &gt;
      </button>

      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;