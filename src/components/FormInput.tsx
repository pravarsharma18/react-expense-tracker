import React from "react";

interface Props {
  label: string;
  extras?: object;
  inputType?: string;
  placeholder?: string;
  errors?: object;
}

const FormInput = ({
  label,
  inputType = "text",
  placeholder = "",
  extras,
  errors,
}: Props) => {
  return (
    <>
      <label htmlFor={label.toLowerCase()} className="form-label">
        {label}
      </label>
      <input
        type={inputType}
        id={label.toLowerCase()}
        placeholder={placeholder}
        className="form-control"
        {...extras}
      />
      {errors && <div className="text-danger">{errors.message}</div>}
    </>
  );
};

export default FormInput;
