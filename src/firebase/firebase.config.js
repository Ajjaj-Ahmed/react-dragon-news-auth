// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1IXlLOly70Cc46p47MZoynTkQH-ezK_A",
  authDomain: "dragon-news-auth-2f3c1.firebaseapp.com",
  projectId: "dragon-news-auth-2f3c1",
  storageBucket: "dragon-news-auth-2f3c1.appspot.com",
  messagingSenderId: "133744257510",
  appId: "1:133744257510:web:931a260ee23fc9a5e88e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;