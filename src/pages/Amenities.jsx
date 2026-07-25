import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import ImageFrame from "../components/ImageFrame";
import CTABand from "../components/CTABand";
import { AMENITIES } from "../data/site";
import { IMAGES } from "../data/images";

const categoryImage = {
  Wellness: IMAGES.pool,
  "Social & Recreation": IMAGES.clubLounge,
  Landscape: IMAGES.gardenPath,
  "Security & Systems": IMAGES.nightExterior,
};

export default function Amenities() {
  return (
    <Layout>
      <Seo
        path="/amenities"
        title="Amenities"
        description="Explore M3M BRABUS Residences amenities — temperature-controlled pool, spa, performance gym, grand clubhouse, landscaped gardens and 24/7 security across a 32-acre township."
      />

      <section className="bg-obsidian pb-16 pt-40">
        <div className="container-x">
          <SectionHead eyebrow="On The Grounds" title="Amenities engineered around a single day, well spent." copy="Every amenity at M3M BRABUS is built to a residential-grade spec sheet — sized, finished and maintained for daily use, not just showcase photography." />
        </div>
      </section>

      {AMENITIES.map((group, idx) => (
        <section key={group.category} className={idx % 2 === 0 ? "bg-obsidian" : "bg-stone"}>
          <div className="container-x grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20">
            <Reveal className={idx % 2 === 1 ? "md:order-2" : ""}>
              <ImageFrame image={categoryImage[group.category]} ratio="aspect-[4/3]" />
            </Reveal>
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <span className={`eyebrow ${idx % 2 === 0 ? "text-brabus" : "text-brabus"}`}>{group.category}</span>
              <ul className="mt-6 space-y-6">
                {group.items.map((item) => (
                  <li key={item.name} className={`border-l-2 border-brabus/60 pl-5 ${idx % 2 === 0 ? "" : ""}`}>
                    <h2 className={`font-display text-xl font-medium ${idx % 2 === 0 ? "text-ivory" : "text-obsidian"}`}>{item.name}</h2>
                    <p className={`mt-1.5 text-sm leading-relaxed ${idx % 2 === 0 ? "text-ash" : "text-graphite"}`}>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CTABand />
    </Layout>
  );
}
