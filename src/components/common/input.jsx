import React from "react";

const Input = ({ name, label, value, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
