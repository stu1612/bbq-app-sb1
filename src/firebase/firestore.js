// files
import { getDoc, doc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "./firebase";

// CREATE

// READ
export async function readDocument(path, id) {
  const documentPath = doc(firestore, path, id);
  const document = await getDoc(documentPath);
  return document.data();
}

export async function readCollection(path) {
  const collectionPath = collection(firestore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return documents;
}

// DELETE
