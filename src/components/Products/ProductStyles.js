import styled from "styled-components";
import { Row, Col } from "reactstrap";

import { space } from "../../styles";

export const ProductsRow = styled(Row)`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
`;

export const ProductsCol = styled(Col)`
	max-width: fit-content;
	margin-bottom: ${space.XS};
`;

export const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: max-content;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
