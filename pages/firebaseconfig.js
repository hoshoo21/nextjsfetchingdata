import { initializeApp } from 'firebase/app';
import { firestore } from 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD8xdwr72g5ebkxr5dQVCxfg0pl78mE4yw",
    authDomain: "reactproj-f9640.firebaseapp.com",
    projectId: "reactproj-f9640",
    storageBucket: "reactproj-f9640.appspot.com",
    messagingSenderId: "598951432365",
    appId: "1:598951432365:web:e1989f7f59283691f27624"
};

const appconfig = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
