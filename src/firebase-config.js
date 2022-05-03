import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCJycRR4xscscDM7BxxpDRhsG8Hj9141Fk",
  authDomain: "astrodj-34801.firebaseapp.com",
  databaseURL: "https://astrodj-34801-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "astrodj-34801",
  storageBucket: "astrodj-34801.appspot.com",
  messagingSenderId: "754213871767",
  appId: "1:754213871767:web:96fa5c83757fc136f609d2",
  measurementId: "G-CVEMXRYHJB"
};
  const app = initializeApp(firebaseConfig); 
export const database = getDatabase(app); 
  export const auth = getAuth(app); 