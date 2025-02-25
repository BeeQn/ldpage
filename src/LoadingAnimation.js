import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <FaBitcoin className="bitcoin-icon" />
    </div>
  );
};

export default LoadingAnimation;
