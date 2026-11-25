import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "01 Inicio", activeBg: "bg-[#FFE600] text-black" },
  { to: "/lineup", label: "02 Lineup", activeBg: "bg-[#00E5FF] text-black" },
  { to: "/galeria", label: "03 Galería", activeBg: "bg-[#FF0055] text-white" },
  { to: "/entradas", label: "04 Entradas", activeBg: "bg-white text-black" },
  { to: "/mapa", label: "05 Mapa", activeBg: "bg-[#0047FF] text-white" },
  { to: "/club", label: "06 Club", activeBg: "bg-[#FFE600] text-black" },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-10 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="px-2.5 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-base uppercase tracking-tight -rotate-3 shadow-[3px_3px_0px_0px_#000]">
          BOOM!
        </div>
        <span className="font-black text-lg uppercase tracking-tight hidden sm:inline">
          FEST <span className="text-[#0047FF]">26</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `px-2.5 py-1 border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] transition-transform ${
                isActive
                  ? `${item.activeBg} translate-x-0.5 translate-y-0.5`
                  : "bg-white text-black hover:bg-[#FFE600]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link
        to="/entradas"
        className="px-4 py-1.5 bg-[#0047FF] text-white border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:bg-[#FF0055]"
      >
        Tickets!
      </Link>
    </header>
  );
}

export default Header;