// npm
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
// firebase
import { createDocument } from "../firebase/firestore";
import { createFile } from "../firebase/cloudStorage";
// components
import CategoryForm from "../components/CategoryForm";
import Loader from "../components/Loader";

export default function AdminCategory() {
  const { categories, setCategories } = useContext(AppContext);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(1);
  const [title, setTitle] = useState("");

  // properties
  const path = "Menu/Dishes/content";

  async function createItem(event) {
    event.preventDefault();
    setStatus(0);
    const payload = {
      title: title,
      description: description,
      imgURL: "",
    };

    // upload to cloudStorage
    const storagePath = "menu/";
    const id = uuidv4();
    const pathName = `${title}-${id}.png`;
    const fileName = `${storagePath}${pathName}`;
    const updatedImgURL = await createFile(fileName, file);

    // add url into object
    payload.imgURL = updatedImgURL;

    const documentId = await createDocument(path, payload);
    payload.id = documentId;
    setCategories([...categories, payload]);
    resetForm();
    setStatus(1);
  }

  function onImageSelect(event) {
    const file = event.target.files[0];
    if (file === null) return;
    setFile(file);
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setFile(null);
  }

  // safeguard
  if (status === 0) return <Loader />;

  return (
    <CategoryForm
      titleState={[title, setTitle]}
      describeState={[description, setDescription]}
      onImageSelect={onImageSelect}
      createItem={createItem}
    />
  );
}
