import React, { useState } from "react";
import "./Users.css";
import { users } from "../assets/users";

const Users = ({ collapsed }) => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <main className={`users ${collapsed ? "collapsed" : ""}`}>
      <header>
        <h3>Users</h3>
        <div className="actions">
          <input
            type="text"
            placeholder="Search users..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Admin">Admin</option>
          <option value="Viewer">Viewer</option>
        </select>
        </div>
      </header>
      <section className="users-table">
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date Joined</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              return (
                <tr key={user._id}>
                  <td>
                    <img src={user.avatar} alt={user.name} />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td> <span className={`status ${user.status === "Active" ? "active" : "inactive"}`}>{user.status}</span></td>
                  <td>{user.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
};
export default Users;
