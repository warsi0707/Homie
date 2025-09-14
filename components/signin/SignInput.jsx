import React, { memo } from "react";

function SignInput({label, type, placeholder,refs}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black-100 ">{label}</label>
      <input
      ref={refs}
        type={type}
        placeholder={placeholder}
        className="w-full border px-4 p-2 rounded-lg"
      />
    </div>
  );
}

export default memo( SignInput)
