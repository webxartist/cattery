# Aziz Felines Cattery — Website & Admin CMS

A full responsive Next.js App Router website redesign for Aziz Felines Cattery, using the uploaded Ocean Valves project ZIP as the technical starter structure. The public experience has been rebuilt for a feline care brand with editorial photography, warm premium styling, responsive layouts, subtle zoom/parallax-inspired image movement, enquiry capture and location-focused content.

## Included pages
- Home: visual hero, brand story, care services, cat profile previews, local visit CTA and lead form.
- Our Cats: educational cat/breed/life-stage profiles and individual detail pages.
- Cat Care: service overview and individual boarding, daycare, grooming, foster/medical care, diagnostics and transport pages.
- Gallery, About, Contact with map, FAQs, Privacy and Terms.
- Admin login, dashboard, content settings, media upload and enquiry review.
- Sitemap, robots rules, metadata, local business structured data and accessible form labels.

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add a MongoDB Atlas connection, unique admin username/password, a random session secret of at least 32 characters and the public site URL.
5. Run `npm run dev` and open `http://localhost:3000`.
6. Admin: `http://localhost:3000/admin/login`.

## Admin capabilities
- Edit business name, tagline, homepage heading/description and hero image/slides.
- Edit about content, phone numbers, email, WhatsApp, address, business hours, map/Google Business Profile URL, service areas and social links.
- Edit SEO title/description, canonical URL and social sharing image.
- Upload images through the media uploader and copy their returned paths.
- Review customer enquiries.

The homepage reads the first configured hero slide and business contact/location settings when MongoDB is connected. Remaining visual profile/service content is maintained in `src/data/cattery.js`; edit that file to change cat guides, service descriptions, cards and their image URLs. The admin dashboard clearly identifies these code-managed content areas; a full visual drag-and-drop CMS for every cat and service entry is not included in this starter delivery.

## Important before launch
- Gallery and cat images currently use illustrative Unsplash photography. Replace them with Aziz Felines-owned/approved photos before representing them as actual cats, premises or customer outcomes.
- Confirm current services, service availability, opening hours, address pin, phone numbers, transport coverage and all prices with the business owner.
- Veterinary services are described as diagnostics/medical-care enquiries and coordination. Do not publish claims of veterinary diagnosis, treatment or qualifications unless verified.
- No kitten inventory, breed pedigree, health guarantee, certifications, customer reviews or pricing has been invented.
- Configure persistent media storage (Cloudinary or S3-compatible storage) for production. Local uploads on serverless hosting may not persist across deployments.
- Configure Google Business Profile, Search Console, analytics, consent/privacy wording and real review integration after client approval.

## Technical stack
Next.js App Router, React, MongoDB/Mongoose, Lucide icons, CSS responsive design and the starter project's authenticated admin APIs.

## Premium visual experience update (November 2026)

The current update adds:
- A glass-finish, champagne-accented sticky navigation with scroll response and a logo URL setting.
- A homepage cinematic slider supporting image and MP4/WebM video slides, autoplay timing, pause/play, previous/next and slide dots.
- Fade/zoom, soft-slide and crossfade visual transition options, plus a lightweight canvas particle layer and CSS depth/orb effects.
- A one-time animated cat welcome screen on the first visit in a browser session.
- Shared image/video heading banners for Cats, Services, Gallery, About and Contact pages.
- More dimensional cat and service cards, hover lift and soft premium shadows.
- Admin settings for logo URL, hero slides, media type, slide duration, transition style and inner-page banner media. The media uploader accepts images and MP4/WebM videos up to 50 MB.

### Hero slide format in Admin
One slide per line:
`Heading | Description | Media URL | Eyebrow | image/video`

Example:
`A little more love | Gentle feline care in Mumbra | /uploads/media/hero.mp4 | AZIZ FELINES | video`

Use `image` for image slides and `video` for MP4/WebM slides. Upload the actual approved Aziz Felines logo in Admin and paste its URL in **Brand logo URL**. The ZIP did not contain a separate approved logo asset, so the existing paw emblem remains the fallback until the client logo is uploaded.

### Media hosting note
The built-in upload route stores files under `public/uploads/media`, which is suitable for local testing. For a Vercel production deployment, connect persistent object storage (for example Cloudinary or S3-compatible storage) before relying on admin uploads, because the Vercel filesystem is not durable between deployments.

The admin also includes independent switches for the welcome loader, canvas particle layer, 3D/parallax hero depth and dimensional card hover effects. Turn effects on or off without editing code.

## Aziz Felines visual identity & expanded CMS (November 2026)

- The supplied circular Aziz Felines logo is installed at `public/aziz-felines-logo.png` and recoloured in a forest-green, sage and champagne-gold palette. The header and footer use this logo by default; an uploaded `logoUrl` in the admin settings overrides it.
- The public site includes a visitor-controlled light/dark mode toggle. The saved preference is stored in the visitor's browser; Admin can choose the initial system/light/dark default.
- The homepage includes an optional offer campaign slider. Add multiple offer records in Admin to enable timed slide changes, previous/next controls, pause/play and image/video media.
- The Gallery page reads `galleryJson`; the `/cat-care` page reads `careGuidesJson`; the homepage offer slider reads `offersJson`.
- Admin > Website content includes Add and Remove last helpers for cat profiles, care services, gallery images, care guides and offer slides. Edit the JSON fields and save to publish changes. Keep each value valid JSON.
- The Admin media uploader can upload images and MP4/WebM video. On Vercel, connect persistent storage (Cloudinary or another durable object store) before using uploads in production; local filesystem uploads on serverless hosting are not persistent.

### CMS record examples

Gallery item: `{"title":"Quiet corner","image":"/uploads/media/quiet.webp","alt":"A cat resting in a sunny room","caption":"A little moment of calm"}`

Care guide: `{"slug":"new-cat-home","title":"Welcoming a cat home","summary":"A calm first-day checklist","content":"Prepare a quiet room, familiar bedding, food, water and a litter tray. Let the cat explore at its own pace.","image":"/uploads/media/home.webp"}`

Offer slide: `{"title":"A calmer stay for your cat","description":"Ask our team about current availability.","eyebrow":"A LITTLE EXTRA LOVE","media":"/uploads/media/offer.mp4","mediaType":"video","link":"/contact","button":"Enquire now","active":true}`

Cat profiles and services retain the existing schemas described in the Admin editor. Use only accurate, client-approved claims, prices, availability, medical-care statements and testimonials.
