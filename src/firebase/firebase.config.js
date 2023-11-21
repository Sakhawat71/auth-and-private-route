import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwvYaSpG9Q7NT_wVoKreQ5tYnWd0nzgcA",
  authDomain: "auth-and-private-route-71.firebaseapp.com",
  projectId: "auth-and-private-route-71",
  storageBucket: "auth-and-private-route-71.appspot.com",
  messagingSenderId: "692595446139",
  appId: "1:692595446139:web:2e6b3beedb6a14cc71adde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;