// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyApyGX8Cv4k4XJpLGrzSdhSbasHfPWKSWs',
	authDomain: 'soma-main-app.firebaseapp.com',
	projectId: 'soma-main-app',
	storageBucket: 'soma-main-app.appspot.com',
	messagingSenderId: '333586144986',
	appId: '1:333586144986:web:900c424f9a31f662444fe3',
	measurementId: 'G-2P04GWLHNV',
});

// Initialize Firebase
const db = getFirestore(firebaseApp);

export default db;
