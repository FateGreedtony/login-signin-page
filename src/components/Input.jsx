import React from "react";

const Input = ({ label, type, value, onChange, name, className = "", placeholder }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold text-sm">
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`block w-full py-2 px-3 border-2 rounded-lg focus:outline-none transition ${className}`}
        placeholder={placeholder}
        required
      />
    </label>
  </div>
);

export default Input;