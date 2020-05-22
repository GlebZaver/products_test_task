import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import {
	Checbox,
	ChecboxControl,
	ChecboxLabel,
	FormErrorText,
} from "./FormCheckboxStyles";

const FormCheckbox = ({
	form: { errors, touched },
	oldProductData,
	field,
	...props
}) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);

	return (
		<ChecboxControl>
			<Checbox
				{...props}
				{...field}
				type="checkbox"
				checked={field.value === true}
			/>
			<ChecboxLabel for={props.id}>{props.label}</ChecboxLabel>
			{error && touch && <FormErrorText>{error}</FormErrorText>}
		</ChecboxControl>
	);
};

FormCheckbox.defaultProps = {
	oldProductData: {},
};

FormCheckbox.propTypes = {
	oldProductData: PropTypes.object,
};

export default FormCheckbox;
