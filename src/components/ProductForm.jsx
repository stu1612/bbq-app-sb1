// npm
import { useState } from "react";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
// data
import formField from "../data/productInput.json";
// firebase
import { createDocument } from "../firebase/firestore";
import Loader from "./Loader";

export default function ProductForm({ optionValue, setOptionValue }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [recipe, setRecipe] = useState([]);
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);

  // property
  const path = `dishes/dishes/content/${optionValue}/content`;

  async function createItem(event) {
    event.preventDefault();
    setStatus(0);
    const payload = {
      name: name,
      description: description,
      price: price,
      recipe: recipe,
      imgURL: imgURL,
    };
    const documentId = await createDocument(path, payload);
    payload.id = documentId;
    setProducts([...products, payload]);
    resetForm();
    setStatus(1);
  }

  function resetForm() {
    setName("");
    setDescription("");
    setPrice(0);
    setRecipe([]);
    setImgURL("");
  }

  // safegaurd
  if (status === 0) return <Loader />;

  return (
    <div className="form">
      <form onSubmit={createItem}>
        <select
          value={optionValue}
          onChange={(event) => setOptionValue(event.target.value)}
        >
          {optionValue}
        </select>
        <InputField
          setup={formField.name}
          state={[name, setName]}
          validation={validateString}
        />
        <InputField
          setup={formField.description}
          state={[description, setDescription]}
          validation={validateString}
        />
        <InputField
          setup={formField.price}
          state={[price, setPrice]}
          validation={validateNumber}
        />
        <InputField
          setup={formField.recipe}
          state={[recipe, setRecipe]}
          validation={validateString}
        />
        <label>
          Image:
          <input
            type="text"
            accept="image/png, image/jpg"
            value={imgURL}
            onChange={(event) => setImgURL(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
