import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="home">
      <div className="overlay">
        <h1 className="title">Welcome to MA BlueWave Bazaar</h1>
        <p className="description">Explore our range of products!</p>
        <p className="cta">Discover the best deals and offers tailored just for you. Shop now and experience the difference!</p>
        <button className="shop-now" onClick={handleShopNow}>Shop Now</button>
      </div>
    </div>
  );
}

export default Home;
