import { memo } from "react";

function DoCard({icon, title, text}){
    return (
        <div className="w-80 h-64 bg-slate-100 flex flex-col justify-between py-5 items-center text-center rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <p className="bg-gray-200  text-5xl p-3 rounded-full text-blue-100">{icon}</p>
            <p className="lg:w-32 text-xl md:text-2xl">{title}</p>
            <p className="text-gray-100">{text}</p>
        </div>
    )
}
export default memo(DoCard)