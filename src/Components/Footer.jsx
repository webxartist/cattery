import Link from "next/link";
import { PawPrint, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import connectDB from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";

export default async function Footer() {
  let s = {};

  try {
    await connectDB();
    s = (await SiteSettings.findOne({ key: "global" }).lean()) || {};
  } catch {}

  const phone = s.phone || "+91 77000 04469";
  const email = s.email || "azizfelinescattery@gmail.com";

  const address =
    s.address ||
    "Moti Baugh, Tetavli, Kausa, Mumbra, Thane, Maharashtra 400612";

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <span className="brand-mark">
              <PawPrint size={25} />
            </span>

            <span>
              <b>{s.siteName || "AZIZ FELINES"}</b>
              <small>CATTERY & FELINE CARE</small>
            </span>
          </Link>

          <p>
            {s.footerText ||
              "A calm, caring space for cats and the people who love them. Discover our feline care services in Mumbra, Thane."}
          </p>

          {s.instagram && (
            <a
              className="footer-social"
              href={s.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="18"
                  cy="6"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              Follow our moments
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        <div>
          <h4>Explore</h4>
          <Link href="/cats">Our cats</Link>
          <Link href="/services">Care services</Link>
          <Link href="/gallery">Photo gallery</Link>
          <Link href="/about">About us</Link>
          <Link href="/faq">FAQs</Link>
        </div>

        <div>
          <h4>Our care</h4>
          <Link href="/services/cat-boarding">Cat boarding</Link>
          <Link href="/services/cat-daycare">Cat daycare</Link>
          <Link href="/services/cat-grooming">Grooming</Link>
          <Link href="/services/pet-transport">Pet transport</Link>
          <Link href="/services/foster-medical-care">
            Foster & medical care
          </Link>
        </div>

        <div className="footer-contact">
          <h4>Say hello</h4>

          <p>
            <MapPin size={17} />
            {address}
          </p>

          <a href={`tel:${phone.replace(/[^+0-9]/g, "")}`}>
            <Phone size={17} />
            {phone}
          </a>

          <a href={`mailto:${email}`}>
            <Mail size={17} />
            {email}
          </a>

          <Link href="/contact" className="footer-map">
            Get in touch <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {s.siteName || "Aziz Felines Cattery"}.
          All rights reserved.
        </span>

        <span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </span>

        <span>Made with care for cats ♡</span>
      </div>
    </footer>
  );
}
