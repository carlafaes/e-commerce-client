import BASE_URL from "../../config/baseUrl";
import axios from 'axios'
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_ID_BAG_PRODUCTS = "SET_ID_BAG_PRODUCTS";
export const ADD_PRODUCT_TO_BAG = "ADD_PRODUCT_TO_BAG";
export const REMOVE_PRODUCT_TO_BAG = "REMOVE_PRODUCT_TO_BAG";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";

export const setProductInfo=(id)=>dispatch=>{
  return axios.get(`${BASE_URL}product/${id}`)
  .then(({data})=>{
    return dispatch({ type: PRODUCT_DETAIL, payload: data });
  })
}
export const setAllProducts = (data) => {
  return { type: SET_ALL_PRODUCTS, payload: data };
};

export const setIdBagProducts = (ids) => {
  return { type: SET_ID_BAG_PRODUCTS, payload: ids };
};

export const addProductToBag = (id) => {
  return { type: ADD_PRODUCT_TO_BAG, payload: id };
};

export const removeProductToBag = (id) => {
  return { type: REMOVE_PRODUCT_TO_BAG, payload: id };
};

export const clearFilter = () => {
  return { type: CLEAR_FILTER, payload: null };
};

export const setFilterProducts = (data) => {
  return { type: FILTER_PRODUCTS, payload: data };
};

export const setOrderProducts = (data) => {
  return { type: ORDER_PRODUCTS, payload: data };
};
