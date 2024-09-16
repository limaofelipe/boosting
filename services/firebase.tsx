import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCUXn_Qrg3cGY6vGj1tKuFf4De6ujXTcT0",
  authDomain: "boosting-c9732.firebaseapp.com",
  projectId: "boosting-c9732",
  storageBucket: "boosting-c9732.appspot.com",
  messagingSenderId: "509834690828",
  appId: "1:509834690828:web:6603ae0e413f90180e4929"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)