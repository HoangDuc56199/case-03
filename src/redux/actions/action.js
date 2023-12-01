import axios from 'axios';
const API_END_POINT = `http://localhost:3001/products`;
export const fetchData = () => {

  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
      const response = await axios.get(API_END_POINT);

      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCT_REQUEST' });

    try {
      const response = await axios.get(`${API_END_POINT}/${id}`);
      dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: error.message });
    }
  };
};
export const updateProduct = (product)=>{
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });

    try {
      const response = await axios.push(`${API_END_POINT}/${product.id}`, product);
      dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: error.message });
    }
  };
}
export const createProduct = (product)=>{
  return async (dispatch) => {
    dispatch({ type: 'CREATE_PRODUCT_REQUEST' });

    try {
      const response = await axios.post(`${API_END_POINT}/`, product);
      dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'CREATE_PRODUCT_FAILURE', payload: error.message });
    }
  };
}
export const deleteProduct = (id)=>{
  return async (dispatch) => {
    dispatch({ type: 'DELETE_PRODUCT_REQUEST' });

    try {
      const response = await axios.delete(`${API_END_POINT}/${id}`);
      dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: error.message });
    }
  };
}


