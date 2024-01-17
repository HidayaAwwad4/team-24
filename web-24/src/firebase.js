import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtNv4sfBcgH_9ycnc0hHl-XVs-2pUrLtY",
  authDomain: "webb-7a4d3.firebaseapp.com",
  databaseURL: "https://webb-7a4d3-default-rtdb.firebaseio.com",
  projectId: "webb-7a4d3",
  storageBucket: "webb-7a4d3.appspot.com",
  messagingSenderId: "973496210939",
  appId: "1:973496210939:web:719e6e7b4739f54a9e275e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, database, storage };
export default getFirestore(app);