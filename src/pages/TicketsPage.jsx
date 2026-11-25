import Card from "../components/Card";
import { ticketItems } from "../data/festivalData";

function TicketsPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden bg-white px-6 md:px-12 py-10 flex flex-col items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="halftone-white"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="6" cy="6" r="3" fill="#0047FF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone-white)" />
      </svg>

      <div className="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="bg-[#0047FF] text-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              04 · Entradas
            </h2>
          </div>
          <span className="px-4 py-1.5 bg-[#FF0055] text-white border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-2">
            Preventa Activa
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {ticketItems.map((entrada) => (
            <Card key={entrada.id} variant="ticket" item={entrada} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TicketsPage;