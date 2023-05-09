// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAn67n1ULjNBlxGxzfQFOwmavZvT_y0lTY",
  // authDomain: "cloudeverythingtry.firebaseapp.com",
  // projectId: "cloudeverythingtry",
  // storageBucket: "cloudeverythingtry.appspot.com",
  // messagingSenderId: "12400884359",
  // appId: "1:12400884359:web:6a32f174b8c94536245622",
  // measurementId: "G-RVJLXR5BF5"
  apiKey: "AIzaSyBJRUshEhXQzL3tSf5TFLnG05YOcdWrYFM",
  authDomain: "firebassobatnumber.firebaseapp.com",
  projectId: "firebassobatnumber",
  storageBucket: "firebassobatnumber.appspot.com",
  messagingSenderId: "687749980576",
  appId: "1:687749980576:web:4634c670bc1f9d93d784c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
