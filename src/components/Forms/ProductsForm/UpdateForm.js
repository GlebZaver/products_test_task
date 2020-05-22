import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateProductsBox } from "../../../actions/products";

import ProductsForm from "./ProductsForm";

class UpdateForm extends Component {
	updateClickHandler = (data) => {
		const { history } = this.props;
		const { dispatch } = this.props;
		const { productData } = this.props;

		const updatedDataNormalizer = () => {
			if (data.rating > 8) {
				data.featured = true;
			}
			return {
				...productData,
				...data,
			};
		};

		const updatedData = updatedDataNormalizer();

		dispatch(updateProductsBox([updatedData]));
		history.push("/");
	};

	render() {
		const { productData } = this.props;

		return (
			<>
				<ProductsForm
					submitFormEvent={this.updateClickHandler}
					color="success"
					text="Save Changes"
					oldData={productData}
					formTitle="Update Product"
				/>
			</>
		);
	}
}

UpdateForm.defaultProps = {
	productData: {},
};

UpdateForm.propTypes = {
	productData: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		productData: state.productInformation,
	};
};

export default connect(mapStateToProps)(UpdateForm);
