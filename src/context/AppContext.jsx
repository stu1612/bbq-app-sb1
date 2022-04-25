// npm
import { createContext, useState, useEffect } from "react";
// firebase
import { readCollection } from "../firebase/firestore";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);

  const CategoryPath = "Menu/Dishes/content";

  useEffect(() => {
    async function loadCategories(path) {
      const itemsData = await readCollection(path);
      setCategories(itemsData);
      setStatus(1);
    }
    loadCategories(CategoryPath);
  }, []);

  return (
    <AppContext.Provider value={{ categories, status }}>
      {children}
    </AppContext.Provider>
  );
}
