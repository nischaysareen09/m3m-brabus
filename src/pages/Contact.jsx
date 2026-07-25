import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHead from "../components/SectionHead";
import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";
import { SITE, FAQS } from "../data/site";

export default function Contact() {
  return (
    <Layout>
      <Seo
        path="/contact"
        title="Contact & Enquiry"
        description="Get in touch with the M3M BRABUS Residences sales team — request a private preview, floor plans and pricing for Sector 58, Golf Course Extension Road, Gurugram."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="bg-obsidian pb-20 pt-40">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Get In Touch" title="Request your private preview." copy="Share a few details and our relationship manager will reach out with pricing, floor plans and the current availability sheet." />

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-3 text-ash">
                <Phone className="text-brabus" size={18} />
                <a href={`tel:${SITE.phone}`} className="hover:text-ivory">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3 text-ash">
                <MessageCircle className="text-brabus" size={18} />
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                  WhatsApp Enquiry
                </a>
              </li>
              <li className="flex items-center gap-3 text-ash">
                <Mail className="text-brabus" size={18} />
                <a href={`mailto:${SITE.email}`} className="hover:text-ivory">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3 text-ash">
                <MapPin className="mt-0.5 text-brabus" size={18} />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-carbonline p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead eyebrow="Good To Know" title="Frequently asked questions." light />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQS} light />
          </div>
        </div>
      </section>
    </Layout>
  );
}
