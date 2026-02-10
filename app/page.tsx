export default function Home() {
  return (
    <div>
      <main className="bg-url('/public/plantes-bg.jpeg') bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-black/50 bg-opacity-75 p-10 shadow-lg w-400 h-190 rounded-b-full rounded-tl-full">
          <h1 className="text-4xl text-white font-bold text-center mt-10">
            Tongasoa eto amin'ny tranokala Zana-kazo Ankijana.
          </h1>
          <p className="text-white text-xl text-center mt-30 w-auto">Ity tranokala ity dia namboarina mba ho fampiroboroboana ny tontolon'ny fambolen-kazo eto amin'ny faritra Itasy. 
            Maro ireo vokatra amidy eto amin'ny tranokala fa ny ankamaroan'izy ireo dia ireo hazo miroborobo ato amin'ny faritra Itasy, 
            anisan'izany ny Tapie, ny Kininina, ny Kasia, ny Manga, sns...
          </p>
          <div className="mt-30 flex justify-center items-center">
            <button className="bg-green-500 text-white w-70 h-16 rounded-4xl animate-bounce hover:bg-green-800">Te hahafantatra misymisy kokoa</button>
          </div>
        </div>
      </main>
    </div>
  );
}
