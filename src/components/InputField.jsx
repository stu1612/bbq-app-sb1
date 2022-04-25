import { useState } from "react";
// files
import onValidate from "../scripts/validateInput";

export default function InputField({ setup, state, validation }) {
  const { label, placeholder, type, autoFocus, max, min, required } = setup;
  const [getter, setter] = state;
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <label>
      {label}
      <input
        type={type}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required={required}
        max={max}
        min={min}
        className="input"
      />
      <small className="error">{errorMessage}</small>
    </label>
  );
}
