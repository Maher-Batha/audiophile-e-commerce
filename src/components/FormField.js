import React from "react";
import { useState } from "react";

const FormField = ({
  label,
  id,
  type,
  name,
  value,
  placeHolder,
  requried,
  pattern,
  className = "",
  small,
  onChange,
}) => {
  const [status, setStatus] = useState("default");
  const handleChange = (e) => {
    onChange(e);
  };
  const handleBlur = (e) => {
    const { value } = e.target;
    if (value.trim() !== "") {
      if (value.match(pattern)) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } else {
      setStatus("empty");
    }
  };
  const handldeFocus = (e) => {
    setStatus("default");
  };
  return (
    <div className={`form-field ${className} ${status}`}>
      <div className="label-container">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <small className="form-small">{small.message[status]}</small>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        required={requried}
        onChange={handleChange}
        onFocus={handldeFocus}
        onBlur={handleBlur}
        className="form-input"
      />
    </div>
  );
};

export default FormField;
