// npm
import { createContext, useState, useEffect } from "react";
// firebase
import { readCollection, deleteDocument } from "../firebase/firestore";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);

  const CategoryPath = "Menu/Dishes/content/";

  useEffect(() => {
    async function loadCategories(path) {
      const itemsData = await readCollection(path);
      setCategories(itemsData);
      setStatus(1);
    }
    loadCategories(CategoryPath);
  }, []);

  //   useEffect(() => {
  //     async function loadProducts(path) {
  //       const itemsData = await readCollection(path);
  //       setProducts(itemsData);
  //       setStatus(1);
  //     }
  //     loadProducts(path);
  //   }, []);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
