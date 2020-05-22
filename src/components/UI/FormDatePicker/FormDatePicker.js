import React from "react";
import { getIn } from "formik";
import { Label } from "reactstrap";

import {
	DatePickerContainer,
	DatePicker,
	FormErrorText,
} from "./FormDatePickerStyles";

const FormDatePicker = ({ form: { errors, touched }, field, ...props }) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);

	const isError = !!error && !!touch;
	return (
		<DatePickerContainer>
			<Label for={props.id}>{props.label}</Label>
			<DatePicker {...props} {...field} error={`${isError}`} type="date" />
			{error && touch && <FormErrorText>{error}</FormErrorText>}
		</DatePickerContainer>
	);
};

export default FormDatePicker;
