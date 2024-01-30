import axios from 'axios';

const API_BASE_URL = 'http://localhost:8091/api';

export const getAllCategories = () => axios.get(`${API_BASE_URL}/categories`);
export const getAllProducts = () => axios.get(`${API_BASE_URL}/products`);
