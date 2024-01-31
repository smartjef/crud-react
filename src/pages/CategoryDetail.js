import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../services/api';
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
        <div>
            <h2>Category Detail</h2>
            {category ? (
                <div>
                    <h3>{category.name}</h3>
                    <p>Description: {category.description}</p>
                    {category.imageUrl && <img src={category.imageUrl} alt={category.name} />}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default CategoryDetailView;
