import React from 'react'
import Image from 'next/image'

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 mt-20 bg-black/50">
      <h1>Ireo vokatra azo jifaina eto amin'i MARA</h1>
      <div className="w-full h-full flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-20 py-5">
        <div className="flex flex-col items-center gap-5 bg-gray-200 p-5 rounded-lg shadow-2xl">
          <h2>Vokatra 1</h2>
          <div >
            <Image
              src="/bois_de_rose.jpg"
              alt="Vokatra 1"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-green-800 text-lg font-bold bg-teal-400 p-2 rounded-xl">
              100.000 Ar
            </p>
          </div>
          <p>Famaritana momba ny vokatra 1</p>
        </div>
        <div className="flex flex-col items-center gap-5 bg-gray-200 p-5 rounded-lg shadow-2xl">
          <h2>Vokatra 1</h2>
          <div>
            <Image
              src="/bois_de_rose.jpg"
              alt="Vokatra 1"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-green-800 text-lg font-bold bg-teal-400 p-2 rounded-xl">
              80.000 Ar
            </p>
          </div>
          <p>Famaritana momba ny vokatra 1</p>
        </div>
        <div className="flex flex-col items-center gap-5 bg-gray-200 p-5 rounded-lg shadow-2xl">
          <h2>Vokatra 1</h2>
          <div>
            <Image
              src="/bois_de_rose.jpg"
              alt="Vokatra 1"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-green-800 text-lg font-bold bg-teal-400 p-2 rounded-xl">
              77.000 Ar
            </p>
          </div>
          <p>Famaritana momba ny vokatra 1</p>
        </div>
        <div className="flex flex-col items-center gap-5 bg-gray-200 p-5 rounded-lg shadow-2xl">
          <h2>Vokatra 1</h2>
          <div>
            <Image
              src="/bois_de_rose.jpg"
              alt="Vokatra 1"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-green-800 text-lg font-bold bg-teal-400 p-2 rounded-xl">
              5.000 Ar
            </p>
          </div>
          <p>Famaritana momba ny vokatra 1</p>
        </div>
        <div className="flex flex-col items-center gap-5 bg-gray-200 p-5 rounded-lg shadow-2xl">
          <h2>Vokatra 1</h2>
          <div>
            <Image
              src="/bois_de_rose.jpg"
              alt="Vokatra 1"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-green-800 text-lg font-bold bg-teal-400 p-2 rounded-xl">
              200.000 Ar
            </p>
          </div>
          <p>Famaritana momba ny vokatra 1</p>
        </div>
        <div className="flex flex-col items-center gap-5 bg-gray-200 p-5 rounded-lg shadow-2xl">
          <h2>Vokatra 1</h2>
          <div>
            <Image
              src="/bois_de_rose.jpg"
              alt="Vokatra 1"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-green-800 text-lg font-bold bg-teal-400 p-2 rounded-xl">
              120.000 Ar
            </p>
          </div>
          <p>Famaritana momba ny vokatra 1</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage
