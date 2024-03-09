// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIObNL64f1h0weyDfni6jsB8zbcEQVweM",
  authDomain: "steeps-and-steps-corporate.firebaseapp.com",
  projectId: "steeps-and-steps-corporate",
  storageBucket: "steeps-and-steps-corporate.appspot.com",
  messagingSenderId: "798714885007",
  appId: "1:798714885007:web:4e3a4a037258a07d1251fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// console.log(auth);
export default app;



