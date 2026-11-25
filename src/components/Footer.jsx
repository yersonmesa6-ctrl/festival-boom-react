import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t-4 border-black px-4 md:px-10 h-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="px-1.5 py-0.5 bg-[#FF0055] font-black text-[10px] uppercase">
          BOOM!
        </span>
        <span className="font-black text-xs uppercase tracking-wider">
          FESTIVAL POP ART 2026
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-4 text-xs font-black uppercase">
        <span className="text-[#FFE600]">Parque Central</span>
        <span className="text-[#00E5FF]">@boomfest26</span>
      </div>

      <Link
        to="/"
        className="px-2.5 py-0.5 bg-[#FFE600] text-black border border-white font-black text-[11px] uppercase hover:bg-[#00E5FF]"
      >
        Inicio
      </Link>
    </footer>
  );
}

export default Footer;