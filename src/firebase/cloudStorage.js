// npm
import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytes } from "firebase/storage";
// files
import { storage } from "./firebase";

//methods
export async function createFile(filePath, file) {
  const fileReference = ref(storage, filePath);

  await uploadBytes(fileReference, file); // uploading a file to the server
  return await getDownloadURL(fileReference); // getting the URL
}
