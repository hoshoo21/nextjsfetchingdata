import { initializeApp } from 'firebase/app';
import { firestore } from 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "",
    authDomain: "reactproj-f9640.firebaseapp.com",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const appconfig = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
