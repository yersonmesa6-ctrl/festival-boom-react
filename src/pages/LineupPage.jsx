import Card from "../components/Card";
import { lineupItems } from "../data/festivalData";

function LineupPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden bg-[#00E5FF] px-6 md:px-12 py-10 flex flex-col items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="halftone-cyan"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="2.5" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone-cyan)" />
      </svg>

      <div className="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              02 · Lineup Principal
            </h2>
          </div>
          <span className="px-4 py-1.5 bg-[#FFE600] border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] -rotate-2">
            3 Escenarios Simultáneos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {lineupItems.map((artista) => (
            <Card key={artista.id} variant="lineup" item={artista} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LineupPage;