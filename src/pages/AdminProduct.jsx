// npm
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Loader from "../components/Loader";
import InputFile from "../components/InputFile";
// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
// data
import formField from "../data/productInput.json";
// firebase
import { createDocument } from "../firebase/firestore";
import { createFile } from "../firebase/cloudStorage";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [recipe_1, setRecipe_1] = useState("");
  const [recipe_2, setRecipe_2] = useState("");
  const [recipe_3, setRecipe_3] = useState("");
  const [recipe_4, setRecipe_4] = useState("");
  const [recipe_5, setRecipe_5] = useState("");
  const [file, setFile] = useState(null);
  const [optionValue, setOptionValue] = useState("");
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(1);

  // property
  const path = `Menu/Dishes/content/${optionValue}/content`;

  async function createItem(event) {
    event.preventDefault();
    setStatus(0);

    const payload = {
      name: name,
      description: description,
      price: price,
      recipe_1: recipe_1,
      recipe_2: recipe_2,
      recipe_3: recipe_3,
      recipe_4: recipe_4,
      recipe_5: recipe_5,
      imgURL: "",
    };

    // upload to cloudStorage
    const storagePath = "menu/products/";
    const id = uuidv4();
    const pathName = `${name}-${id}.png`;
    const fileName = `${storagePath}${pathName}`;
    const updatedImgURL = await createFile(fileName, file);

    // add url into object
    payload.imgURL = updatedImgURL;

    const documentId = await createDocument(path, payload);
    payload.id = documentId;
    setProducts([...products, payload]);
    resetForm();
    setStatus(1);
  }

  function onImageSelect(event) {
    const file = event.target.files[0];
    setFile(file);
  }

  function resetForm() {
    setName("");
    setDescription("");
    setPrice(0);
    setRecipe_1("");
    setRecipe_2("");
    setRecipe_3("");
    setRecipe_4("");
    setRecipe_5("");
    setFile(null);
  }

  // safeguard
  if (status === 0) return <Loader />;

  return (
    <div className="form">
      <form onSubmit={createItem}>
        <SelectField state={[optionValue, setOptionValue]} />
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
          setup={formField.recipe_1}
          state={[recipe_1, setRecipe_1]}
          validation={validateString}
        />
        <InputField
          setup={formField.recipe_2}
          state={[recipe_2, setRecipe_2]}
          validation={validateString}
        />
        <InputField
          setup={formField.recipe_3}
          state={[recipe_3, setRecipe_3]}
          validation={validateString}
        />
        <InputField
          setup={formField.recipe_4}
          state={[recipe_4, setRecipe_4]}
          validation={validateString}
        />
        <InputField
          setup={formField.recipe_5}
          state={[recipe_5, setRecipe_5]}
          validation={validateString}
        />
        <InputFile onImageSelect={onImageSelect} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
