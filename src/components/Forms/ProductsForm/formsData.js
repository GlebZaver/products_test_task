import * as Yup from "yup";

//Validation schema
let getValidationDate = () => {
	let validationDate = new Date();
	validationDate.setDate(validationDate.getDate() + 30);
	return validationDate;
};

export const productsFormSchema = Yup.object().shape({
	name: Yup.string()
		.required("Name should not be empty")
		.max(200, "Name should not be more than 200 characters"),
	rating: Yup.number()
		.typeError("Rating accepts only numbers")
		.integer("Rating accepts only integers")
		.required("Rating should not be empty")
		.max(10, "Rating should not be more more than 10 characters"),
	categories: Yup.array()
		.min(1, "Сategories should contain at least 1 option")
		.max(5, "Сategories should not contain more than 5 options"),
	expirationDate: Yup.date().min(
		getValidationDate(),
		`The Expiration Date should not be less than 30 days since ${new Date().toLocaleDateString()}`,
	),
});

//Initial values
export const productsInitialValues = (oldData) => {
	return {
		name: oldData.name !== undefined ? oldData.name : "",
		brand: oldData.brand !== undefined ? oldData.brand : "",
		rating: oldData.rating !== undefined ? oldData.rating : "",
		itemsInStock:
			oldData.itemsInStock !== undefined ? oldData.itemsInStock : "",
		featured: oldData.featured !== undefined ? oldData.featured : false,
		categories:
			oldData.categories !== undefined
				? oldData.categories.map((optionObject) => optionObject.id)
				: [],
		receiptDate:
			oldData.receiptDate === null || oldData.receiptDate === undefined
				? ""
				: oldData.receiptDate,
		expirationDate:
			oldData.expirationDate === null || oldData.expirationDate === undefined
				? ""
				: oldData.expirationDate,
	};
};

//Forms Data
export const textFieldsData = {
	name: "Name*",
	brand: "Brand",
	rating: "Rating*",
	itemsInStock: "Items In Stock",
};

export const datePickerData = {
	receiptDate: "Receipt Date",
	expirationDate: "Expiration Date",
};

export const categoriesSelectData = [
	{
		value: 1,
		label: "TV & Home Cinema",
	},
	{
		value: 2,
		label: "Laptops",
	},
	{
		value: 3,
		label: "Watches",
	},
	{
		value: 4,
		label: "Headphones",
	},
	{
		value: 5,
		label: "Phones",
	},
	{
		value: 6,
		label: "Desktops",
	},
	{
		value: 7,
		label: "Monitors",
	},
	{
		value: 8,
		label: "Printers",
	},
	{
		value: 9,
		label: "Monitors",
	},
	{
		value: 10,
		label: "Camera & Photo",
	},
	{
		value: 11,
		label: "Audio & HiFi",
	},
];
