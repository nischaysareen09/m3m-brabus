import { MapPin } from "lucide-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import ImageFrame from "../components/ImageFrame";
import CTABand from "../components/CTABand";
import { LOCATION_ADVANTAGES, SITE } from "../data/site";
import { IMAGES } from "../data/images";

export default function Location() {
  const mapQuery = encodeURIComponent(SITE.location);
  return (
    <Layout>
      <Seo
        path="/location"
        title="Location — Sector 58, Golf Course Extension Road"
        description="M3M BRABUS Residences sits on Golf Course Extension Road, Sector 58, Gurugram — close to NH-48, Sohna Road, IGI Airport, Cyber City and South Gurugram's leading schools and hospitals."
      />

      <section className="bg-obsidian pb-16 pt-40">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="The Address" title="Golf Course Extension Road, Sector 58." copy="One of Gurugram's most established residential corridors — positioned between the city's commercial core and the quiet of the Aravalli foothills." />
            <div className="mt-8 flex items-center gap-3 text-ash">
              <MapPin className="text-brabus" size={20} />
              <span className="text-sm">{SITE.location}</span>
            </div>
          </div>
          <Reveal>
            <ImageFrame image={IMAGES.golfCourseRoad} ratio="aspect-[4/3]" caption="Golf Course Extension Road" />
          </Reveal>
        </div>
      </section>

      <section className="bg-obsidian pb-24">
        <div className="container-x">
          <div className="aspect-[16/7] w-full overflow-hidden border border-carbonline">
            <iframe
              title="M3M BRABUS Residences location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Connectivity" title="Everything the city offers, minutes away." light />
          <div className="mt-14 grid gap-px overflow-hidden border border-graphite/15 bg-graphite/15 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATION_ADVANTAGES.map((a) => (
              <Reveal key={a.title} className="bg-stone p-8">
                <h2 className="font-display text-lg font-medium text-obsidian">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
