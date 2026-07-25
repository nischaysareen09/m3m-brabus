import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQAccordion({ items, light = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`divide-y ${light ? "divide-graphite/15" : "divide-carbonline"}`} itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="py-5">
            <h3 className="m-0">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-6 text-left font-display text-lg font-medium md:text-xl ${
                  light ? "text-obsidian" : "text-ivory"
                }`}
                itemProp="name"
              >
                {item.q}
                <Plus
                  size={20}
                  className={`shrink-0 text-brabus transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p itemProp="text" className={`overflow-hidden text-sm leading-relaxed md:text-base ${light ? "text-graphite" : "text-ash"}`}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
