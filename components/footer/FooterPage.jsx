import React from 'react'

function FooterPage() {
  return (
    <footer className='py-2 w-full bg-black text-white flex flex-col md:flex-row gap-10'>
      <div className=' h-full w-full flex flex-col justify-center items-center text-start p-5 md:p-10'>
        <div className='h-full md:w-96 flex flex-col gap-5 justify-center'>
        <h1 className='text-3xl md:text-6xl font-semibold '>HOMIE</h1>
        <p className='text-lg md:text-xl'>Your one-stop shop for finding and securing your perfect property</p>
        </div>
      </div>
      <div className=' w-full h-full flex flex-col justify-start items-start md:justify-center md:items-center p-5  md:p-10 gap-5'>
        <div className='flex flex-col gap-10'>
            <div className='text-lg  md:text-2xl'>
            <h1>1133 Younge Street, 4th Floor</h1>
            <h1>Toronto, ON</h1>
            <h1>Canada M4T2Y7</h1>
        </div>
         <div className='text-lg md:text-2xl'>
            <h1>+91 12456789</h1>
            <h1>hello@gmail.com</h1>
        </div>
        <div className='flex justify-between'>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
        </div>
        </div>
        
      </div>
    </footer>
  )
}

export default FooterPage
