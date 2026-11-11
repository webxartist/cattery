import connectDB from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
export default async function SiteStructuredData() {
  let s = {};
  try {
    await connectDB();
    s = (await SiteSettings.findOne({ key: "global" }).lean()) || {};
  } catch {}
  const address =
    s.address ||
    "Moti Baugh, Tetavli, Kausa, Mumbra, Thane, Maharashtra 400612, India";
  const parts = address.split(",").map((x) => x.trim());
  const data = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: s.siteName || "Aziz Felines Cattery",
    url:
      s.canonicalBaseUrl ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.azizfelinescattery.in",
    telephone: s.phone || "+91-77000-04469",
    email: s.email || "azizfelinescattery@gmail.com",
    foundingDate: "2015",
    description:
      s.seoDescription ||
      "Cat boarding, daycare, grooming and feline care in Mumbra, Thane.",
    address: {
      "@type": "PostalAddress",
      streetAddress: parts.slice(0, 3).join(", "),
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      postalCode: "400612",
      addressCountry: "IN",
    },
    areaServed: (
      s.serviceAreas || "Mumbra, Thane, Diva, Kalwa, Mumbai, Navi Mumbai"
    )
      .split(",")
      .map((x) => x.trim()),
    openingHours: s.officeHours || "Mo-Su 09:00-23:00",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
