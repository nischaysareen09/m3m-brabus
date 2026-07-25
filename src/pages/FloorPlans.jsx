import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize, BedDouble } from "lucide-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import { SpecList } from "../components/SpecStat";
import CTABand from "../components/CTABand";
import { FLOOR_PLANS, RESIDENCE_SPECS } from "../data/site";

export default function FloorPlans() {
  const [active, setActive] = useState(FLOOR_PLANS[0].id);
  const plan = FLOOR_PLANS.find((p) => p.id === active);

  return (
    <Layout>
      <Seo
        path="/floor-plans"
        title="Floor Plans — 4 BHK, 5 BHK & Penthouse"
        description="M3M BRABUS Residences floor plans: 4 BHK (5,000–5,800 sq.ft.), 5 BHK (6,200–7,000 sq.ft.) and Penthouse (7,000+ sq.ft.) residences, two per core, on Golf Course Extension Road, Gurugram."
      />

      <section className="bg-obsidian pb-16 pt-40">
        <div className="container-x">
          <SectionHead eyebrow="Configurations" title="Three residence classes. One build standard." copy="Every configuration shares the same core specification — imported marble, VRV climate control and full smart-home automation — differentiated only by scale." />
        </div>
      </section>

      <section className="bg-obsidian pb-24">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 border-b border-carbonline pb-6">
            {FLOOR_PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`eyebrow border px-6 py-3 transition-colors ${
                  active === p.id ? "border-brabus bg-brabus text-ivory" : "border-carbonline text-ash hover:border-ash"
                }`}
                aria-pressed={active === p.id}
              >
                {p.name}
              </button>
            ))}
          </div>

          <Reveal key={plan.id} className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Blueprint-style abstract graphic instead of stock imagery */}
            <div className="relative flex aspect-[4/3] items-center justify-center border border-carbonline bg-carbon-weave bg-carbon p-8">
              <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={`Abstract blueprint layout diagram for ${plan.name}`}>
                <rect x="20" y="20" width="360" height="260" fill="none" stroke="#232326" strokeWidth="1" />
                <rect x="20" y="20" width="180" height="130" fill="none" stroke="#8A8A8E" strokeWidth="1" />
                <rect x="200" y="20" width="180" height="130" fill="none" stroke="#8A8A8E" strokeWidth="1" />
                <rect x="20" y="150" width="120" height="130" fill="none" stroke="#8A8A8E" strokeWidth="1" />
                <rect x="140" y="150" width="120" height="130" fill="none" stroke="#8A8A8E" strokeWidth="1" />
                <rect x="260" y="150" width="120" height="130" fill="none" stroke="#8A8A8E" strokeWidth="1" />
                <line x1="20" y1="20" x2="380" y2="280" stroke="#C8102E" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="20" cy="20" r="3" fill="#C8102E" />
                <circle cx="380" cy="280" r="3" fill="#C8102E" />
                <text x="30" y="45" fill="#F8F6F2" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2">LIVING / DINING</text>
                <text x="210" y="45" fill="#F8F6F2" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2">MASTER SUITE</text>
                <text x="30" y="175" fill="#F8F6F2" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2">BED 02</text>
                <text x="150" y="175" fill="#F8F6F2" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2">BED 03</text>
                <text x="270" y="175" fill="#F8F6F2" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2">UTILITY</text>
              </svg>
              <span className="eyebrow absolute bottom-4 right-4 text-ash/70">Indicative Layout — Not To Scale</span>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium text-ivory md:text-4xl">{plan.name}</h2>
              <div className="mt-4 flex flex-wrap gap-6 text-ash">
                <span className="flex items-center gap-2 text-sm"><Maximize size={16} className="text-brabus" /> {plan.area}</span>
                <span className="flex items-center gap-2 text-sm"><BedDouble size={16} className="text-brabus" /> {plan.rooms}</span>
              </div>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ash">{plan.note}</p>

              <div className="mt-10 border-t border-carbonline pt-8">
                <span className="eyebrow text-ash">Shared Build Specification</span>
                <div className="mt-4">
                  <SpecList specs={RESIDENCE_SPECS} />
                </div>
              </div>

              <Link to="/contact" className="eyebrow mt-8 inline-flex items-center gap-2 border border-brabus bg-brabus px-7 py-4 text-ivory transition-colors hover:bg-brabusdeep">
                Request Detailed Floor Plan <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
