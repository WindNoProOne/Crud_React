import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/product.json";

const Home = () => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  //Search
  const [items, setItems] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc name Item qua full name
  const filteredItems = items.filter(
    (item) =>
      item.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  function handleDelete(id) {
    if (window.confirm(`Are you sure you want to delete ${id} this item? `)) {
      // Filter out the item with the specified id
      const updatedItems = items.filter((item) => item.id !== id);
      alert(`Item with ID ${id} deleted`);
      setItems(updatedItems);
    }
  }

  return (
    <div>
      <h3>List Of Home</h3>

      {/* Code search */}
      <input
        type="text"
        placeholder="Search by Full Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px" }}
      />

      <Link to="/create" style={{ textDecoration: "none" }}>
        <button
          style={{
            ...thTdStyle,
            cursor: "pointer",
            borderRadius: 10,
            color: "green",
            marginBottom: "10px",
          }}
        >
          Create Home
        </button>
      </Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Id</th>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Full Name</th>
            <th style={thTdStyle}>Phone</th>
            <th style={thTdStyle}> </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{item.id}</td>
              <td style={thTdStyle}>{item.email}</td>
              <td style={thTdStyle}>{item.fullname}</td>
              <td style={thTdStyle}>{item.phone}</td>
              <td>
                <button>
                  <Link
                    to={`/product/${item.id}`}
                    style={{
                      ...thTdStyle,
                      cursor: "pointer",
                      borderRadius: 10,
                      color: "blue",
                    }}
                  >
                    Show Details
                  </Link>
                </button>
                <button>
                  <Link
                    to={`/update/${item.id}`}
                    style={{
                      ...thTdStyle,
                      cursor: "pointer",
                      borderRadius: 10,
                      color: "blue",
                    }}
                  >
                    Update Product
                  </Link>
                </button>
                <button
                  style={{
                    ...thTdStyle,
                    cursor: "pointer",
                    borderRadius: 10,
                    color: "red",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
