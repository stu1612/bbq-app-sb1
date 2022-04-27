// npm
import { createContext, useState, useEffect } from "react";
// firebase
import { readCollection, deleteDocument } from "../firebase/firestore";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);
  // product form
  const [recipe_1, setRecipe_1] = useState("");
  const [recipe_2, setRecipe_2] = useState("");
  const [recipe_3, setRecipe_3] = useState("");
  const [recipe_4, setRecipe_4] = useState("");
  const [recipe_5, setRecipe_5] = useState("");

  const CategoryPath = "Menu/Dishes/content/";

  // useEffect(() => {
  //   async function loadCategories(path) {
  //     const itemsData = await readCollection(path);
  //     setCategories(itemsData);
  //     setStatus(1);
  //   }
  //   loadCategories(CategoryPath);
  // }, []);

  // async function loadCategories(path, setter, getter) {
  //   const itemsData = await readCollection(path);
  //       setter(itemsData);
  //       setStatus(1);
  //     }
  //     loadCategories(CategoryPath);
  // }

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

  function resetRecipes() {
    setRecipe_1("");
    setRecipe_2("");
    setRecipe_3("");
    setRecipe_4("");
    setRecipe_5("");
  }

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        status,
        deleteCategoryItem,
        products,
        setProducts,
        loadProducts,
        deleteProductItem,
        recipe_1,
        recipe_2,
        recipe_3,
        recipe_4,
        recipe_5,
        setRecipe_1,
        setRecipe_2,
        setRecipe_3,
        setRecipe_4,
        setRecipe_5,
        resetRecipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
