import connectDB from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
export default async function PageHero({ eyebrow, title, description }) {
  let s = {};
  try {
    await connectDB();
    s = (await SiteSettings.findOne({ key: "global" }).lean()) || {};
  } catch {}
  const src = s.pageHeroMediaUrl || "",
    type = s.pageHeroMediaType || "image";
  return (
    <section className="page-hero premium-page-hero">
      {src && (
        <div className="page-hero-media">
          {type === "video" ? (
            <video src={src} autoPlay muted loop playsInline />
          ) : (
            <div style={{ backgroundImage: `url("${src}")` }} />
          )}
        </div>
      )}
      <div className="page-hero-overlay" />
      <div className="page-hero-inner">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="" />
    </section>
  );
}
