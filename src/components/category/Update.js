import React, { useState, useEffect } from 'react';
import { getCategoryById, updateCategory } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const CategoryEdit = ({ match }) => {
    const navigate = useNavigate();
    const [categoryData, setCategoryData] = useState({
        name: '',
        imageUrl: '',
    });

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            try {
                if (match && match.params) {
                    const response = await getCategoryById(match.params.categoryId);
                    setCategoryData(response);
                }
            } catch (error) {
                console.error('Error fetching category details:', error);
            }
        };

        fetchCategoryDetails();
    }, [match]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (match && match.params) {
                await updateCategory(match.params.categoryId, categoryData);
                navigate(`/categories/${match.params.categoryId}`);
            }
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    return (
        <div>
            <h2>Edit Category - {match.params.categoryId}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Category Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={categoryData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={categoryData.imageUrl}
                    onChange={handleChange}
                />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default CategoryEdit;
