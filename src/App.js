import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import ProductDetailView from './pages/ProductDetail';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route exact path="/products/:productId" element={<ProductDetailView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;