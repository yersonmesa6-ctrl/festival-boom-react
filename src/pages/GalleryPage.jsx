import Card from "../components/Card";
import { zonesItems } from "../data/festivalData";

function GalleryPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden bg-[#FF0055] px-6 md:px-12 py-10 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="bg-[#FFE600] border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              03 · Zonas de Arte
            </h2>
          </div>
          <p className="bg-white border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
            Experiencias Interactivas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {zonesItems.map((zona) => (
            <Card key={zona.id} variant="gallery" item={zona} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;