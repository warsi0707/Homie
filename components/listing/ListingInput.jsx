import React, { memo } from "react";

function ListingInput({placeholder, type, values, onchange}) {
  return (
    <input
      type={type}
      value={values}
      onChange={onchange}
      className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
      placeholder={placeholder}
    />
  );
}

export default memo(ListingInput);
