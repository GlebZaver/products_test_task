import React, { memo } from "react";
import PropTypes from "prop-types";

import { Button, ButtonControl } from "./FormButtonStyles";

const FormButton = ({ text, color, click, disabled }) => {
	return (
		<ButtonControl>
			<Button onClick={click} color={color} disabled={disabled}>
				{text}
			</Button>
		</ButtonControl>
	);
};

FormButton.defaultProps = {
	text: "Submit",
	color: "primary",
	disabled: false,
};

FormButton.propTypes = {
	click: PropTypes.func,
	text: PropTypes.string,
	color: PropTypes.string,
	disabled: PropTypes.bool,
};

export default memo(FormButton);
