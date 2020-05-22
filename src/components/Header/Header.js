import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper, CreateProductLink } from "./HeaderStyles";

const Header = ({ name, clicked }) => (
	<Fragment>
		<HeaderWrapper>
			<h2 onClick={clicked} className="h3">
				{name}
			</h2>
			<CreateProductLink exact to="/createProducts">
				Create New Product >
			</CreateProductLink>
		</HeaderWrapper>
		<hr />
	</Fragment>
);

Header.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Header;
