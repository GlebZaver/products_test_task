import styled from "styled-components";
import { Input } from "reactstrap";

import { colors, space } from "../../../styles";

export const TextFieldContainer = styled.div`
	display: flex;
	flex: 0 1 calc(50% - 15px);
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	margin-right: 15px;
	margin-bottom: 15px;
	:nth-child(2n) {
		margin-right: 0;
	}
`;

export const TextField = styled(Input)`
	width: 100%;
	border-color: ${(props) =>
		props.error === "true" ? `${colors.ERROR}` : `${colors.FORMS_BORDER}`};
	:focus {
		box-shadow: none;
		border-color: ${(props) =>
			props.error === "true" ? `${colors.ERROR}` : `${colors.FORMS_BORDER}`};
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
