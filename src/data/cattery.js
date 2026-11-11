export const catPhotos = {
  hero: "https://i.pinimg.com/736x/cd/f1/7f/cdf17fbedf85229d9ae50ae994d623c1.jpg",
  kitten:
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=85",
  portrait:
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1000&q=85",
  ginger:
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1000&q=85",
  sleep:
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1000&q=85",
  play: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1000&q=85",
  fluffy:
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1000&q=85",
  black:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=85",
};
export const services = [
  {
    slug: "cat-boarding",
    title: "Cat Boarding",
    eyebrow: "A cosy stay away from home",
    desc: "A considered boarding experience for cats while their humans are away. Share your cat’s routine, food preferences and comfort needs with our team before the stay.",
    image: catPhotos.sleep,
    icon: "⌂",
    features: [
      "Stay planning around your cat’s routine",
      "Feeding and care instructions shared by you",
      "Daily observation and updates by arrangement",
      "Pickup and drop support available at additional charge",
    ],
  },
  {
    slug: "cat-daycare",
    title: "Cat Daycare",
    eyebrow: "Little visits, familiar care",
    desc: "Daytime care for cats when you need an extra pair of hands. Enquire about timings, suitability and the routine that works best for your cat.",
    image: catPhotos.play,
    icon: "☼",
    features: [
      "Daytime care enquiries",
      "Individual routine and dietary notes",
      "Calm handling and supervised care",
      "Flexible arrangements by prior discussion",
    ],
  },
  {
    slug: "cat-grooming",
    title: "Cat Grooming",
    eyebrow: "Gentle care, tidy coats",
    desc: "Grooming and coat-care support tailored to your cat’s coat type, temperament and comfort. We recommend discussing matting or skin concerns before booking.",
    image: catPhotos.fluffy,
    icon: "✧",
    features: [
      "Coat brushing and grooming support",
      "Hair trimming by suitability",
      "Sanitary care",
      "Pre-appointment discussion for nervous cats",
    ],
  },
  {
    slug: "foster-medical-care",
    title: "Foster & Medical Care",
    eyebrow: "Extra support when it matters",
    desc: "Paid foster and medicare care facility enquiries for cats that need additional attention. Medical decisions and treatment must be guided by a qualified veterinarian.",
    image: catPhotos.portrait,
    icon: "♡",
    features: [
      "Foster-care enquiries",
      "Care coordination and observation",
      "Veterinary consultation coordination",
      "Discuss medical needs before admission",
    ],
  },
  {
    slug: "veterinary-diagnostics",
    title: "Veterinary Diagnostics",
    eyebrow: "Helping you arrange the next step",
    desc: "Enquire about access to veterinary diagnostics including blood tests and other laboratory tests. Test selection and interpretation belong to your veterinarian.",
    image: catPhotos.kitten,
    icon: "＋",
    features: [
      "Blood-test facility enquiries",
      "Laboratory test coordination",
      "Veterinary-led test recommendations",
      "Share previous reports when discussing requirements",
    ],
  },
  {
    slug: "pet-transport",
    title: "Pet Transport",
    eyebrow: "Thoughtful journeys for pets",
    desc: "Pet transport support across India through experienced professionals, with pickup and drop options available. Routes, dates, documentation and charges are confirmed individually.",
    image: catPhotos.ginger,
    icon: "↗",
    features: [
      "Pet transport enquiries across India",
      "Pickup and drop service available",
      "Route and travel planning discussion",
      "Charges depend on distance and requirements",
    ],
  },
];
export const breeds = [
  {
    slug: "persian-cats",
    name: "Persian Cats",
    tag: "The gentle companion",
    image: catPhotos.fluffy,
    description:
      "Persian cats are known for their long, luxurious coats, round faces and relaxed presence. Their coat needs regular, gentle grooming and their eyes may need routine cleaning.",
    care: [
      "Daily coat checks and regular brushing",
      "Keep eyes and face clean as advised by your vet",
      "Provide a calm indoor environment",
      "Schedule routine veterinary health checks",
    ],
  },
  {
    slug: "indian-domestic-cats",
    name: "Indian Domestic Cats",
    tag: "Bright, adaptable & full of character",
    image: catPhotos.ginger,
    description:
      "Indian domestic cats come in many coat patterns and personalities. They can make affectionate, playful companions when their individual needs, health and environment are respected.",
    care: [
      "Provide daily play and enrichment",
      "Offer balanced food and fresh water",
      "Keep vaccinations and parasite prevention up to date",
      "Create safe resting and hiding spaces",
    ],
  },
  {
    slug: "longhair-cats",
    name: "Long-Hair Cats",
    tag: "A little extra coat care",
    image: catPhotos.sleep,
    description:
      "Long-haired cats have beautiful coats that benefit from consistent grooming. Regular checks help identify tangles early and keep handling comfortable.",
    care: [
      "Brush gently and frequently",
      "Check behind ears, under legs and around the collar",
      "Introduce grooming in short positive sessions",
      "Ask a veterinarian about skin or coat changes",
    ],
  },
  {
    slug: "kittens",
    name: "Kittens & Early Care",
    tag: "Small paws, big beginnings",
    image: catPhotos.kitten,
    description:
      "Kittens need age-appropriate nutrition, vaccination guidance, safe socialisation and plenty of rest. Speak with a veterinarian about an individual kitten’s health and development.",
    care: [
      "Follow a veterinarian-approved vaccination plan",
      "Use kitten-appropriate nutrition",
      "Keep the home safe and kitten-proofed",
      "Build confidence through gentle, positive handling",
    ],
  },
];
