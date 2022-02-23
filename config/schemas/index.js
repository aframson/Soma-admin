import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../../config';

const Perterns_Table = 'partners';

export const fetchMechants = async () => {
	const q = query(collection(db, Perterns_Table));

	const querySnapshot = await getDocs(q);
	const mainData = [];
	querySnapshot.forEach(doc => {
		mainData.push(doc.data());
	});

	return mainData;
};

export const getSpecificMechants = async ({merchantId}) => {
	const q = query(collection(db, Perterns_Table));

	const querySnapshot = await getDocs(q, merchantId);
	const mainData = [];
	querySnapshot.forEach(doc => {
		mainData.push(doc.data());
	});

	return mainData;
};
