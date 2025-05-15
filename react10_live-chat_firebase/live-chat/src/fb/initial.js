import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZS_eTa-QzV-YV18rAFzH_Zb4_iGnPhXM",
  authDomain: "live-chat-3486a.firebaseapp.com",
  projectId: "live-chat-3486a",
  storageBucket: "live-chat-3486a.firebasestorage.app",
  messagingSenderId: "37217952880",
  appId: "1:37217952880:web:a7c03323e38e4236b480b5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app) //для работы с firestore database
const auth = getAuth(app) //для рабоыт с авторизацией

export {
  app,
  db,
  auth
}