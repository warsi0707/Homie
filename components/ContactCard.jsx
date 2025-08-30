import Link from "next/link";
import { memo } from "react";
import { CiTrash } from "react-icons/ci";

function ContactCard({item, onDelete}) {
  return (
    <div className="w-72 h-auto p-3 border border-gray-300 flex flex-col gap-3 rounded-xl shadow-xl">
      <div className="flex justify-between">
        <div className="flex gap-2">
            <p className="bg-blue-700 text-white rounded-full p-2 px-3">{item.name.split(" ").map((word)=> (word.charAt(0).toUpperCase()))}</p>
            <h1 className="text-3xl ">{item.name}</h1>
        </div>
        <button onClick={onDelete} className="text-lg hover:text-red-600 cursor-pointer "><CiTrash/></button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-600">Phone:</p>
          <p>{item.phone}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Email:</p>
          <p>{item.email}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Listing:</p>
          <Link className="hover:underline" href={`/listing/${item.property.id}`}>{item.property.title.split(" ")[0]}</Link>
        </div>
        <div>
          <h1>{item.message}</h1>
        </div>
      </div>
    </div>
  );
}
export default memo(ContactCard)