import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaBox, FaBars, FaClipboardList, FaChartBar, FaCog } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top">
        <FaBars className="toggle-btn" onClick={() => setCollapsed(!collapsed)} />
        {!collapsed && <h2>Admin</h2>}
      </div>

      <nav className="menu">
        <NavLink to="/" className="link">
          <FaHome className="icon" />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/users" className="link">
          <FaUsers className="icon" />
          {!collapsed && <span>Users</span>}
        </NavLink>
        <NavLink to="/products" className="link">
          <FaBox className="icon" />
          {!collapsed && <span>Products</span>}
        </NavLink>
        <NavLink to="/orders" className="link">
          <FaClipboardList className="icon" />
          {!collapsed && <span>Orders</span>}
        </NavLink>
        <NavLink to="/analytics" className="link">
          <FaChartBar className="icon" />
          {!collapsed && <span>Analytics</span>}
        </NavLink>
        <NavLink to="/notifications" className="link">
          <FaHistory className="icon" />
          {!collapsed && <span>Notifications</span>}
        </NavLink>
        <NavLink to="/settings" className="link">
          <FaCog className="icon" />
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
