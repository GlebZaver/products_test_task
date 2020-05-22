import styled from "styled-components";

import { colors, breakpoints, space } from "../../../styles";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 800px;
	padding: ${space.XS};
	margin: auto;
	background-color: ${colors.WHITE};
`;

export const FormTitle = styled.div`
	display: flex;
	align-self: flex-start;
	text-align: center;
	margin-bottom: ${space.XS};
	font-size: 18px;
	font-weight: bold;
	color: ${colors.FORM_TITLE};
`;

export const FieldsWrapper = styled.div`
	display: flex;
	flex: none;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;

	@media (min-width: ${breakpoints.SM}) {
		flex-direction: row;
	}
`;

export const FormButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	margin-top: ${space.XS};
`;

export const FormButtonControl = styled.div`
	display: flex;
	width: 100%;
	min-width: 60px;

	@media (min-width: ${breakpoints.SM}) {
		width: 315px;
	}
`;
