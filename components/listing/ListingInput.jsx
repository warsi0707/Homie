import React, { memo } from "react";

function ListingInput({values, placeholder, type,  handleChange, label }) {
  return (
    <div className="w-full">
      <label htmlFor="" className="text-lg">{label}</label>
      <input
      value={values}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-xl"
    />
    </div>
    
  );
}

export default memo(ListingInput);
