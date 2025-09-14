import * as motion from "motion/react-client";

function StarterPage1() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row p-10">
      <motion.div
      initial={{opacity:0, y:-100}}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{duration:1}}
      viewport={{once: true}}
      className=" w-full h-screen p-5  md:p-14  flex md:flex-col sm:justify-center md:justify-center">
        <div className=" flex flex-col gap-5 sm:justify-center items-center justify-center md:justify-start sm:items-center md:items-start sm:px-2 md:px-4">
          <div className="text-4xl sm:text-5xl  md:text-6xl font-semibold space-y-2">
            <h1>Your Home,</h1>
            <h1>Your Future,</h1>
            <h1>Our Expertise</h1>
          </div>
          <p className="md:text-xl text-wrap w-full text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, squia.</p>
          <div className="flex flex-col-reverse md:flex-row gap-2 items-center">
            <motion.button 
            whileHover={{
              scale: 1.1,
            }}
            animate={{
            
            }}
            className="bg-black md:text-xl py-2 text-white px-4 sm:px-2 sm:py-0">Contact Us</motion.button>
            <p className="text-gray-500"><strong>1000+</strong> people have found their dream home</p>
          </div>
           <div className=" border-b w-full py-5 border-gray-300"></div>
          <div className="flex justify-between w-full mt-2 md:mt-5">
            <div>
                <h1 className="text-3xl font-semibold">20+</h1>
                <p className="text-gray-500">partners worldwide</p>
            </div>
           
            <div>
                <h1 className="text-3xl font-semibold">200+</h1>
                <p className="text-gray-500">transaction dealed</p>
            </div>
            <div>
                <h1 className="text-3xl font-semibold">100+</h1>
                <p className="text-gray-500">property listed</p>
            </div>
          </div>
          </div>
        </motion.div>
      <motion.div
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8}}
      viewport={{once: true}}
      className="bg-green-200 w-full h-screen hidden md:flex">
        <img className="w-full h-screen" src="/homeImage.png" alt="" />
      </motion.div>
    </div>
  );
}

export default StarterPage1;
