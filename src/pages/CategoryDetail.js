import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../services/api';
import ProductList from '../components/product/ProductList';
const CategoryDetailView = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            try {
                const response = await getCategoryById(categoryId);
                console.log('API Response:', response);
                setCategory(response);
            } catch (error) {
                console.error('Error fetching category details:', error);
            }
        };

        console.log('CategoryId:', categoryId);
        fetchCategoryDetails();
    }, [categoryId]);

    return (
        <div className='bg-white p-5'>
            <div>
                <Link to="/" className='btn btn-primary mb-3'>Back to Categories</Link>
            </div>
            <h2>Category Detail</h2>
            {category ? (
            <div className='row'>
                <div className='col-12 col-lg-4'>
                {category.imageUrl ? (
                    <img src={category.imageUrl} alt={category.name} className='img-fluid' />
                ) : (
                    <img src='https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/category/16/0933721/1.jpg' alt='Default' className='card-img-top' />
                )}
                </div>
                <div className='col-12'>
                    <h3 className='fw-bold'>{category.name}</h3>
                    <div>
                        <Link to={`/categories/${category.id}/edit`} className='btn btn-primary me-2'>Edit</Link>
                        <Link to={`/categories/${category.id}/delete`} className='btn btn-danger me-2'>Delete</Link>
                    </div>
                    <div className='row'>
                        <ProductList/>
                    </div>
                </div>
            </div>
                ) : (
                    <div>Loading...</div>
                )}
        </div>
    );
};

export default CategoryDetailView;
