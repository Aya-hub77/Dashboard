import React, { useState, useEffect } from "react";
import './Navbar.css'
import avatar from '../assets/avatar.png'
import { IoIosNotifications } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { notificationsData } from "../assets/notificationsData";
import { users } from "../assets/users";
import { productsData } from "../assets/productsData";

const Navbar = ({collapsed, darkMode, toggleDarkMode, onLogout}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const combinedData = [...users, ...productsData];
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = combinedData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
  const handleClickOutside = e => {
    if (!e.target.closest('.notification-wrapper')) {
      setShowNotifications(false);
    }
    if (!e.target.closest('.avatar')) {
      setShowMenu(false);
    }
    if (!e.target.closest('.search-wrapper')) {
      setSearchResults(false);
    }
  };
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, []);


  return (
    <nav className={`navbar ${collapsed ? "collapsed" : ""}`}>
        <h2 className="logo">Dashboard</h2>
        <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
      <div className={`search-wrapper ${open ? "open" : ""}`}>  
        <input
          type="text" 
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange} 
        />
        {searchResults.length > 0 && (
          <div className="search-dropdown">
            {searchResults.map((item, idx) => (
              <div key={idx} className="search-item">
                <span>{item.type}</span> - {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`nav-right ${open ? "open" : ""}`}>
        <div className="mode" onClick={toggleDarkMode}>
          {darkMode ? <FaRegLightbulb /> : <FaLightbulb />}
        </div>
<div className="notification-wrapper">
<IoIosNotifications className="notification" onClick={() => setShowNotifications(prev => !prev)} />
{notificationsData.length > 0 && (
	<span className="badge">{notificationsData.length}</span>
)}
{showNotifications && (
  <div className="notifications-dropdown">
    {notificationsData.length === 0 ? (
      <p className="no-notifications">No new notifications</p>
    ) : (
      notificationsData.map(n => (
        <div key={n.id} className="notification-item">
          <p>{n.message}</p>
          <span>{n.time}</span>
        </div>
      ))
    )}
  </div>
)}
</div>
        <button className="avatar" onClick={() => setShowMenu(!showMenu)}>
            <img src={avatar} alt="Admin avatar" />
        </button>
          {showMenu && (
            <div className="dropdown">
                <a><Link to="/settings" onClick={() => {setShowMenu(false); setOpen(false)}}>Settings</Link></a>
                <a onClick={onLogout}>Logout</a>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;