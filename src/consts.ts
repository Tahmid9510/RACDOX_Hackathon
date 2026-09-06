/* =========================================================================
   Heaven Furniture Mart — single source of truth for brand facts + SEO.
   Facts are verbatim from the brief (§7). Do not invent claims.
   Components and JSON-LD read from here so nothing drifts.
   ========================================================================= */

export const BUSINESS = {
  name: 'Heaven Furniture Mart',
  legalName: 'Heaven Furniture Mart',
  tagline: 'Designed. Crafted. Customized.',
  taglineDots: 'Designed · Crafted · Customized',
  founder: 'Abul Kalam Bhuiyan',
  founderRole: 'Managing Director',
  foundingYear: '2020',

  // Contact
  phoneDisplay: '+880 1960-481983',
  phoneHref: 'tel:+8801960481983',
  whatsapp: 'https://wa.me/8801960481983', // §7: verify this is the live WhatsApp line before shipping
  email: 'heavenfurnituremart@gmail.com',

  // Address (Chattogram, Bangladesh)
  address: {
    street: 'Agrabad Access Road',
    city: 'Chattogram',
    region: 'Chattogram',
    country: 'Bangladesh',
    countryCode: 'BD',
    full: 'Agrabad Access Road, Chattogram, Bangladesh',
  },

  // Location (from the shop's Google Maps pin)
  geo: { lat: 22.3296222, lng: 91.7930853 },
  map: {
    view: 'https://maps.app.goo.gl/9SK8CoKCYBM1dfTU9',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=22.3296222,91.7930853',
    embed:
      'https://maps.google.com/maps?q=Heaven%20Furniture%20Mart%2C%20Agrabad%20Access%20Road%2C%20Chattogram&z=16&hl=en&output=embed',
  },

  // Social profiles
  social: {
    facebook: 'https://facebook.com/HeavenFurnitureMart',
    instagram: 'https://instagram.com/heaven_furniture_ltd',
    youtube: 'https://youtube.com/@HeavenFurnitureMart',
  },

  // The MD quote — full verbatim (§7). Keep intact; use pullQuote for design impact.
  mdQuoteFull:
    'At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.',
  mdPullQuote:
    'Furniture is more than function — it is a reflection of lifestyle, taste, and comfort.',
} as const;

/* -------------------------------------------------------------------------
   SEO defaults — the canonical site + Open Graph fallbacks.
   `site` in astro.config.mjs provides the absolute origin for canonical/OG.
------------------------------------------------------------------------- */
export const SEO = {
  defaultTitle:
    'Heaven Furniture Mart — Bespoke Luxury Furniture in Chattogram',
  titleTemplate: '%s · Heaven Furniture Mart',
  description:
    'Heaven Furniture Mart is a bespoke luxury furniture studio in Chattogram, Bangladesh. Designed, crafted and customized around you — sofas, beds, dining and office furniture made in-house.',
  keywords:
    'bespoke furniture Chattogram, luxury furniture Bangladesh, custom furniture, handcrafted furniture, Heaven Furniture Mart, sofa, bed, dining table, office furniture',
  locale: 'en_US',
  // Placeholder OG image path — replace /og-image.jpg in /public with a real
  // 1200×630 branded photo before shipping (WhatsApp/Facebook link preview).
  ogImage: '/og-image.jpg',
  themeColorLight: '#F6EFE1',
  themeColorDark: '#16211F',
} as const;

// localStorage key for the persisted theme choice (shared by the pre-paint
// script and the ThemeToggle island).
export const THEME_KEY = 'hfm-theme';
