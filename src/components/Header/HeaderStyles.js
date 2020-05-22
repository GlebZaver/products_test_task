import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors, space } from "../../styles";

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const CreateProductLink = styled(NavLink)`
	color: ${colors.BRAND_COLOR};
	margin-left: ${space.XS};
	font-size: 18px;
	text-decoration: none;
	cursor: pointer;
	:hover {
		color: ${colors.BRAND_COLOR_HOVER};
		text-decoration: none;
	}
`;
