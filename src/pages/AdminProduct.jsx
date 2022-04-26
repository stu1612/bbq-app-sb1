// npm
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import Loader from "../components/Loader";
import ProductForm from "../components/ProductForm";
// files
import { AppContext } from "../context/AppContext";
// firebase
import { createDocument } from "../firebase/firestore";
import { createFile } from "../firebase/cloudStorage";

export default function AdminProduct() {
  const { resetRecipes, recipe_1, recipe_2, recipe_3, recipe_4, recipe_5 } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
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
    resetRecipes();
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
    setFile(null);
  }

  // safeguard
  if (status === 0) return <Loader />;

  return (
    <ProductForm
      nameState={[name, setName]}
      describeState={[description, setDescription]}
      priceState={[price, setPrice]}
      optionState={[optionValue, setOptionValue]}
      createItem={createItem}
      onImageSelect={onImageSelect}
    />
  );
}
