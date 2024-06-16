import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", category: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/addproduct", product);
      console.log("Product created:", response.data);
      setProduct({ name: "", description: "", price: "", category: "" });
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to create product. Please try again later.");
    }
  };

  return (
    <div className="product-form">
      <h2 className="text-center">Add Product</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Product Price"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Product Category"
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary btn-submit" type="submit">Submit</button>
        </div>
      </form>
      <style jsx>{`
        .product-form {
          background: linear-gradient(135deg, #3388ff, #99ccff);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          color: #fff;
        }
        .product-form h2 {
          margin-bottom: 20px;
        }
        .product-form .form-control {
          border: none;
          border-radius: 5px;
          padding: 10px;
        }
        .product-form .btn-submit {
          border-radius: 5px;
          padding: 10px 40px;
          background-color: #0056b3;
          border: none;
          transition: background-color 0.3s;
        }
        .product-form .btn-submit:hover {
          background-color: #004080;
        }
      `}</style>
    </div>
  );
}

export default ProductForm;
