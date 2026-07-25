import { useState } from "react";
import { X } from "lucide-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import ImageFrame from "../components/ImageFrame";
import CTABand from "../components/CTABand";
import { IMAGES } from "../data/images";

const GALLERY = [
  { image: IMAGES.heroTower, tag: "Exterior", ratio: "aspect-[3/4]" },
  { image: IMAGES.livingRoom, tag: "Interior", ratio: "aspect-[4/3]" },
  { image: IMAGES.pool, tag: "Amenities", ratio: "aspect-[4/3]" },
  { image: IMAGES.masterBedroom, tag: "Interior", ratio: "aspect-[3/4]" },
  { image: IMAGES.clubLounge, tag: "Amenities", ratio: "aspect-[4/3]" },
  { image: IMAGES.kitchen, tag: "Interior", ratio: "aspect-[3/4]" },
  { image: IMAGES.gardenPath, tag: "Landscape", ratio: "aspect-[4/3]" },
  { image: IMAGES.spa, tag: "Amenities", ratio: "aspect-[3/4]" },
  { image: IMAGES.terraceView, tag: "Exterior", ratio: "aspect-[4/3]" },
  { image: IMAGES.diningRoom, tag: "Interior", ratio: "aspect-[4/3]" },
  { image: IMAGES.gym, tag: "Amenities", ratio: "aspect-[3/4]" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <Layout>
      <Seo
        path="/gallery"
        title="Gallery"
        description="A visual tour of M3M BRABUS Residences — exteriors, interiors, amenities and landscaped grounds across the Sector 58 Golf Course Extension Road township."
      />

      <section className="bg-obsidian pb-14 pt-40">
        <div className="container-x">
          <SectionHead eyebrow="Gallery" title="A closer look, before you visit." copy="Representative imagery reflecting the design direction and finish standard of M3M BRABUS Residences." />
        </div>
      </section>

      <section className="bg-obsidian pb-24">
        <div className="container-x columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setLightbox(g)}
                className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brabus"
                aria-label={`View larger image: ${g.image.alt}`}
              >
                <ImageFrame image={g.image} ratio={g.ratio} caption={g.tag} className="transition-opacity hover:opacity-90" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.image.alt}
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 text-ivory" onClick={() => setLightbox(null)} aria-label="Close image">
            <X size={30} />
          </button>
          <img src={lightbox.image.src} alt={lightbox.image.alt} className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}

      <CTABand />
    </Layout>
  );
}
