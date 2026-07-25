import { Link } from "react-router-dom";
import { ArrowRight, Gauge, ShieldCheck, Leaf, Cpu } from "lucide-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import { SpecStatRow } from "../components/SpecStat";
import ImageFrame from "../components/ImageFrame";
import CTABand from "../components/CTABand";
import FAQAccordion from "../components/FAQAccordion";
import { SITE, STATS, HIGHLIGHTS, FAQS } from "../data/site";
import { IMAGES } from "../data/images";

const iconFor = {
  "brabus-design": Gauge,
  "low-density": ShieldCheck,
  green: Leaf,
  "smart-home": Cpu,
};

export default function Home() {
  return (
    <Layout>
      <Seo
        path="/"
        title="Ultra-Luxury Branded Residences, Sector 58 Gurugram"
        description="M3M BRABUS Residences — M3M India × BRABUS. Ultra-luxury 4 & 5 BHK residences and penthouses, 5,000–7,000+ sq.ft., on a 32-acre, 88% green township on Golf Course Extension Road, Gurugram."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Residence",
          name: "M3M BRABUS Residences",
          description: "Ultra-luxury branded residential development by M3M India in collaboration with BRABUS.",
          address: { "@type": "PostalAddress", streetAddress: "Sector 58, Golf Course Extension Road", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
        }}
      />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-carbon-weave bg-obsidian">
        <div className="absolute inset-0">
          <ImageFrame image={IMAGES.heroTower} ratio="aspect-auto h-full" className="h-full opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-obsidian/40" />
        </div>

        <div className="container-x relative z-10 pb-20 pt-40">
          <p className="eyebrow mb-6 flex items-center gap-3 text-ash">
            <span className="h-px w-10 bg-brabus" /> M3M India × BRABUS &mdash; Sector 58, Gurugram
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {SITE.tagline}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ash md:text-lg">
            240 residences. Two towers. 32 acres, 88% open. The first branded collaboration to bring BRABUS
            precision engineering to residential architecture on Golf Course Extension Road.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="eyebrow flex items-center gap-2 border border-brabus bg-brabus px-7 py-4 text-ivory transition-colors hover:bg-brabusdeep">
              Request Private Preview <ArrowRight size={16} />
            </Link>
            <Link to="/floor-plans" className="eyebrow flex items-center gap-2 border border-ivory/30 px-7 py-4 text-ivory transition-colors hover:border-ivory">
              View Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* SPEC STRIP */}
      <section className="bg-obsidian">
        <div className="container-x -mt-px pb-2">
          <SpecStatRow stats={STATS} />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="The Collaboration"
              title="Where automotive precision meets residential architecture."
              copy="BRABUS has spent four decades refining what performance means down to the millimetre. M3M BRABUS Residences translates that obsession into 240 homes — material selection, spatial planning and finishing standards engineered with the same discipline as a BRABUS build sheet."
            />
            <Link to="/amenities" className="eyebrow mt-8 inline-flex items-center gap-2 text-brabus">
              Explore Amenities <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-carbonline bg-carbonline lg:col-span-7 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => {
              const Icon = iconFor[h.id];
              return (
                <Reveal key={h.id} className="bg-obsidian p-8">
                  <Icon className="text-brabus" size={26} strokeWidth={1.4} />
                  <h3 className="mt-5 font-display text-xl font-medium text-ivory">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{h.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESIDENCE SHOWCASE - light stone section */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Residence Showcase" title="Interiors built to a higher tolerance." light />
        </div>
        <div className="container-x mt-14 grid gap-6 md:grid-cols-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <ImageFrame image={IMAGES.livingRoom} ratio="aspect-[4/3] md:aspect-[16/13]" caption="Living Room — Italian Marble Flooring" />
          </Reveal>
          <Reveal delay={0.1}>
            <ImageFrame image={IMAGES.kitchen} ratio="aspect-[4/3]" caption="Modular Kitchen" />
          </Reveal>
          <Reveal delay={0.15}>
            <ImageFrame image={IMAGES.masterBedroom} ratio="aspect-[4/3]" caption="Master Suite" />
          </Reveal>
        </div>
      </section>

      {/* AMENITIES PREVIEW */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHead eyebrow="Lifestyle" title="A clubhouse engineered for every hour of the day." />
          <Link to="/amenities" className="eyebrow flex shrink-0 items-center gap-2 text-brabus">
            View All Amenities <ArrowRight size={15} />
          </Link>
        </div>
        <div className="container-x mt-14 grid gap-px overflow-hidden border border-carbonline bg-carbonline sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: IMAGES.pool, label: "Infinity Pool" },
            { img: IMAGES.gym, label: "Performance Gym" },
            { img: IMAGES.spa, label: "Spa & Wellness" },
            { img: IMAGES.clubLounge, label: "Grand Clubhouse" },
          ].map((a) => (
            <div key={a.label} className="group relative bg-obsidian">
              <ImageFrame image={a.img} ratio="aspect-[3/4]" className="grayscale-[15%] transition-all duration-500 group-hover:grayscale-0" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/95 to-transparent p-5">
                <span className="eyebrow text-ivory">{a.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-obsidian pb-24 md:pb-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead eyebrow="Good To Know" title="Frequently asked questions." copy="Straight answers before you schedule a site visit." />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQS.slice(0, 4)} />
            <Link to="/contact" className="eyebrow mt-8 inline-flex items-center gap-2 text-brabus">
              More Questions? Talk To Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
