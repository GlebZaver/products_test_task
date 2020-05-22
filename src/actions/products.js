import { productApi } from "../gateways/ProductApi";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";
export const UPDATE_APPEAR_STATE = "UPDATE_APPEAR_STATE";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const STORE_PRODUCT_INFORMATION = "STORE_PRODUCT_INFORMATION";

const requestProducts = () => ({
	type: REQUEST_PRODUCTS,
});

const receiveProducts = (json) => ({
	type: RECEIVE_PRODUCTS,
	products: json.map((product) => product),
});

export const storeProductInformation = (productInf) => ({
	type: STORE_PRODUCT_INFORMATION,
	productInf: productInf,
});

const updateAppearState = () => ({
	type: UPDATE_APPEAR_STATE,
});

const updateProducts = (productsData) => ({
	type: UPDATE_PRODUCTS,
	updatedProducts: productsData.map((product) => product),
});

export const deleteProducts = (productData) => ({
	type: DELETE_PRODUCTS,
	product: productData,
});

export const fetchProducts = () => (dispatch) => {
	dispatch(requestProducts());
	const json = productApi.getProducts();
	dispatch(receiveProducts(json));
};

export const updateProductsBox = (updatedProducts) => (dispatch) => {
	dispatch(updateProducts(updatedProducts));
	dispatch(updateAppearState());
};
