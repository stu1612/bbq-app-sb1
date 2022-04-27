// npm
import { createContext, useState } from "react";
// firebase
import { readCollection, deleteDocument } from "../firebase/firestore";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // product form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryInfo, setCategoryInfo] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [name, setName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [price, setPrice] = useState("0");
  const [recipes, setRecipes] = useState("");
  const [file, setFile] = useState(null);

  const CategoryPath = "Menu/Dishes/content/";

  async function loadProducts(path) {
    const itemsData = await readCollection(path);
    setProducts(itemsData);
  }

  async function deleteCategoryItem(id) {
    await deleteDocument(CategoryPath, id);
    const clonedArray = [...categories];
    const deleteItem = clonedArray.filter((item) => item.id !== id);
    return setCategories(deleteItem);
  }

  async function deleteProductItem(path, id) {
    await deleteDocument(path, id);
    const clonedArray = [...products];
    const deleteItem = clonedArray.filter((item) => item.id !== id);
    return setProducts(deleteItem);
  }

  function resetForm() {
    setTitle("");
    setCategoryInfo("");
    setName("");
    setPrice("0");
    setProductInfo("");
    setRecipes("");
    setFile(null);
  }

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        products,
        title,
        setTitle,
        name,
        setName,
        optionValue,
        setOptionValue,
        price,
        setPrice,
        recipes,
        setRecipes,
        file,
        setFile,
        description,
        setDescription,
        categoryInfo,
        setCategoryInfo,
        productInfo,
        setProductInfo,
        setProducts,
        loadProducts,
        deleteCategoryItem,
        deleteProductItem,
        resetForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
