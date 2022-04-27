// npm
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function SelectField({ state }) {
  const [getter, setter] = state;
  const { categories } = useContext(AppContext);

  useEffect(() => {
    setter(categories[0].id);
  }, [categories, setter]);

  const options = categories.map((item) => (
    <option value={item.id} key={item.id}>
      {item.title}
    </option>
  ));

  return (
    <select value={getter} onChange={(event) => setter(event.target.value)}>
      {options}
    </select>
  );
}
