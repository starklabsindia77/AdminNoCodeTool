import React, { useState } from "react";
import { TextField } from "@material-ui/core";
const CustomInputComponent = ({ inputRef, ...rest }) => (
  <input ref={inputRef} {...rest} type="text" />
);
export default function InputField({ placeholder, label, variant }) {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <TextField
        variant={variant}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        color="primary"
        label={label}
        placeholder={placeholder || ""}
        InputProps={{
          inputComponent: CustomInputComponent,
        }}
      />
    </div>
  );
}
