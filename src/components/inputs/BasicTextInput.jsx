// src/components/Inputs/BasicTextInput.js

import React from "react";
import renderIcon from "./renderIcon.jsx"; // Import the renderIcon function

const BasicTextInput = ({
  value,
  onChange,
  onBlur,
  inputRef,
  placeholder,
  error,
  icons, // New prop for icons (start or end)
  className, // Custom classes for styling
  ...rest
}) => {
  const adornments = renderIcon(icons); // Generate adornments using renderIcon

  return (
    <div className={`relative ${className || ""}`}>
      {/* Start Adornment (if any) */}
      {adornments.startAdornment && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {adornments.startAdornment}
        </span>
      )}
      <input
        type="text"
        value={value} // Ensure value is properly passed
        onChange={onChange} // Ensure onChange is handled correctly
        onBlur={onBlur} // Ensure onBlur is handled
        ref={inputRef}
        placeholder={placeholder}
        className={`border border-gray-300 rounded-md py-2 px-4 w-full 
          ${adornments.startAdornment ? "pl-10" : ""}  
          ${adornments.endAdornment ? "pr-10" : ""}   
          ${error ? "border-red-500" : ""}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        {...rest}
      />
      {/* End Adornment (if any) */}
      {adornments.endAdornment && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          {adornments.endAdornment}
        </span>
      )}
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default BasicTextInput;
