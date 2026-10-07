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
  heroBg: {
    src: "/clinic/hero-smile-bg.webp",
    alt: "Lebanese Dental Clinic smile precision aesthetic dentistry",
  },
  heroBgDesktop: {
    src: "/clinic/hero-smile-bg-desktop.webp",
    alt: "Lebanese Dental Clinic smile precision aesthetic dentistry desktop widescreen",
  },
  receptionMain: {
    src: "/clinic/clinic-reception-main.webp",
    alt: "Lebanese Dental Clinic main reception desk with LED lit logo",
  },
  planterLobby: {
    src: "/clinic/clinic-planter-lobby.webp",
    alt: "Illuminated glass planter feature wall in Lebanese Dental Clinic lobby",
  },
  treatmentSuite: {
    src: "/clinic/clinic-treatment-suite.webp",
    alt: "Advanced dental treatment room with ergonomic dental chair",
  },
  consultationSuite: {
    src: "/clinic/clinic-consultation-suite.webp",
    alt: "Clinical consultation suite with modern dental technology",
  },
  operatingRoom: {
    src: "/clinic/clinic-operating-room.webp",
    alt: "State of the art dental operating suite with precision equipment",
  },
  waitingLoungeArea: {
    src: "/clinic/clinic-waiting-lounge.webp",
    alt: "Serene patient lounge area with frosted glass privacy walls",
  },
} as const;

/** Pair shown in section-bridge scroll transitions */
export const BRIDGE_TRANSITION_PHOTOS = [
  CLINIC_PHOTOS.mainLobby,
  CLINIC_PHOTOS.imagingSuite,
] as const;

export const CLINIC_GALLERY = [
  { ...CLINIC_PHOTOS.exterior, label: "Exterior" },
  { ...CLINIC_PHOTOS.lobby, label: "Lobby" },
  { ...CLINIC_PHOTOS.reception, label: "Reception" },
  { ...CLINIC_PHOTOS.waitingLounge, label: "Lounge" },
] as const;

export const HERO_CLINIC_IMAGE = CLINIC_PHOTOS.exterior.src;
