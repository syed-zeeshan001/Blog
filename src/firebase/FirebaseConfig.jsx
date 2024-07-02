// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdnExnudiI_I5hR0shi-XkLscdXA5Vy1g",
    authDomain: "myblog-b37f4.firebaseapp.com",
    projectId: "myblog-b37f4",
    storageBucket: "myblog-b37f4.appspot.com",
    messagingSenderId: "1074739577823",
    appId: "1:1074739577823:web:4d0517191f2e881683ba6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {fireDb, auth, storage}