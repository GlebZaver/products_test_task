import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	ListGroup,
	ListGroupItem,
} from "reactstrap";

import {
	storeProductInformation,
	deleteProducts,
} from "../../actions/products";
import { FormButton } from "../UI";

import { ProductWrapper, ButtonsContainer } from "./ProductStyles";

const shortDateFormat = "MM/DD/YYYY";
const longDateFormat = "MM/DD/YYYY hh:mm a";

class Product extends React.Component {
	updateCard = () => {
		const { dispatch } = this.props;
		const { history } = this.props;
		const { product } = this.props;

		dispatch(storeProductInformation(product));
		history.push("/updateProducts");
	};

	deleteCard = () => {
		const { dispatch } = this.props;
		const { product } = this.props;

		dispatch(storeProductInformation(product));
		dispatch(deleteProducts(product));
	};

	render() {
		const { product } = this.props;
		const receiptDate = this.props.product.receiptDate
			? moment(this.props.product.receiptDate).format(shortDateFormat)
			: "-";
		const expirationDate = this.props.product.expirationDate
			? moment(this.props.product.expirationDate).format(shortDateFormat)
			: "-";
		const createdAt = this.props.product.createdAt
			? moment(this.props.product.createdAt).format(longDateFormat)
			: "-";

		return (
			<ProductWrapper>
				<Card>
					<CardBody>
						<CardTitle>{product.name}</CardTitle>
						<CardText tag="div">
							<ListGroup>
								<ListGroupItem>Brand: {product.brand}</ListGroupItem>
								<ListGroupItem>Rating: {product.rating}</ListGroupItem>
								<ListGroupItem>
									Featured: {product.featured ? "Yes" : "No"}
								</ListGroupItem>
								<ListGroupItem>
									Items In Stock: {product.itemsInStock}
								</ListGroupItem>
								<ListGroupItem>
									Categories:
									<ul>
										{product.categories.map((category) => (
											<li key={category.id}>{category.name}</li>
										))}
									</ul>
								</ListGroupItem>
								<ListGroupItem>Receipt Date: {receiptDate}</ListGroupItem>
								<ListGroupItem>Expiration Date: {expirationDate}</ListGroupItem>
								<ListGroupItem>Created At: {createdAt}</ListGroupItem>
							</ListGroup>
						</CardText>
					</CardBody>
				</Card>
				<ButtonsContainer>
					<FormButton
						click={this.deleteCard}
						color="danger"
						text="Delete Product"
					/>
					<FormButton
						click={this.updateCard}
						color="success"
						text="Update Product"
					/>
				</ButtonsContainer>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

export default withRouter(connect()(Product));
