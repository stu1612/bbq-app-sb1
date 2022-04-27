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
  const {
    name,
    price,
    productInfo,
    file,
    setFile,
    recipes,
    optionValue,
    resetForm,
  } = useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(1);
  // property
  const path = `Menu/Dishes/content/${optionValue}/content`;

  async function createItem(event) {
    event.preventDefault();
    setStatus(0);

    const payload = {
      name: name,
      description: productInfo,
      price: price,
      recipes: recipes,
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

  // safeguard
  if (status === 0) return <Loader />;

  return <ProductForm createItem={createItem} onImageSelect={onImageSelect} />;
}
