/** Real Labanees Dental clinic photography (from IMG_1591, IMG_1600, IMG_1529) */

export const CLINIC_PHOTOS = {
  reception: {
    src: "/clinic/IMG_1591.jpg",
    alt: "Labanees Dental reception desk with clinic branding",
  },
  waitingLounge: {
    src: "/clinic/IMG_1600.jpg",
    alt: "Modern waiting lounge with seating and frosted glass partitions",
  },
  lobby: {
    src: "/clinic/IMG_1529.jpg",
    alt: "Labanees Dental lobby and reception area in Muscat",
  },
} as const;

export const CLINIC_GALLERY = [
  CLINIC_PHOTOS.lobby,
  CLINIC_PHOTOS.reception,
  CLINIC_PHOTOS.waitingLounge,
] as const;

export const HERO_CLINIC_IMAGE = CLINIC_PHOTOS.lobby.src;
