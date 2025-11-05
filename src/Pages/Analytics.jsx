import React from "react";
import "./Analytics.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4200 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 7500 },
  { month: "Jul", revenue: 6800 },
  { month: "Aug", revenue: 8000 },
  { month: "Sep", revenue: 7200 },
  { month: "Oct", revenue: 8500 },
];

const categorySales = [
  { name: "Electronics", sales: 400 },
  { name: "Clothing", sales: 300 },
  { name: "Home & Kitchen", sales: 250 },
  { name: "Books", sales: 150 },
  { name: "Other", sales: 100 },
];

const Analytics = ({collapsed}) => {
  return (
    <div className={`analytics ${collapsed ? "collapsed" : ""}`}>
      <header className="analytics-header">
        <h3>Analytics & Reports</h3>
        <select>
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>This year</option>
        </select>
      </header>

      <div className="charts-grid">
        <div className="chart-card">
          <h4>Revenue Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Top Categories</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categorySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
