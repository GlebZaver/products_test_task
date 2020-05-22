import React from "react";
import { getIn } from "formik";
import { Label } from "reactstrap";

import {
	FormErrorText,
	TextField,
	TextFieldContainer,
} from "./FormTextFieldStyle";

const FormTextField = ({ field, form: { errors, touched }, ...props }) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);

	const isError = !!error && !!touch;

	return (
		<TextFieldContainer>
			<Label for={props.id}>{props.label}</Label>
			<TextField {...field} {...props} error={`${isError}`} type="text" />
			{error && touch && <FormErrorText>{error}</FormErrorText>}
		</TextFieldContainer>
	);
};

export default FormTextField;
