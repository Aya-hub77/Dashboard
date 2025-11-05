import React from "react";
import "./Home.css";
import { salesData } from "../assets/salesData";
import { categoryData } from "../assets/categoryData";
import { recentUsers } from "../assets/recentUsers";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const Home = ({ collapsed }) => {
  const today = new Date();
  const dateString = today.toDateString();

  return (
    <main className={`home ${collapsed ? "collapsed" : ""}`}>
      <header className="header">
        <h3>Welcome back, Admin 👋</h3>
        <div><p>{dateString}</p>
        <select>
          <option readonly>Last 7 days</option>
        </select></div>
      </header>
      <section className="cards">
        <div className="card">
          <h4>Users</h4>
          <p>1,245</p>
          <span>+12% since last week</span>
        </div>
        <div className="card">
          <h4>Products</h4>
          <p>342</p>
          <span>+5% since last month</span>
        </div>
        <div className="card">
          <h4>Revenue</h4>
          <p>$12,430</p>
          <span>+8.4% this month</span>
        </div>
        <div className="card">
          <h4>Growth</h4>
          <p>+8.2%</p>
          <span>Steady increase</span>
        </div>
      </section>
      <section className="charts">
<div className="chart-line">
	<h4>Monthly Sales</h4>
	<ResponsiveContainer width="100%" height={300}>
	<LineChart data={salesData}
margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
	<CartesianGrid strokeDasharray="3 3" />
	<XAxis dataKey="month" />
	<YAxis />
	<Tooltip />
	<Line type="monotone" dataKey="sales" stroke="#8884d8"
strokeWidth={2}/>
	<Line type="monotone" dataKey="users" stroke="#82ca9d"
strokeWidth={2}/>
	</LineChart>
	</ResponsiveContainer>
</div>

<div className="chart-pie">
	<h4>Product Categories</h4>
	<ResponsiveContainer width="100%" height={300}>
	<PieChart>
	<Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
    {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"][index % 5]}/>))}
    </Pie>
      <Legend />
      <Tooltip />
      </PieChart>
      </ResponsiveContainer>
</div>
      </section>
      <section className="recent-activity">
        <h4>Recent Users</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date Joined</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td className={user.status.toLowerCase()}>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="widgets">
        <div className="actions">
          <h4>Quick Actions</h4>
          <div>
            <button>Add New Product</button>
            <button>Approve Users</button>
            <button>View Reports</button>
            <button>System Alerts</button>
          </div>
        </div>
        <div className="alerts">
          <h4>Recent Alerts</h4>
          <ul>
            <li>New user registered: Alice Johnson</li>
            <li>Stock low: Product X</li>
            <li>Monthly report generated</li>
            <li>Server uptime 99.9%</li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Home;
