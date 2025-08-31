import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  pb-32">
      <img className="w-full h-72 sm:w-96 sm:h-96" src="/not-found.png"/>
      <Link className="bg-indigo-500 hover:bg-indigo-600 px-2 py-2 text-white rounded-xl sm:px-10 sm:text-2xl" href={"/"}>Home Page</Link>
    </div>
  );
}
