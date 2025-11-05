import React, { useState } from "react";
import "./Orders.css";

const Orders = ({ collapsed }) => {
  const [filter, setFilter] = useState("All");

  const ordersData = [
    { id: "#1023", customer: "John Smith", date: "2025-11-01", amount: "$320", status: "Completed" },
    { id: "#1024", customer: "Sarah Brown", date: "2025-10-30", amount: "$80", status: "Pending" },
    { id: "#1025", customer: "Mike Wilson", date: "2025-10-28", amount: "$120", status: "Refunded" },
    { id: "#1026", customer: "Jane Doe", date: "2025-10-25", amount: "$500", status: "Completed" },
    { id: "#1027", customer: "Tom Hardy", date: "2025-10-22", amount: "$210", status: "Pending" },
  ];

  const filteredOrders =
    filter === "All" ? ordersData : ordersData.filter((o) => o.status === filter);

  return (
    <div className={`orders ${collapsed ? "collapsed" : ""}`}>
      <header className="orders-header">
        <h3>Recent Orders</h3>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Refunded</option>
        </select>
      </header>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
