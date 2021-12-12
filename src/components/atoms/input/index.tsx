import React from "react";

type InputType = {
  label?: string;
  type?: string;
  placeholder?: string;
  prefix?: boolean;
  prefixIcon?: any;
}

const Input = ({ label, type = "text", placeholder, prefix = false, prefixIcon }: InputType) => {
  return (
    <div className="w-full">
      {label && <label>{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={`border border-gray rounded w-full ${prefix ? 'pl-9' : 'px-2'} py-2 focus:outline-none`}
        />
        {prefix && <div className="absolute opacity-50 top-2 left-2">{prefixIcon}</div>}
      </div>
    </div>
  )
}

export default Input;