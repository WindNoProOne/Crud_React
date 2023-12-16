import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../data/product.json";

function Create() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = id.trim(),
      b = email.trim(),
      c = fullname.trim(),
      d = phone.trim();

    // Kiểm tra xem ID có đúng định dạng không
    const idRegex = /^[a-z]\d{2}$/;
    if (!idRegex.test(a)) {
      alert("ID must start with a letter followed by two digits.");
      return;
    }

    db.push({ id: a, email: b, fullname: c, phone: d });
    navigate("/");
  };

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const containerStyle = {
    maxWidth: "400px",
    margin: "auto",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "8px",
    marginBottom: "12px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <div style={containerStyle}>
      <h3>Create Product</h3>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            required
            style={inputStyle}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            required
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address (e.g., user@example.com)"
          />
        </label>
        <br />
        <label>
          Full Name:
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            required
            style={inputStyle}
            onChange={(e) => setFullname(e.target.value)}
            maxLength={30}
            minLength={10}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            required
            style={inputStyle}
            onChange={(e) => setPhone(e.target.value)}
            pattern="^\d{10}$"
            title="Please enter a 10-digit phone number (e.g., 1234567890)"
          />
        </label>
        <br />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style = buttonHoverStyle)}
          onMouseOut={(e) => (e.target.style = buttonStyle)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
