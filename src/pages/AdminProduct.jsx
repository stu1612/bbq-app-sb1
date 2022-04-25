// npm
import { useState, useEffect } from "react";
// components
import ProductForm from "../components/ProductForm";
import Loader from "../components/Loader";
// firebase
import { readCollection } from "../firebase/firestore";

export default function AdminProduct() {
  const [optionValue, setOptionValue] = useState("");
  const [status, setStatus] = useState(0);

  // properties
  const path = "Menu/Dishes/content";

  // method
  useEffect(() => {
    async function loadData(path) {
      const itemsData = await readCollection(path);
      setOptionValue(itemsData);
      setStatus(1);
    }
    loadData(path);
  }, []);

  // safeguard
  if (status === 0) return <Loader />;
  if (status === 2) return <p>Error ..</p>;
  // if (dishes === undefined) return <ErrorMessage />;

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm optionValue={optionValue} setOptionValue={setOptionValue} />
    </div>
  );
}
