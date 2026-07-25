// Curated stock photography (Unsplash — free for commercial use) standing in for
// official project renders. Each entry ships with a descriptive alt tag for SEO/GEO
// and accessibility, and every <ImageFrame> gracefully degrades to a styled
// placeholder if a URL ever fails to resolve.

import golfCourseRoadImg from "../assests/Golf-Course-Extension-Road--A-Realty-Growth-Corridor-of-Gurugram-new.webp";

const u = (id, w = 1600, q = 80) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMAGES = {
  heroTower: { src: u("photo-1486406146926-c627a92ad1ab"), alt: "Glass residential tower facade against the evening sky, representing M3M BRABUS Residences architecture" },
  facadeDetail: { src: u("photo-1545324418-cc1a3fa10c00"), alt: "Close-up of a modern glass and steel high-rise facade" },
  skylineDusk: { src: u("photo-1449824913935-59a10b8d2000"), alt: "Gurugram-style city skyline at dusk near Golf Course Extension Road" },
  livingRoom: { src: u("photo-1600210492486-724fe5c67fb0"), alt: "Expansive luxury living room with floor-to-ceiling glazing and Italian marble flooring" },
  masterBedroom: { src: u("photo-1616594039964-ae9021a400a0"), alt: "Serene master bedroom suite with warm ambient lighting" },
  kitchen: { src: u("photo-1600585154340-be6161a56a0c"), alt: "Modular luxury kitchen with branded fittings and premium finishes" },
  bathroom: { src: u("photo-1620626011761-996317b8d101"), alt: "Spa-inspired luxury bathroom with marble finishes" },
  pool: { src: u("photo-1571003123894-1f0594d2b5d9"), alt: "Temperature-controlled infinity swimming pool at the clubhouse" },
  gym: { src: u("photo-1534438327276-14e5300c3a48"), alt: "Fully equipped performance gym at the residents' clubhouse" },
  spa: { src: u("photo-1600334129128-685c5582fd35"), alt: "Spa and wellness centre with sauna and steam rooms" },
  clubLounge: { src: u("photo-1600210492493-0946911123ea"), alt: "Grand clubhouse lounge with bar deck and social seating" },
  gardenPath: { src: u("photo-1585320806297-9794b3e4eeae"), alt: "Landscaped garden jogging trail bordered by mature trees" },
  eveningDeck: { src: u("photo-1602343168117-bb8ffe3e2e9f"), alt: "Open-air social deck lit for an evening gathering" },
  aerialGreen: { src: u("photo-1449844908441-8829872d2607"), alt: "Aerial view of a low-density green township with landscaped courtyards" },
  interiorDetail: { src: u("photo-1618221118493-9cfa1a38c0c0"), alt: "Detail shot of premium interior finishes and marble surfaces" },
  nightExterior: { src: u("photo-1460518451285-97b6aa326953"), alt: "Residential tower illuminated at night" },
  studyRoom: { src: u("photo-1519710164239-da123dc03ef4"), alt: "Private study room with contemporary furnishing" },
  diningRoom: { src: u("photo-1617104551722-3b2d51366400"), alt: "Formal dining space with designer lighting" },
  terraceView: { src: u("photo-1600566752355-35792bedcfea"), alt: "Private penthouse terrace overlooking the green township" },
  golfCourseRoad: { src: golfCourseRoadImg, alt: "Golf Course Extension Road, a key realty growth corridor of Gurugram" },
};