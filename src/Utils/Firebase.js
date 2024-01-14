// Api/Firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuBI14tQxi5zkYBLgtd0jBYWDb-BMP4iQ",
  authDomain: "dbtaka.firebaseapp.com",
  projectId: "dbtaka",
  storageBucket: "dbtaka.appspot.com",
  messagingSenderId: "173751724181",
  appId: "1:173751724181:web:ba8ac8904e0e4ac2f9139c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
