import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js"; // Auth 

const firebaseConfig = {
  apiKey: "AIzaSyAog7bYunVaTxsYM5_o88bZ2oSArj65A6s",
  authDomain: "sallaltravels-418e6.firebaseapp.com",
  projectId: "sallaltravels-418e6",
  storageBucket: "sallaltravels-418e6.firebasestorage.app",
  messagingSenderId: "978111476506",
  appId: "1:978111476506:web:80612673a56d0bc6f832a3",
  measurementId: "G-H3JQLVWX8R"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);