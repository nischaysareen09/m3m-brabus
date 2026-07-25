import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-obsidian/95 backdrop-blur border-b border-carbonline" : "bg-gradient-to-b from-obsidian/70 to-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-label text-lg font-semibold tracking-widest2 text-ivory">M3M<span className="text-brabus">×</span>BRABUS</span>
          <span className="eyebrow mt-1 text-ash">Residences</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `eyebrow relative pb-1 transition-colors ${
                    isActive ? "text-ivory" : "text-ash hover:text-ivory"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-brabus" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`tel:${SITE.phone}`} className="eyebrow flex items-center gap-2 text-ash hover:text-ivory">
            <Phone size={14} /> {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="eyebrow border border-brabus bg-brabus px-5 py-2.5 text-ivory transition-colors hover:bg-brabusdeep"
          >
            Enquire Now
          </Link>
        </div>

        <button
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-carbonline bg-obsidian md:hidden">
          <ul className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.path} className="border-b border-carbonline/70 py-4 first:pt-0 last:border-none">
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `eyebrow ${isActive ? "text-brabus" : "text-ivory"}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="eyebrow block w-full border border-brabus bg-brabus px-5 py-3 text-center text-ivory"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
