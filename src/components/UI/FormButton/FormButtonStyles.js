import styled from "styled-components";
import { Button as FormButton } from "reactstrap";

export const Button = styled(FormButton)`
	width: 100%;
`;

export const ButtonControl = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	margin-right: 5px;

	:last-child {
		margin-right: 0;
	}
`;
