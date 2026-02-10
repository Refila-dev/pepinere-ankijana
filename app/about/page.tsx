import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="flex width-full h-screen bg-black/50 justify-center items-center gap-20">
      <div className='flex px-50 gap-20'>
        <div >
          <Image
            src="/Maitso-Ravina-Ankijana.png"
            alt="About Us"
            width={500}
            height={300}
            className='rounded-full shadow-l-4xl'
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-10'>
          <h1 className='text-white text-center font-bold text-2xl'>Inona marina mo i MARA?</h1>
          <p className='w-250 text-white text-center text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            cupiditate facere, beatae assumenda enim aperiam nam laboriosam eum
            ad nemo voluptatum culpa similique placeat quae minus perspiciatis
            impedit suscipit. Est!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempore incidunt ipsum 
            nemo totam inventore fuga velit! Eligendi fugiat vel eum rem. Saepe perspiciatis tenetur id nesciunt libero quam dolor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage
