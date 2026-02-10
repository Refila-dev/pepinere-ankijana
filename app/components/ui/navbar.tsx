import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex h-20 px-8 bg-gray-200 gap-50 items-center justify-center rounded-lg fixed shadow-4xl">
        <div className='w-17 h-17 rounded-full bg-black/50 flex justify-center items-center'>
          <h1 className='font-bold'>FI-A</h1>
        </div>
        <ul className="flex gap-10 text-black font-bold">
          <li>Pejy Fandraisana</li>
          <li>Ny mombamomba ny tranokala</li>
          <li>Ny vokatra</li>
          <li>Fanontaniana</li>
          <li>Laharam-pifandraisana</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
