import React, { useState } from "react";
import "./Products.css";
import { productsData } from "../assets/productsData";

const Products = ({ collapsed }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "In Stock" && product.stock > 0) ||
      (filter === "Out of Stock" && product.stock === 0);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={`products ${collapsed ? "collapsed" : ""}`}>
      <header>
        <h3>Products</h3>
        <div className="actions">
          <input type="text" placeholder="Search products..."
            value={search} onChange={(e) => setSearch(e.target.value)}/>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          <button className="add-btn">+ Add Product</button>
        </div>
      </header>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td className="product-info">
                <img src={p.image} alt={p.name} />
                <span>{p.name}</span>
              </td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>
                <span className={`status ${p.stock > 0 ? "in-stock" : "out-stock"}`}>
                  {p.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
