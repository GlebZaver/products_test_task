import React from "react";
import { Field, Formik } from "formik";
import PropTypes from "prop-types";

import {
	textFieldsData,
	datePickerData,
	categoriesSelectData,
	productsFormSchema,
	productsInitialValues,
} from "./formsData";

import {
	FormTextField,
	FormDatePicker,
	FormSelect,
	FormCheckbox,
	FormButton,
} from "../../UI";

import {
	Form,
	FormButtonContainer,
	FieldsWrapper,
	FormButtonControl,
	FormTitle,
} from "./ProductsFormStyle";

const ProductsForm = ({ color, text, submitFormEvent, oldData, formTitle }) => {
	const handleSubmitButton = (data) => {
		submitFormEvent(data);
	};

	const textFields = Object.keys(textFieldsData).map((fieldName) => {
		return (
			<Field
				key={`fields-data-${fieldName}`}
				component={FormTextField}
				id={fieldName}
				name={fieldName}
				label={textFieldsData[fieldName]}
				placeholder="Enter"
			/>
		);
	});

	const datePickerFields = Object.keys(datePickerData).map((datePickerName) => {
		return (
			<Field
				key={`datepicker-data-${datePickerName}`}
				component={FormDatePicker}
				id={datePickerName}
				name={datePickerName}
				label={datePickerData[datePickerName]}
			/>
		);
	});

	return (
		<Formik
			enableReinitialize
			initialValues={productsInitialValues(oldData)}
			onSubmit={handleSubmitButton}
			validationSchema={productsFormSchema}
		>
			{({ handleSubmit, isValid }) => (
				<Form onSubmit={handleSubmit}>
					<FormTitle>{formTitle}</FormTitle>
					<FieldsWrapper>
						{textFields}
						{datePickerFields}
						<Field
							id="categories"
							name="categories"
							label="Categories*"
							component={FormSelect}
							selectOptions={categoriesSelectData}
							isMulti={true}
							oldProductData={oldData.categories}
						/>
					</FieldsWrapper>
					<Field
						component={FormCheckbox}
						id="featured"
						name="featured"
						label="Featured"
						oldProductData={oldData}
					/>
					<FormButtonContainer>
						<FormButtonControl>
							<FormButton disabled={!isValid} color={color} text={text} />
						</FormButtonControl>
					</FormButtonContainer>
				</Form>
			)}
		</Formik>
	);
};

ProductsForm.defaultProps = {
	text: "Submit",
	color: "primary",
	oldData: {},
	formTitle: "",
};

ProductsForm.propTypes = {
	submitFormEvent: PropTypes.func.isRequired,
	text: PropTypes.string,
	color: PropTypes.string,
	oldData: PropTypes.object,
	formTitle: PropTypes.string,
};

export default ProductsForm;
