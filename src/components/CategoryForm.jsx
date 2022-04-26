// components
import InputField from "./InputField";
import InputFile from "./InputFile";
// files
import formField from "../data/categoryInput.json";
import validateString from "../scripts/validateString";

export default function CategoryForm({
  titleState,
  describeState,
  createItem,
  onImageSelect,
}) {
  const [title, setTitle] = titleState;
  const [description, setDescription] = describeState;
  return (
    <div className="form">
      <form onSubmit={createItem}>
        <InputField
          setup={formField.title}
          state={[title, setTitle]}
          validation={validateString}
        />
        <InputField
          setup={formField.description}
          state={[description, setDescription]}
          validation={validateString}
        />
        <InputFile onImageSelect={onImageSelect} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
