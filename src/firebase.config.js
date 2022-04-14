import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA95dvLone7ZSZ_qfduq1Ix65pDzxZnRCA",
  authDomain: "restaurantapp-96a8f.firebaseapp.com",
  databaseURL: "https://restaurantapp-96a8f-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-96a8f",
  storageBucket: "restaurantapp-96a8f.appspot.com",
  messagingSenderId: "1065396679912",
  appId: "1:1065396679912:web:1d09d7465eb44377f9455d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
