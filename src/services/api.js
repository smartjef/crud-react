import axios from 'axios';

const API_BASE_URL = 'http://localhost:8091/api';

export const getAllCategories = () => axios.get(`${API_BASE_URL}/categories`);
export const getAllProducts = () => axios.get(`${API_BASE_URL}/products`);
export const addNewCategory = async (categoryData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
        return response;
    } catch (error) {
        throw error;
    }
};
export const addNewProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/products`, productData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`http://localhost:8091/api/products/${productId}`);
        console.log('Product deleted successfully:', response.data);
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};

export const updateProduct = async (productId, updatedProductData) => {
    const response = await axios.put(`/api/products/${productId}`, updatedProductData);
    return response.data;
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};