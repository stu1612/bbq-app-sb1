// npm
import { createContext, useState, useEffect } from "react";
// firebase
import { readCollection, deleteDocument } from "../firebase/firestore";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);

  const CategoryPath = "Menu/Dishes/content/";

  useEffect(() => {
    async function loadCategories(path) {
      const itemsData = await readCollection(path);
      setCategories(itemsData);
      setStatus(1);
    }
    loadCategories(CategoryPath);
  }, []);

  async function deleteCategoryItem(id) {
    await deleteDocument(CategoryPath, id);
    const clonedArray = [...categories];
    const deleteItem = clonedArray.filter((item) => item.id !== id);
    return setCategories(deleteItem);
  }

  return (
    <AppContext.Provider
      value={{ categories, setCategories, status, deleteCategoryItem }}
    >
      {children}
    </AppContext.Provider>
  );
}
