import React from 'react';
import CategoryList from '../components/category/Read';
import ProductList from '../components/product/ProductList';
function Homepage() {
    return (
        <div className="container">
            <CategoryList />
            <ProductList />
        </div>
    );
}

export default Homepage;
