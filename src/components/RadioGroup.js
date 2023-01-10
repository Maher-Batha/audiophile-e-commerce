import React from "react";

const RadioGroup = ({ className = "", fields, groupTitle, name, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className={`radio-group ${className}`}>
      <p className="group-title">{groupTitle}</p>
      <div className="fields">
        {fields.map((item, index) => {
          const { label, value, id } = item;
          return (
            <label key={index} htmlFor={id} className="radio-label">
              <input
                className="radio-input"
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                defaultChecked={index === 0 ? true : false}
              />
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
