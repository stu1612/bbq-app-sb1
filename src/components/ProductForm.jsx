// npm
import { useContext } from "react";
// components
import InputField from "../components/InputField";
import SelectField from "./SelectField";
import InputFile from "./InputFile";
// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
import { AppContext } from "../context/AppContext";
// data
import formField from "../data/productInput.json";

export default function ProductForm({
  optionState,
  nameState,
  describeState,
  priceState,
  createItem,
  onImageSelect,
}) {
  const {
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
  } = useContext(AppContext);
  const [name, setName] = nameState;
  const [description, setDescription] = describeState;
  const [price, setPrice] = priceState;
  const [optionValue, setOptionValue] = optionState;
  return (
    <form onSubmit={createItem} className="form">
      <SelectField state={[optionValue, setOptionValue]} />
      <InputField
        setup={formField.name}
        state={[name, setName]}
        validation={validateString}
      />
      <InputField
        setup={formField.description}
        state={[description, setDescription]}
        validation={validateString}
      />
      <InputField
        setup={formField.price}
        state={[price, setPrice]}
        validation={validateNumber}
      />
      <InputField
        setup={formField.recipe_1}
        state={[recipe_1, setRecipe_1]}
        validation={validateString}
      />
      <InputField
        setup={formField.recipe_2}
        state={[recipe_2, setRecipe_2]}
        validation={validateString}
      />
      <InputField
        setup={formField.recipe_3}
        state={[recipe_3, setRecipe_3]}
        validation={validateString}
      />
      <InputField
        setup={formField.recipe_4}
        state={[recipe_4, setRecipe_4]}
        validation={validateString}
      />
      <InputField
        setup={formField.recipe_5}
        state={[recipe_5, setRecipe_5]}
        validation={validateString}
      />
      <InputFile onImageSelect={onImageSelect} />
      <button type="submit">Submit</button>
    </form>
  );
}
