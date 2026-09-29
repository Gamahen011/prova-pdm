import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {

  apiKey: "AIzaSyCBZtGmbQED6n0myPz73lPjEufyUESNQno",

  authDomain: "mural-firebase-db10e.firebaseapp.com",

  databaseURL: "https://mural-firebase-db10e-default-rtdb.firebaseio.com",

  projectId: "mural-firebase-db10e",

  storageBucket: "mural-firebase-db10e.firebasestorage.app",

  messagingSenderId: "145208053649",

  appId: "1:145208053649:web:5c8993ec2640df2fe99430"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
