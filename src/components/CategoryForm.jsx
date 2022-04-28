// npm
import { useContext } from "react";
// components
import InputField from "./InputField";
import InputFile from "./InputFile";
import TextArea from "./TextArea";
// files
import { AppContext } from "../context/AppContext";
import formField from "../data/categoryInput.json";
import validateString from "../scripts/validateString";

export default function CategoryForm({ createItem, onImageSelect }) {
  const { title, setTitle, categoryInfo, setCategoryInfo } =
    useContext(AppContext);
  return (
    <div className="contact-form">
      <form onSubmit={createItem} className="admin-form">
        <InputField
          setup={formField.title}
          state={[title, setTitle]}
          validation={validateString}
        />
        <TextArea
          setup={formField.description}
          state={[categoryInfo, setCategoryInfo]}
          validation={validateString}
        />
        <InputFile onImageSelect={onImageSelect} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
