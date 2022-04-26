// npm
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
// data
import formField from "../data/categoryInput.json";
// firebase
import { createDocument } from "../firebase/firestore";
import { createFile } from "../firebase/cloudStorage";
// components
import Loader from "../components/Loader";
import InputFile from "../components/InputFile";

export default function CategoryForm() {
  const { categories, setCategories } = useContext(AppContext);
  const [status, setStatus] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

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
    <div className="form">
      <form onSubmit={createItem}>
        <InputField
          setup={formField.title}
          state={[title, setTitle]}
          validation={validateString}
        />
        <InputField
          setup={formField.description}
          state={[description, setDescription]}
          validation={validateString}
        />
        {/* <label>
          Image:
          <input
            type="text"
            accept="image/png, image/jpg"
            value={imgURL}
            onChange={(event) => setImgURL(event.target.value)}
            required
          />
        </label> */}
        <InputFile onImageSelect={onImageSelect} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
