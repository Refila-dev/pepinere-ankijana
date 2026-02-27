import React from 'react'
import  Image from 'next/image';

const AboutResponsable  = () => {
  return (
    <div className='mt-45 flex flex-col gap-10 w-full bg-black/50 px-10 py-10 justify-center items-center'>
     <div>
        <h1 className='text-white text-center font-bold text-2xl'>Ireo tomponandraikitra eto anivon'ny MARA</h1>
        <p className='text-white text-center text-lg'>This is the about section for Responsable.</p>
     </div>
     <div className='flex gap-10 justify-center items-center w-1/2'>
        <p className='text-white text-center text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at vero temporibus 
            sint iusto officia explicabo! Distinctio assumenda eius omnis cumque quae dolore 
            accusamus aperiam sequi consequuntur sint? Architecto, quam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque reprehenderit natus vel, voluptatum quidem illum repudiandae? 
            Deserunt ratione, accusantium fugit atque iusto, possimus error voluptatibus placeat voluptate, odio magni.
        </p>
        <Image
          src="/respo.jpeg"
          alt="About Responsable"
          width={450}
          height={200}
          className="rounded-full shadow-l-4xl px-4 py-4"
        />
     </div>
     <div className='mt-10'>
      <h1 className='text-white text-center font-bold text-2xl'>Ny Mpanolotsaina</h1>
      <p className='text-white text-center text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
      </p>
     </div>
     <div className='flex gap-10 justify-center items-center w-1/2'>
        <Image
          src="/user.jpeg"
          alt="About Responsable"
          width={450}
          height={200}
          className="rounded-full shadow-l-4xl px-4 py-4"
        />
        <p className='text-white text-center text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at vero temporibus 
            sint iusto officia explicabo! Distinctio assumenda eius omnis cumque quae dolore 
            accusamus aperiam sequi consequuntur sint? Architecto, quam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque reprehenderit natus vel, voluptatum quidem illum repudiandae? 
            Deserunt ratione, accusantium fugit atque iusto, possimus error voluptatibus placeat voluptate, odio magni.
        </p>
      </div>
    </div>
  )
}

export default AboutResponsable
