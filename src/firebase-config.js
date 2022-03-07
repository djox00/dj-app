import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
    apiKey: "AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ",
    authDomain: "dj-app-342722.firebaseapp.com",
    projectId: "dj-app-342722",
    storageBucket: "dj-app-342722.appspot.com",
    messagingSenderId: "724508147686",
    appId: "1:724508147686:web:768f547051ea6216996027",
    measurementId: "G-1WG6GDZ69K"
  };

  const app = initializeApp(firebaseConfig); 

  export const auth = getAuth(app); 