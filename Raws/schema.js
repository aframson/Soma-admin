// unique random string numbers
const randomString = () => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

// get todays date
const getDate = () => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();
	return `${yyyy}-${mm}-${dd}`;
};

export const PRODUCT_NAME = 'partners';

export const PRODUCT_TABLE = (
	institution,
	businessName,
	password,
	username,
	email,
	telephone,
	establishment,
) => {
	return {
		id: randomString(),
		institution,
		businessName,
		password,
		username,
		email,
		telephone,
		establishment,
		approved: false,
		metaData: {},
		storeData: [],
		orderList: [],
		readyList: [],
		storeLogo: '',
		storeBanner: '',
		description: '',
		paymentSetup: false,
		storeSetup: false,
		isOpen: false,
		createdAt: getDate(),
	};
};
