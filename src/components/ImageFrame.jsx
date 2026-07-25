import { useState } from "react";
import { Aperture } from "lucide-react";

export default function ImageFrame({ image, className = "", ratio = "aspect-[4/5]", caption, priority = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative overflow-hidden ${ratio} ${className}`}>
      {!failed ? (
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-carbon via-obsidian to-carbon text-ash">
          <Aperture size={28} strokeWidth={1.25} />
          <span className="eyebrow px-6 text-center text-[0.6rem] text-ash/80">{image.alt}</span>
        </div>
      )}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/90 to-transparent p-4 pt-10 font-label text-xs uppercase tracking-widest2 text-ivory/90">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
