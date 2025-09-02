import React, { memo } from "react";
import { FaUsers } from "react-icons/fa6";
function AdminCard() {
  return (
    <div className="bg-slate-500 w-72 h-40 rounded-xl">
      <div className="flex justify-evenly items-center h-1/2 border-b text-xl">
        <p className="bg-slate-300 p-3 rounded-full text-2xl">
          <FaUsers />
        </p>
        <h1>Total listings</h1>
      </div>
      <div className="flex justify-evenly items-center h-1/2 ">
        <h1 className="text-2xl">24</h1>
        <p>Last month</p>
      </div>
    </div>
  );
}
export default memo(AdminCard);
