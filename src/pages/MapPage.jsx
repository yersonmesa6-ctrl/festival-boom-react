function MapPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden bg-[#0047FF] px-6 md:px-12 py-10 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        <div className="lg:col-span-6 bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_#000]">
          <div className="border-4 border-black bg-[#FFE600] h-64 sm:h-72 relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 320 220" fill="none">
              <rect width="320" height="220" fill="#FFE600" />
              <path d="M0 110 H320 M160 0 V220" stroke="#000" strokeWidth="8" />
              <path d="M0 110 H320 M160 0 V220" stroke="#FFF" strokeWidth="3" />

              <rect
                x="25"
                y="25"
                width="105"
                height="60"
                fill="#FF0055"
                stroke="#000"
                strokeWidth="4"
              />
              <text
                x="77"
                y="60"
                textAnchor="middle"
                fill="#FFF"
                fontWeight="900"
                fontSize="12"
                fontFamily="sans-serif"
              >
                ESCENARIO POP
              </text>

              <rect
                x="190"
                y="25"
                width="105"
                height="60"
                fill="#00E5FF"
                stroke="#000"
                strokeWidth="4"
              />
              <text
                x="242"
                y="60"
                textAnchor="middle"
                fill="#000"
                fontWeight="900"
                fontSize="12"
                fontFamily="sans-serif"
              >
                DOMO VINILO
              </text>

              <rect
                x="25"
                y="135"
                width="105"
                height="60"
                fill="#FFF"
                stroke="#000"
                strokeWidth="4"
              />
              <text
                x="77"
                y="170"
                textAnchor="middle"
                fill="#000"
                fontWeight="900"
                fontSize="12"
                fontFamily="sans-serif"
              >
                FOOD TRUCKS
              </text>

              <circle
                cx="242"
                cy="165"
                r="32"
                fill="#0047FF"
                stroke="#000"
                strokeWidth="4"
              />
              <text
                x="242"
                y="169"
                textAnchor="middle"
                fill="#FFE600"
                fontWeight="900"
                fontSize="12"
                fontFamily="sans-serif"
              >
                ARTE
              </text>
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between font-black text-xs uppercase">
            <span>Parque Central · Acceso Norte</span>
            <span className="px-2 py-0.5 bg-[#00E5FF] border-2 border-black">
              Metro Línea 2
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="bg-[#FFE600] border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000] self-start">
            <h2 className="text-2xl sm:text-4xl font-black uppercase">
              05 · El Recinto
            </h2>
          </div>

          <div className="bg-white border-4 border-black p-4 shadow-[5px_5px_0px_0px_#000]">
            <h3 className="font-black text-base uppercase text-[#FF0055]">
              Puertas Abiertas desde las 14:00
            </h3>
            <p className="text-xs font-bold text-neutral-700 mt-1">
              Zona gastronómica, hidratación gratuita, casilleros y acceso
              adaptado en todo el parque.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#00E5FF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
              <span className="font-black text-2xl block">12</span>
              <span className="font-black text-xs uppercase">
                Murales Gigantes
              </span>
            </div>
            <div className="bg-[#FF0055] text-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
              <span className="font-black text-2xl block">18</span>
              <span className="font-black text-xs uppercase">Food Trucks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapPage;