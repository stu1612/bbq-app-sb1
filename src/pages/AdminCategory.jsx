// npm
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
// data
import formField from "../data/categoryInput.json";
// firebase
import { createDocument } from "../firebase/firestore";
import Loader from "../components/Loader";

export default function CategoryForm() {
  const { categories, setCategories } = useContext(AppContext);
  const [status, setStatus] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );

  // properties
  const path = "Menu/Dishes/content";

  async function createItem(event) {
    event.preventDefault();
    setStatus(0);
    const payload = {
      title: title,
      description: description,
      imgURL: imgURL,
    };
    const documentId = await createDocument(path, payload);
    payload.id = documentId;
    setCategories([...categories, payload]);
    resetForm();
    setStatus(1);
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setImgURL("");
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
        <label>
          Image:
          <input
            type="text"
            accept="image/png, image/jpg"
            value={imgURL}
            onChange={(event) => setImgURL(event.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
