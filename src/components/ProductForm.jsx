// npm
import { useContext } from "react";
// components
import InputField from "../components/InputField";
import TextArea from "./TextArea";
import SelectField from "./SelectField";
import InputFile from "./InputFile";
// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
import { AppContext } from "../context/AppContext";
// data
import formField from "../data/productInput.json";

export default function ProductForm({ createItem, onImageSelect }) {
  const {
    name,
    setName,
    recipes,
    setRecipes,
    price,
    setPrice,
    optionValue,
    setOptionValue,
    productInfo,
    setProductInfo,
  } = useContext(AppContext);
  return (
    <form onSubmit={createItem} className="form">
      <SelectField state={[optionValue, setOptionValue]} />
      <InputField
        setup={formField.name}
        state={[name, setName]}
        validation={validateString}
      />
      <InputField
        setup={formField.price}
        state={[price, setPrice]}
        validation={validateNumber}
      />
      <TextArea
        setup={formField.recipe}
        state={[recipes, setRecipes]}
        validation={validateString}
      />
      <TextArea
        setup={formField.description}
        state={[productInfo, setProductInfo]}
        validation={validateString}
      />
      <InputFile onImageSelect={onImageSelect} />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
