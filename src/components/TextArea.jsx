import { useState } from "react";
// files
import onValidate from "../scripts/validateInput";

export default function TextArea({ setup, state, validation }) {
  const { label, placeholder, required } = setup;
  const [getter, setter] = state;
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="text-container">
      <label>
        {label}
        <textarea
          value={getter}
          onChange={(event) => setter(event.target.value)}
          onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
          placeholder={placeholder}
          required={required}
          className="textarea"
        />
        <small className="error">{errorMessage}</small>
      </label>
    </div>
  );
}
