import React, { memo } from "react";

function ListingInput({values, placeholder, type,  handleChange }) {
  return (
    <input
      value={values}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
    />
  );
}

export default memo(ListingInput);
