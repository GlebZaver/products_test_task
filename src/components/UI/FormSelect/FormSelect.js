import React, { memo } from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import {
	SelectWrapper,
	selectStyles,
	SelectLabel,
	Selector,
	FormErrorText,
} from "./FormSelectStyles";

const FormSelect = ({
	field,
	form: { errors, touched, setFieldTouched, setFieldValue },
	id,
	label,
	isSearchable,
	selectOptions,
	isMulti,
	oldProductData,
}) => {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);

	const isError = !!error && !!touch;

	const oldSelectOptions = oldProductData.map((optionData) => {
		return {
			value: optionData.id,
			label: optionData.name,
		};
	});

	const onChangeHandler = (data) => {
		isMulti
			? setFieldValue(
					field.name,
					data !== null ? data.map((optionObject) => optionObject.value) : [],
			  )
			: setFieldValue(field.name, data.value);
	};

	const customTouchedHandler = () => setFieldTouched(field.name, true);

	return (
		<SelectWrapper>
			<SelectLabel for={id}>{label}</SelectLabel>
			<Selector
				{...field}
				value={
					selectOptions && field.value
						? selectOptions.find((option) => option.value === field.value)
						: []
				}
				options={selectOptions}
				placeholder="Select Categories"
				isMulti={isMulti}
				defaultValue={[...oldSelectOptions]}
				styles={selectStyles}
				isError={isError}
				isSearchable={isSearchable}
				onChange={onChangeHandler}
				blurInputOnSelect={false}
				onBlur={customTouchedHandler}
			/>
			{error && touch && <FormErrorText>{error}</FormErrorText>}
		</SelectWrapper>
	);
};

FormSelect.defaultProps = {
	isSearchable: true,
	isMulti: false,
	oldProductData: [],
	id: "",
};

FormSelect.propTypes = {
	label: PropTypes.string.isRequired,
	selectOptions: PropTypes.array.isRequired,
	isSearchable: PropTypes.bool,
	isMulti: PropTypes.bool,
	oldProductData: PropTypes.array,
	id: PropTypes.string,
};

export default memo(FormSelect);
