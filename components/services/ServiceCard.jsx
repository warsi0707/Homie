import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

function ServiceCard() {
  return (
    <div className="border border-gray-200  rounded-md hover:shadow-xl p-5 space-y-5 hover:bg-slate-100">
      <div className="flex justify-between">
        <h1 className="text-2xl text-slate-500">Financing Assistance</h1>
        <Link className="text-3xl" href={"#"}><MdArrowOutward/></Link>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rerum
          molestiae tenetur, ad, saepe quasi possimus voluptas aut neque
          provident est ipsum libero a ratione omnis reiciendis eaque modi
          explicabo excepturi ab, ipsa eius sit repudiandae animi. Voluptatibus
          vel, maiores rem a saepe vero vitae omnis. Hic, recusandae laudantium?
          Minima?
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
