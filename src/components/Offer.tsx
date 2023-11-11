import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* Text Container  */}
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
         <p className='text-white xl:text-xl'>Progressively simplify effective e-tollers and process - centric methods of empowerment. Quickly pontificate parallel. </p>
         <Countdown />
         <button className='bg-red-500 text-white rounded py-3 px-6'>ORDER NOW</button>
      </div>
      {/* Image Container  */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image src="/offerProduct.png" className='object-contain' alt='img' fill/>
      </div>
    </div>
  )
}

export default Offer