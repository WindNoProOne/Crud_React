import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import data from "../data/product.json";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Lấy sản phẩm có mã số trong dữ liệu data
  const index = data.findIndex((x) => x.id === id);
  const item = data[index]; // Create a copy of the item

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure that the values are strings before calling trim
    const updatedEmail = email.trim();
    const updatedFullName = fullname.trim();
    const updatedPhone = phone && typeof phone === "string" ? phone.trim() : "";

    // Check if any of the values have changed
    if (
      updatedEmail !== item.email ||
      updatedFullName !== item.fullname ||
      updatedPhone !== item.phone
    ) {
      // Tạo một bản sao của mảng data để không làm thay đổi trực tiếp dữ liệu ban đầu
      data[index] = {
        ...item,
        email: updatedEmail,
        fullname: updatedFullName,
        phone: updatedPhone,
      };
      navigate("/");
    } else {
      console.log("No changes detected.");
    }
  };
  const [email, setEmail] = useState(item.email);
  const [fullname, setFullName] = useState(item.fullname);
  const [phone, setPhone] = useState(item.phone);

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

  return (
    <div style={containerStyle}>
      <h3>Update Product</h3>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            id="id"
            name="id"
            value={item.id}
            required
            style={inputStyle}
            readOnly
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
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            required
            style={inputStyle}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOut={(e) => (e.target.style = buttonStyle)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
