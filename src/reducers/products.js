import * as productsActions from "../actions/products";

export function products(state = [], action) {
	switch (action.type) {
		case productsActions.RECEIVE_PRODUCTS:
			return [...action.products];
		case productsActions.UPDATE_PRODUCTS:
			const updatedState = [...state].filter(
				(product) => product.id !== { ...action.updatedProducts }[0].id,
			);
			return [...action.updatedProducts, ...updatedState];
		case productsActions.DELETE_PRODUCTS:
			const newState = [...state].filter(
				(product) => product.id !== action.product.id,
			);
			return [...newState];
		default:
			return state;
	}
}

export function initialProductsAppears(state = false, action) {
	switch (action.type) {
		case productsActions.UPDATE_APPEAR_STATE:
			return (state = true);
		default:
			return state;
	}
}

export function storeProductInformation(state = {}, action) {
	switch (action.type) {
		case productsActions.STORE_PRODUCT_INFORMATION:
			return {
				...action.productInf,
			};
		default:
			return state;
	}
}
