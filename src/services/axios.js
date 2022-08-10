import { axiosInstance } from "../config/axios/fetchAxos";

export const getAllCategories = async () => {
    const response = axiosInstance.get(`categories.php`);
    return response;
};

export const getDetailMeal = async (id) => {
    const response = axiosInstance.get(`lookup.php?i=${id}`);
    return response;
};

export const filterCategory = async (name) => {
    const response = axiosInstance.get(`filter.php?c=${name}`);
    return response;
};