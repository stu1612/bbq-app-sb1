import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUgCRHZmrWNXj5pvimKVEBCFA60KKub_Q",
  authDomain: "bbq-app-sb1.firebaseapp.com",
  projectId: "bbq-app-sb1",
  storageBucket: "bbq-app-sb1.appspot.com",
  messagingSenderId: "606460872244",
  appId: "1:606460872244:web:c75e4d82c8c6606a436c61",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { firestore, storage };
