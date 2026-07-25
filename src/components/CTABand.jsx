import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export default function CTABand() {
  return (
    <section className="border-t border-carbonline bg-carbon">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div>
          <span className="eyebrow text-brabus">Private Registrations Open</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-ivory md:text-4xl">
            Reserve your residence before public launch.
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="eyebrow border border-brabus bg-brabus px-7 py-4 text-ivory transition-colors hover:bg-brabusdeep">
            Enquire Now
          </Link>
          <a href={`tel:${SITE.phone}`} className="eyebrow border border-carbonline px-7 py-4 text-ivory transition-colors hover:border-ash">
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
