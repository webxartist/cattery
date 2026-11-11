import PageHero from "@/Components/PageHero";
import Image from "next/image";
import { catPhotos } from "@/data/cattery";
import connectDB from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
export const metadata = {
  title: "Cat Gallery",
  description:
    "A visual collection celebrating the charm, curiosity and comfort of cats at Aziz Felines Cattery.",
};
export const dynamic = "force-dynamic";
export default async function Gallery() {
  let custom = [];
  try {
    await connectDB();
    const s = await SiteSettings.findOne({ key: "global" }).lean();
    custom = JSON.parse(s?.galleryJson || "[]");
  } catch {}
  const photos = custom.length
    ? custom.map((x) => x.image || x.url).filter(Boolean)
    : [
        catPhotos.hero,
        catPhotos.kitten,
        catPhotos.portrait,
        catPhotos.ginger,
        catPhotos.sleep,
        catPhotos.play,
        catPhotos.fluffy,
        catPhotos.black,
      ];
  return (
    <>
      <PageHero
        eyebrow="LITTLE MOMENTS, BIG PERSONALITIES"
        title={
          <>
            A world of
            <br />
            <em>whiskers & wonder.</em>
          </>
        }
        description="A visual celebration of the curious, cosy and wonderfully unique world of cats."
      />
      <section className="section-pad gallery-grid">
        {photos.map((src, i) => (
          <div className={`gallery-item gallery-item-${i + 1}`} key={src}>
            <Image
              src={src}
              alt={
                custom[i]?.alt || custom[i]?.title || `Cat photography ${i + 1}`
              }
              fill
              sizes="(max-width:700px) 100vw, 33vw"
            />
            {custom[i]?.caption && (
              <span className="gallery-caption">{custom[i].caption}</span>
            )}
          </div>
        ))}
      </section>
      <p className="disclaimer gallery-note">
        These photographs are illustrative stock imagery, not a representation
        of specific cats currently at the cattery. Replace them with approved
        client-owned photographs in the admin media workflow.
      </p>
    </>
  );
}
