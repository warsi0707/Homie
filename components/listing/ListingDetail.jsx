import React from "react";

function ListingDetail() {
  return (
    <div className="p-8 md:p-14 md:px-32 flex flex-col gap-5 min-h-screen mb-10">
      <div className="-mt-8">
        <h1 className="text-4xl font-semibold">Villa Pinewood</h1>
        <p className="text-gray-400">Italy</p>
      </div>
      <div className="flex flex-col h-96 gap-5 md:min-h-screen md:-mb-44">
        <div className="image h-96 md:h-[500px] flex flex-col w-full  md:grid grid-cols-5 gap-10 md:gap-5">
          <div className="h-full w-full col-span-4 ">
            <img
              src="/mumbai.png"
              className="w-full h-96 md:h-[520px] rounded-xl object-fill"
              alt=""
            />
          </div>
          <div className="md:h-full h-52 w-full hidden  col-span-1 md:flex flex-row  md:flex-col gap-5 ">
            <img
              className="h-40 w-full rounded-xl object-fill"
              src="/mumbai.png"
              alt=""
            />
            <img className="h-40 w-full rounded-xl" src="/mumbai.png" alt="" />
            <img className="h-40 w-full rounded-xl" src="/mumbai.png" alt="" />
          </div>
        </div>
      </div>
      <div className=" w-full h-[900px]  md:h-[500px] flex flex-col  gap-2 md:grid grid-cols-5 ">
        <div className=" w-full h-full py-2 col-span-3 md:mr-10 md:pr-28 flex flex-col gap-5">
          {/* Description */}
          <div className="space-y-3 flex flex-col justify-center items-center md:items-start border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Description</h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              facilis quae sed illum ab modi odio? Deserunt sed quo
              reprehenderit et in a id animi sint perspiciatis, quam voluptates
              architecto!
            </p>
          </div>
          {/* Hosted */}
          <div className="space-y-5 border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Hosted</h1>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
              <div>
                <img
                  src="/lucknow.png"
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1>Zoyhra Ivalline</h1>
                <p>12456789</p>
              </div>
                </div>
                <button className="border border-gray-400 px-7 py-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300">Contact</button>
            </div>
            
          </div>
          {/* Immenties */}
          <div className="space-y-5 border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Facility</h1>
            <div className="grid grid-cols-2 gap-5">
              <h1>Bedrooms</h1>
              <h1>Bedrooms</h1>
              <h1>Bedrooms</h1>
              <h1>Bedrooms</h1>
              <h1>Bedrooms</h1>
              <h1>Bedrooms</h1>
            </div>
          </div>
        </div>
        <div className="bg-green-400 w-full h-full col-span-2 rounded-md">
            <h1>Bookings</h1>
        </div>
      </div>
      {/* Location */}
      <div className=" w-full h-96 md:h-[500px] mb-5 space-y-2">
        <div className="">
          <h1 className="text-3xl font-semibold">Location</h1>
          <p className="text-gray-500">Mumbai</p>
        </div>
        <div className="bg-black w-full h-52 md:h-full rounded-xl"></div>
      </div>
    </div>
  );
}

export default ListingDetail;
