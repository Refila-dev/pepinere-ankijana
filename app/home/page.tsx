'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();


  const handleLearnMore = () => {
    setTimeout(() => {
      router.push("/about");
    }, 1000);
  };

  return (
    <div>
      <main className="bg-url('/public/plantes-bg.jpeg') bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-black/50 bg-opacity-75 p-10 shadow-lg w-400 h-190 rounded-b-full rounded-tl-full">
          <h1 className="text-4xl text-white font-bold text-center mt-10">
            Tongasoa eto amin'ny tranokala Maitso Ravina Ankijana(MARA).
          </h1>
          <p className="text-white text-xl text-center mt-30 w-auto">
            Ity tranokala ity dia namboarina mba ho fampiroboroboana ny
            tontolon'ny fambolen-kazo eto amin'ny faritra Itasy. Maro ireo
            vokatra amidy eto amin'ny tranokala fa ny ankamaroan'izy ireo dia
            ireo hazo miroborobo ato amin'ny faritra Itasy, anisan'izany ny
            Tapie, ny Kininina, ny Kasia, ny Manga, sns... Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Voluptatum, voluptas facere!
            Praesentium perferendis deleniti nihil necessitatibus, incidunt
            doloribus consequuntur? Quis quas atque consectetur vel vitae
            reprehenderit laborum unde nulla placeat.
          </p>
          <div className="mt-30 flex justify-center items-center">
            <button onClick={handleLearnMore} className="bg-green-500 text-white w-70 h-16 rounded-4xl animate-bounce hover:cursor-pointer hover:bg-green-800 flex flex-col items-center justify-center gap-2">
              Te hahafantatra misymisy kokoa
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
