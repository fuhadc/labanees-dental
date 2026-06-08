/** Real Labanees Dental clinic photography */

export const CLINIC_PHOTOS = {
  exterior: {
    src: "/clinic/clinic-exterior.webp",
    alt: "Lebanese Dental Clinic exterior at dusk in Muscat",
  },
  reception: {
    src: "/clinic/IMG_1591.webp",
    alt: "Labanees Dental reception desk with clinic branding",
  },
  waitingLounge: {
    src: "/clinic/IMG_1600.webp",
    alt: "Modern waiting lounge with seating and frosted glass partitions",
  },
  lobby: {
    src: "/clinic/IMG_1529.webp",
    alt: "Labanees Dental lobby and reception area in Muscat",
  },
  mainLobby: {
    src: "/clinic/IMG_1575.webp",
    alt: "Spacious Labanees Dental lobby with natural light and greenery",
  },
  imagingSuite: {
    src: "/clinic/IMG_1582.webp",
    alt: "Advanced panoramic dental imaging technology at Labanees Dental",
  },
} as const;

/** Pair shown in section-bridge scroll transitions */
export const BRIDGE_TRANSITION_PHOTOS = [
  CLINIC_PHOTOS.mainLobby,
  CLINIC_PHOTOS.imagingSuite,
] as const;

export const CLINIC_GALLERY = [
  CLINIC_PHOTOS.exterior,
  CLINIC_PHOTOS.lobby,
  CLINIC_PHOTOS.reception,
  CLINIC_PHOTOS.waitingLounge,
] as const;

export const HERO_CLINIC_IMAGE = CLINIC_PHOTOS.exterior.src;
