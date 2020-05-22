import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { Container } from "reactstrap";
import { chunk } from "lodash";

import { ProductsRow, ProductsCol } from "./ProductStyles";

const ProductList = ({ products }) => {
	const productsGroups = chunk(products, 3);

	return (
		<Container>
			{productsGroups.map((productsGroup, index) => (
				<ProductsRow key={index} className="mb-5">
					{productsGroup.map((product) => (
						<ProductsCol style={{}} sm="4" key={product.id}>
							<Product product={product} />
						</ProductsCol>
					))}
				</ProductsRow>
			))}
		</Container>
	);
};

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
};

export default ProductList;
