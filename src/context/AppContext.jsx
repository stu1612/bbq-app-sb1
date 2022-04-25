// npm
import { createContext, useState } from "react";
// firebase
import { readCollection } from "../firebase/firestore";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0);

  async function loadData(path) {
    const itemsData = await readCollection(path);
    setCategories(itemsData);
    setStatus(1);
  }
  return (
    <AppContext.Provider value={{ categories, status, loadData }}>
      {children}
    </AppContext.Provider>
  );
}
