import styled from "styled-components";
import Select from "react-select";
import { Label } from "reactstrap";

import { colors, space } from "../../../styles";

export const SelectWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	margin-bottom: 15px;
`;

export const selectStyles = {
	container: (styles) => ({
		...styles,
		width: "100%",
		margin: "0",
		marginTop: `${space.XXS}`,
	}),
	control: (styles) => ({
		...styles,
		boxShadow: "none",
		outline: "none",
		borderColor: `${colors.FORMS_BORDER}`,
		"&:hover, &:focus, &:checked, &:enabled, &:active, &:focus-within": {
			borderColor: `${colors.FORMS_BORDER}`,
			cursor: "pointer",
		},
	}),
	indicatorSeparator: (styles) => ({
		...styles,
		width: "0",
	}),
	dropdownIndicator: (styles) => ({
		...styles,
		color: `${colors.PRIMARY}`,
	}),
	option: (styles, { isDisabled, isFocused, isSelected }) => ({
		...styles,
		backgroundColor: isDisabled
			? null
			: isSelected
			? `${colors.OUTLINES}`
			: isFocused
			? `${colors.WHITE}`
			: null,
		"&:hover, &:focus, &:checked, &:enabled, &:active, &:focus-within": {
			backgroundColor: `${colors.OUTLINES}`,
			color: `${colors.PRIMARY}`,
		},
		cursor: "pointer",
	}),
	multiValue: (styles) => ({
		...styles,
		cursor: "pointer",
	}),
};

export const Selector = styled(Select)`
	.css-aorvbg-control {
		border: 1px solid
			${(props) => (props.isError ? colors.ERROR : colors.FORMS_BORDER)};
		&:hover,
		&:focus,
		&:checked,
		&:enabled,
		&:active,
		&:focus-within {
			border: 1px solid
				${(props) => (props.isError ? colors.ERROR : colors.FORMS_BORDER)};
		}
	}
`;

export const FormErrorText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${space.SM};
	padding-top: ${space.XXS};
	color: ${colors.ERROR};
`;

export const SelectLabel = styled(Label)`
	margin: 0;
`;
