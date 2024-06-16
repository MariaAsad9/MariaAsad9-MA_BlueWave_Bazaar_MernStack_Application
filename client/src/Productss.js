import React, { useState } from 'react';
import ProductForm from './Component/ProductForm';
import ProductList from './Component/ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList } from '@fortawesome/free-solid-svg-icons';

function Products() {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="products-page">
      <div className="container">
        <h2 className="text-center mb-4">Manage Your Products</h2>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <button onClick={toggleForm} className="btn btn-primary mb-3">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              {showForm ? 'Close Product Form' : 'Add New Product'}
            </button>
            {showForm && <ProductForm />}
          </div>
          <div className="col-lg-6 mb-3">
            <button onClick={toggleList} className="btn btn-primary mb-3">
              <FontAwesomeIcon icon={faList} className="me-2" />
              {showList ? 'Close Product List' : 'View Product List'}
            </button>
            {showList && <ProductList />}
          </div>
        </div>
      </div>

      <style jsx>{`
        .products-page {
          background: linear-gradient(to right, #3a7bd5, #3a6073);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 30px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .container:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }
        }

        .btn {
          transition: background-color 0.3s, transform 0.3s;
          width: 100%;
          font-size: 1rem;
          background-color: #3a7bd5;
          border-color: #3a7bd5;
          text-transform: uppercase;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn:hover {
          background: #335d92;
          transform: translateY(-2px);
        }

        .me-2 {
          margin-right: 8px;
        }

        h2 {
          color: #1e3c72;
          font-size: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}

export default Products;
