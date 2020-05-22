import { combineReducers } from "redux";
import { categories } from "./categories";
import {
	products,
	initialProductsAppears,
	storeProductInformation,
} from "./products";

export default combineReducers({
	categories,
	products,
	initialProductsAppears,
	productInformation: storeProductInformation,
});
