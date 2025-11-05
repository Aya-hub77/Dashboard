import React, { useState } from "react";
import "./Settings.css";
import avatar from "../assets/avatar.png";

const Settings = ({collapsed, darkMode, toggleDarkMode}) => {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className={`settings ${collapsed ? "collapsed" : ""}`}>
        <div className="settings-container">
      <h3>Account Settings</h3>

      <form onSubmit={handleSave} className="settings-form">
        <div className="profile-section">
          <img src={avatar} alt="Admin avatar" className="profile-avatar" />
          <div>
            <label>Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <label>Change Password</label>
            <input type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <div className="preferences">
          <label className="toggle">
            <input type="checkbox" checked={darkMode} onClick={toggleDarkMode} />
            <span className="slider"></span> Enable Dark Mode </label>
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
      </div>
    </div>
  );
};

export default Settings;
