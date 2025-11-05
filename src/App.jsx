import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import Notifications from "./Pages/Notifications";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 992);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; 
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
        <div className={`dashboard ${collapsed ? "collapsed" : ""}`}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Navbar collapsed={collapsed} onLogout={handleLogout} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home collapsed={collapsed} />} />
            <Route path="/users" element={<Users collapsed={collapsed} />} />
            <Route path="/products" element={<Products collapsed={collapsed} />}/>
            <Route path="/orders" element={<Orders collapsed={collapsed} />} />
            <Route path="/analytics" element={<Analytics collapsed={collapsed} />} />
            <Route path="/notifications" element={<Notifications collapsed={collapsed} />} />
            <Route path="/settings" element={<Settings collapsed={collapsed} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </div>
    </>
  );
};

export default App;
