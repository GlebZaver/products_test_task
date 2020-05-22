import initialProductsData from "../mocks/products";

class ProductApi {
	getProducts = () => {
		return initialProductsData;
	};
}

export const productApi = new ProductApi();
