import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrentProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/readAllProducts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="current-products" style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298, #6a11cb)", minHeight: "100vh", padding: "20px" }}>
      {error && <p className="alert alert-danger">{error}</p>}
      <h2 className="text-center">Current Products</h2>
      <div className="product-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {products.map((product) => (
          <div key={product._id} className="product-card" style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298, #6a11cb)", color: "#fff", borderRadius: "10px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)", padding: "20px", marginBottom: "20px", width: "calc(33.33% - 20px)", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <h3 style={{ marginTop: 0, fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>{product.name}</h3>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        ))}
      </div>
      <div className="footer" style={{ textAlign: "center", marginTop: "40px", color: "#fff" }}>
        Thank you for visiting our product page!
      </div>
    </div>
  );
}

export default CurrentProducts;
