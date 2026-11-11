import PageHero from "@/Components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Heart, PawPrint, ShieldCheck, ArrowUpRight } from "lucide-react";
import { catPhotos } from "@/data/cattery";
export const metadata = {
  title: "About Aziz Felines Cattery",
  description:
    "Get to know Aziz Felines Cattery, a feline care facility serving Mumbra and Thane since 2015.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="OUR STORY · SINCE 2015"
        title={
          <>
            For the love
            <br />
            of <em>every feline.</em>
          </>
        }
        description="A local cattery and feline care space built around a simple idea: cats deserve patience, kindness and thoughtful attention."
      />
      <section className="photo-story about-story">
        <div className="story-image">
          <Image
            src={catPhotos.play}
            alt="Cat relaxing in a comfortable space"
            fill
            sizes="50vw"
          />
        </div>
        <div className="story-content">
          <span className="eyebrow">A LITTLE ABOUT US</span>
          <h2>
            Because they’re
            <br />
            <em>family, too.</em>
          </h2>
          <p>
            Aziz Felines Cattery has been serving cat parents since 2015. Based
            in Mumbra, Thane, we offer a range of feline care services — from
            boarding and daycare to grooming, foster and medical care support,
            diagnostics coordination and pet transport.
          </p>
          <p>
            We believe good care begins with a conversation. Tell us about your
            cat’s personality, daily routine, food and any special requirements
            so we can discuss the most suitable arrangement.
          </p>
          <div className="promise-list">
            <div>
              <Heart />
              <span>
                <b>Kindness first</b>
                <small>Every cat deserves gentle, respectful handling.</small>
              </span>
            </div>
            <div>
              <PawPrint />
              <span>
                <b>Individual attention</b>
                <small>
                  We want to understand the cat, not just the booking.
                </small>
              </span>
            </div>
            <div>
              <ShieldCheck />
              <span>
                <b>Clear communication</b>
                <small>Discuss service details and expectations upfront.</small>
              </span>
            </div>
          </div>
          <Link href="/contact" className="button button-dark">
            Connect with us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="values-band">
        <div>
          <span>01</span>
          <h3>Comfort</h3>
          <p>Respecting routines and familiar comforts.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Care</h3>
          <p>Thoughtful attention to each cat’s needs.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Trust</h3>
          <p>Open conversations with pet parents.</p>
        </div>
      </section>
    </>
  );
}
