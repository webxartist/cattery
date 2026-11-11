"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  PawPrint,
} from "lucide-react";
import AmbientCanvas from "@/Components/AmbientCanvas";
export default function HeroSlider({ settings = {}, fallbackImage }) {
  const slides = (settings.heroSlides || []).filter(
    (s) => s.media || s.image || s.video,
  );
  const items = slides.length
    ? slides
    : [
        {
          title: settings.heroTitle || "Little paws. Endless love.",
          description:
            settings.heroDescription ||
            "Thoughtful cat care, cosy stays and a whole lot of heart.",
          image: settings.heroImage || fallbackImage,
          mediaType: "image",
          eyebrow: "A FELINE SPACE IN MUMBRA, THANE",
        },
      ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[index] || items[0];
  const duration = Math.max(3500, Number(settings.heroDuration) || 6500);
  useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      duration,
    );
    return () => clearInterval(t);
  }, [paused, items.length, duration]);
  const media = current.media || current.video || current.image;
  const type = current.mediaType || (current.video ? "video" : "image");
  return (
    <section className="hero premium-hero">
      <div
        className={`hero-media-stack transition-${settings.heroTransition || "fade-zoom"}`}
        key={index}
      >
        {type === "video" ? (
          <video
            className="hero-video"
            src={media}
            autoPlay
            muted
            loop
            playsInline
            poster={current.poster || fallbackImage}
          />
        ) : (
          <div
            className="hero-photo"
            style={{ backgroundImage: `url("${media || fallbackImage}")` }}
          />
        )}
      </div>
      <div className="hero-shade" />
      {settings.enableCanvasEffects !== false && <AmbientCanvas />}
      {settings.enableParallax !== false && <div className="hero-glass-orb" />}
      <div className="hero-content" key={`copy-${index}`}>
        <span className="eyebrow eyebrow-light">
          <PawPrint size={14} />{" "}
          {current.eyebrow || "A FELINE SPACE IN MUMBRA, THANE"}
        </span>
        <h1>
          {(current.title || "Little paws. Endless love.")
            .split("|")
            .map((line, i) => (
              <span key={i}>{i > 0 ? <em>{line}</em> : line}</span>
            ))}
        </h1>
        <p>{current.description || settings.heroDescription}</p>
        <div className="hero-actions">
          <Link href="/contact" className="button button-cream">
            Let’s plan a visit <ArrowUpRight size={17} />
          </Link>
          <Link href="/services" className="text-link light-link">
            Explore our care <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="hero-note">
          <span className="note-icon">♡</span>
          <span>
            <b>Here for the love of cats</b>
            <small>Personalised care for every personality</small>
          </span>
        </div>
      </div>
      {items.length > 1 && (
        <div className="hero-controls">
          <div className="hero-dots">
            {items.map((s, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              >
                <span />
              </button>
            ))}
          </div>
          <span className="hero-counter">
            0{index + 1} <i>/ 0{items.length}</i>
          </span>
          <button
            className="hero-control"
            onClick={() =>
              setIndex((i) => (i - 1 + items.length) % items.length)
            }
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            className="hero-control"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play slider" : "Pause slider"}
          >
            {paused ? <Play /> : <Pause />}
          </button>
          <button
            className="hero-control"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      <div className="hero-side-label">CARE · COMFORT · COMPANIONSHIP</div>
      <div className="hero-scroll">
        SCROLL TO EXPLORE <span />
      </div>
    </section>
  );
}
