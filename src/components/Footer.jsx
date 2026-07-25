import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-carbonline bg-obsidian text-ash">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div>
          <span className="font-label text-lg font-semibold tracking-widest2 text-ivory">
            M3M<span className="text-brabus">×</span>BRABUS
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Ultra-luxury branded residences by M3M India, in collaboration with BRABUS — Sector 58, Golf Course Extension Road, Gurugram.
          </p>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-ivory">Explore</h2>
          <ul className="space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-ivory">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0 text-brabus" /> {SITE.phoneDisplay}
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0 text-brabus" /> {SITE.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brabus" /> {SITE.location}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-ivory">Registration</h2>
          <p className="text-sm leading-relaxed">{SITE.rera}</p>
        </div>
      </div>

      <div className="border-t border-carbonline">
        <div className="container-x flex flex-col gap-4 py-6 text-xs leading-relaxed text-ash/80 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl">{SITE.disclaimer}</p>
          <p className="shrink-0">© {new Date().getFullYear()} M3M BRABUS — Concept Microsite</p>
        </div>
      </div>
    </footer>
  );
}
