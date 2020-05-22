import styled from "styled-components";
import { Input, Label } from "reactstrap";

import { colors, space } from "../../../styles";

export const ChecboxControl = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
`;

export const Checbox = styled(Input)`
	padding: 0;
	margin: 0;
	padding-right: 5px;
	position: static;
	height: ${space.XS};
	width: ${space.XS};
`;

export const ChecboxLabel = styled(Label)`
	margin: 0;
	padding: 0;
	padding-left: 5px;
`;

export const FormErrorText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${space.SM};
	padding-top: ${space.XXS};
	color: ${colors.ERROR};
`;
