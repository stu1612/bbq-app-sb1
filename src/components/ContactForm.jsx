// npm
import { useState } from "react";
// files
import InputField from "./InputField";
import formField from "../data/contactInput.json";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  return (
    <form className="contact-form">
      <InputField setup={formField.name} state={[name, setName]} />
      <InputField setup={formField.date} state={[date, setDate]} />
      <InputField setup={formField.time} state={[time, setTime]} />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
