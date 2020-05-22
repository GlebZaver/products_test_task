import React from "react";

import ProductsForm from "./ProductsForm";

const CreateForm = () => {
	const createClickHandler = () => {};

	return (
		<>
			<ProductsForm
				color="success"
				text="Create Product"
				formTitle="Create Product"
				submitFormEvent={createClickHandler}
			/>
		</>
	);
};

export default CreateForm;
