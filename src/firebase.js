import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAccb9FennZhWBBySYCiNOmwp4m92tHTH0",
    authDomain: "linkedin-clone-14f08.firebaseapp.com",
    projectId: "linkedin-clone-14f08",
    storageBucket: "linkedin-clone-14f08.appspot.com",
    messagingSenderId: "163394021985",
    appId: "1:163394021985:web:6b272761f0405c1a8b5820",
    measurementId: "G-D975HKYZ92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };