import { collection, query, where, getDocs, getDoc, updateDoc, deleteDoc ,doc} from 'firebase/firestore';
import {db} from '../../config';


const PARTNERS_TABLE = 'partners';
//update metada if firestore
  export const ApproveMerchant = async (merchantId) => {
    const q = query(collection(db, PARTNERS_TABLE), where("id", "==", merchantId));
    const querySnapshot = await getDocs(q);
    try {
      querySnapshot.forEach(async (res) => {
        // doc.id() id for document
        const que = doc(collection(db, PARTNERS_TABLE), res.id)
       const response =  await updateDoc(que,
          {
            approved: true,
          }
        )

	  return response;
      });
    } catch (e) {
      console.log('error==>', e)
    }
  }




export const fetchMechants = async () => {
	const q = query(collection(db, PARTNERS_TABLE));

	const querySnapshot = await getDocs(q);
	const mainData = [];
	querySnapshot.forEach(doc => {
		mainData.push(doc.data());
	});

	return mainData;
};

