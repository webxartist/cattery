import connectDB from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import { breeds, services } from "@/data/cattery";
export async function getCatteryContent() {
  let settings = {};
  try {
    await connectDB();
    settings = (await SiteSettings.findOne({ key: "global" }).lean()) || {};
  } catch {}
  let cats = breeds,
    careServices = services;
  try {
    if (settings.catsJson) {
      const parsed = JSON.parse(settings.catsJson);
      if (Array.isArray(parsed)) cats = parsed;
    }
  } catch {}
  try {
    if (settings.servicesJson) {
      const parsed = JSON.parse(settings.servicesJson);
      if (Array.isArray(parsed)) careServices = parsed;
    }
  } catch {}
  let gallery = [],
    careGuides = [],
    offers = [];
  for (const [key, target] of [
    ["galleryJson", "gallery"],
    ["careGuidesJson", "careGuides"],
    ["offersJson", "offers"],
  ]) {
    try {
      const parsed = JSON.parse(settings[key] || "[]");
      if (Array.isArray(parsed)) {
        if (target === "gallery") gallery = parsed;
        if (target === "careGuides") careGuides = parsed;
        if (target === "offers") offers = parsed;
      }
    } catch {}
  }
  return {
    settings,
    cats,
    services: careServices,
    gallery,
    careGuides,
    offers,
  };
}
