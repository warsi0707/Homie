import React from "react";
import ServiceCard from "../services/ServiceCard";
import * as motion from "motion/react-client";

export default function ServicePage() {
  return (
    <div
      id="service"
      className="h-full w-full flex  gap-2 flex-col md:flex-row justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" w-full p-5  flex flex-col gap-12"
      >
        <div className="w-full space-y-2">
          <p>Services</p>
          <h1 className="text-xl sm:text-5xl">
            Connecting you with the perfect property.
          </h1>
        </div>
        <img className="" src="/homeImage.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" w-full p-5 space-y-5 mt-36 md:mt-0"
      >
        <ServiceCard title={"Financing Assistance"} />
        <ServiceCard title={"Listing Assistance"} />
        <ServiceCard title={"Brockrage Assistance"} />
      </motion.div>
    </div>
  );
}
