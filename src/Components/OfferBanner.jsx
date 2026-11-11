"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
export default function OfferBanner({ offers = [] }) {
  const active = offers.filter(
    (x) => x && x.active !== false && (x.title || x.media),
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || active.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % active.length), 6000);
    return () => clearInterval(t);
  }, [paused, active.length]);
  if (!active.length) return null;
  const o = active[index] || active[0];
  return (
    <section className="offer-strip" aria-label="Current offers">
      <article className="offer-slide" key={index}>
        {o.mediaType === "video" && o.media ? (
          <video src={o.media} autoPlay muted loop playsInline />
        ) : o.media ? (
          <div
            className="offer-image"
            style={{ backgroundImage: `url("${o.media}")` }}
          />
        ) : null}
        <div className="offer-shade" />
        <div className="offer-copy">
          <span>
            <Sparkles size={14} /> {o.eyebrow || "A LITTLE EXTRA LOVE"}
          </span>
          <h2>{o.title}</h2>
          {o.description && <p>{o.description}</p>}
          <Link href={o.link || "/contact"}>
            {o.button || "Enquire now"} <ArrowUpRight size={15} />
          </Link>
        </div>
        {active.length > 1 && (
          <div className="offer-controls">
            <span>
              0{index + 1} / 0{active.length}
            </span>
            <button
              type="button"
              aria-label="Previous offer"
              onClick={() =>
                setIndex((i) => (i - 1 + active.length) % active.length)
              }
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              aria-label={paused ? "Play offers" : "Pause offers"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
            <button
              type="button"
              aria-label="Next offer"
              onClick={() => setIndex((i) => (i + 1) % active.length)}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        )}
      </article>
    </section>
  );
}
