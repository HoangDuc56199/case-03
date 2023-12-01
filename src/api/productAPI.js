import axios from 'axios';

const API_END_POINT = "http://localhost:3001/";

export const findProducts = async () => {
  let result = null;
  try {
    result = await axios.get(`${API_END_POINT}/products`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};
export const findProduct = async (productId) => {
  let result = null;
  try {
    result = await axios.get(`${API_END_POINT}/${productId}`);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};
export const createProduct = async (product) => {
  let result = null;
  try {
    result = await axios.post(`${API_END_POINT}/`, product);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};
export const updateProduct = async (product) => {
  let result = null;
  try {
    result = await axios.put(`${API_END_POINT}/${product.id}`, product);
  } catch (e) {
    console.log("Update product API error: " + e);
  }
  return result;
};
export const deleteProduct = async (product) => {
  let result = null;
  try {
    result = await axios.delete(`${API_END_POINT}/${product}`);
  } catch (e) {
    console.log("Delete book API error: " + e);
  }
  return result;
};
