import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="flex width-full h-screen bg-black/50 justify-center items-center gap-20">
      <div className="rounded-b-full rounded-t-full bg-black/40">
      <div className='flex px-50 gap-20 '>
       <div>
          <hr className="flex absolute left-45 w-20 h-1 bg-green-800 rounded-full" />
          <hr className="flex absolute left-32 w-20 h-1 bg-white mt-4 rounded-full" />
          <hr className="flex absolute left-22 w-20 h-1 bg-red-500 mt-8 rounded-full" />
        </div>
        <Image
          src="/Maitso-Ravina-Ankijana.png"
          alt="About Us"
          width={400}
          height={200}
          className="rounded-full shadow-l-4xl px-4 py-4"
        />
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-white text-center font-bold text-2xl">
            Inona marina mo i MARA?
          </h1>
          <p className="w-250 text-white text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            cupiditate facere, beatae assumenda enim aperiam nam laboriosam eum
            ad nemo voluptatum culpa similique placeat quae minus perspiciatis
            impedit suscipit. Est! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Et tempore incidunt ipsum nemo totam inventore
            fuga velit! Eligendi fugiat vel eum rem. Saepe perspiciatis tenetur
            id nesciunt libero quam dolor.
          </p>
        </div>
        <div>
          <hr className="flex absolute right-45 w-20 h-1 bg-green-800 rounded-full" />
          <hr className="flex absolute right-32 w-20 h-1 bg-white mt-4 rounded-full" />
          <hr className="flex absolute right-22 w-20 h-1 bg-red-500 mt-8 rounded-full" />
        </div>
      </div>
      <div className='flex justify-center items-center gap-6'>
        <hr className='h-3 w-50 bg-green-800 rounded-t-full' />
        <hr className='h-3 w-50 bg-white rounded-full' />
        <hr className='h-3 w-50 bg-red-500 rounded-t-full' />
      </div>
     </div>
    </div>
  );
};

export default AboutPage;
