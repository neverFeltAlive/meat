import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvTmVx1BWh0a9F64pdLiq-U3kYyAN3RCQ",
    authDomain: "butcher-shop33.firebaseapp.com",
    projectId: "butcher-shop33",
    storageBucket: "butcher-shop33.appspot.com",
    messagingSenderId: "768578700859",
    appId: "1:768578700859:web:cb254cfc28085120633e1e",
    measurementId: "G-606E8ZLM9D"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
