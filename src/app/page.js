import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Heart,
  PawPrint,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  Star,
  MoveRight,
} from "lucide-react";

import EnquiryForm from "@/Components/EnquiryForm";
import HeroSlider from "@/Components/HeroSlider";
import OfferBanner from "@/Components/OfferBanner";
import { catPhotos } from "@/data/cattery";
import { getCatteryContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

// Convert MongoDB / Mongoose data into plain JSON-compatible values
function serializeData(data) {
  return JSON.parse(JSON.stringify(data ?? null));
}

export default async function Home() {
  const content = await getCatteryContent();

  // Serialize all database data before passing it to components
  const settings = serializeData(content.settings || {});
  const breeds = serializeData(content.cats || []);
  const services = serializeData(content.services || []);
  const offers = serializeData(content.offers || []);

  const activeSlide = (settings.heroSlides || [])[0] || {};

  const heroImage = activeSlide.image || settings.heroImage || catPhotos.hero;

  const heroTitle = settings.heroTitle || "Little paws. Endless love.";

  const heroDescription =
    activeSlide.description ||
    settings.heroDescription ||
    "Thoughtful cat care, cosy stays and a whole lot of heart — because every cat deserves to feel safe, seen and special.";

  return (
    <>
      <HeroSlider settings={settings} fallbackImage={catPhotos.hero} />

      <OfferBanner offers={offers} />

      <section className="intro-section section-pad">
        <div className="intro-copy">
          <span className="eyebrow">A WARM WELCOME</span>
          <h2>
            More than a cattery.
            <br />
            <em>A place to feel at home.</em>
          </h2>
        </div>

        <div className="intro-body">
          <p>
            Whether your cat needs a comfortable stay, a little grooming,
            daytime care or extra support, we’re here to help you plan the right
            next step.
          </p>

          <Link href="/about" className="under-link">
            Get to know Aziz Felines <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="photo-story">
        <div className="story-image">
          <Image
            src={catPhotos.portrait}
            alt="Curious cat looking towards the camera"
            fill
            sizes="50vw"
          />
        </div>

        <div className="story-content">
          <span className="eyebrow">THE AZIZ FELINES PROMISE</span>

          <h2>
            Care that starts
            <br />
            with <em>understanding.</em>
          </h2>

          <p>
            Every cat has a different personality, pace and comfort zone. We
            encourage pet parents to share routines, preferences and special
            requirements before arranging a service.
          </p>

          <div className="promise-list">
            <div>
              <Heart />
              <span>
                <b>Gentle by nature</b>
                <small>Respecting every cat’s individual comfort.</small>
              </span>
            </div>

            <div>
              <ShieldCheck />
              <span>
                <b>Care with clarity</b>
                <small>
                  Discuss needs, suitability and arrangements upfront.
                </small>
              </span>
            </div>

            <div>
              <Sparkles />
              <span>
                <b>Little details matter</b>
                <small>From familiar food to favourite routines.</small>
              </span>
            </div>
          </div>

          <Link href="/contact" className="button button-dark">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW WE CAN HELP</span>
            <h2>
              Care for every
              <br />
              <em>chapter of cat life.</em>
            </h2>
          </div>

          <Link href="/services" className="under-link">
            All care services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="service-grid">
          {services.slice(0, 4).map((s, i) => (
            <Link
              href={`/services/${s.slug}`}
              className={`service-card service-card-${i + 1}`}
              key={s.slug}
            >
              <div className="service-image">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>

              <div className="service-info">
                <span className="service-number">0{i + 1} / FELINE CARE</span>

                <h3>{s.title}</h3>
                <p>{s.desc}</p>

                <span className="circle-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cats-section section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">GET TO KNOW FELINES</span>
            <h2>
              Every cat has
              <br />
              <em>a story to tell.</em>
            </h2>
          </div>

          <Link href="/cats" className="under-link">
            Explore cat profiles <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="breed-grid">
          {breeds.slice(0, 3).map((b) => (
            <Link href={`/cats/${b.slug}`} className="breed-card" key={b.slug}>
              <div className="breed-image">
                <Image src={b.image} alt={b.name} fill sizes="33vw" />
              </div>

              <div className="breed-copy">
                <small>{b.tag}</small>
                <h3>{b.name}</h3>

                <span>
                  Learn about their care <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="disclaimer">
          Breed and care guides are educational. They do not represent current
          kitten availability or a guarantee of breed, pedigree or health
          status.
        </p>
      </section>

      <section className="location-band">
        <div
          className="location-art"
          style={{ backgroundImage: `url(${catPhotos.black})` }}
        />

        <div className="location-copy">
          <span className="eyebrow eyebrow-light">COME SAY HELLO</span>

          <h2>
            Your cat’s next
            <br />
            <em>happy place.</em>
          </h2>

          <p>
            We’re in Moti Baugh, Kausa, Mumbra, Thane. Reach out before visiting
            so we can understand what you need and arrange a suitable time.
          </p>

          <div className="location-actions">
            <a
              href={`tel:${(settings.phone || "+91 77000 04469").replace(/[^+0-9]/g, "")}`}
              className="button button-cream"
            >
              <Phone size={16} /> Call Aziz Felines
            </a>

            <a
              href={
                settings.googleBusinessUrl ||
                "https://www.google.com/maps/search/?api=1&query=Aziz+Felines+Cattery+Mumbra+Thane"
              }
              target="_blank"
              rel="noreferrer"
              className="text-link light-link"
            >
              <MapPin size={16} /> Find our location
            </a>
          </div>
        </div>
      </section>

      <section className="enquiry-section section-pad">
        <div className="enquiry-aside">
          <span className="eyebrow">YOUR NEXT STEP</span>

          <h2>
            Let’s make
            <br />
            tails <em>happy.</em>
          </h2>

          <p>
            Tell us a little about your cat and the care you’re looking for. Our
            team will get back to you to discuss the details.
          </p>

          <div className="contact-mini">
            <span>
              <Phone size={17} /> +91 77000 04469
            </span>

            <span>
              <MapPin size={17} /> Mumbra, Thane, Maharashtra
            </span>
          </div>
        </div>

        <EnquiryForm source="Homepage enquiry" />
      </section>
    </>
  );
}
