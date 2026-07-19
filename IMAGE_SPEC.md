# Labanees Dental — Image Placeholder Spec

Complete resolution reference for every image slot on the site.

- **Current** = actual resolution of the file in `public/`
- **Display ratio** = aspect ratio the layout frames the image in
- **Recommended** = resolution to supply for a crisp, correctly-cropped result
- ⚠ = current file's aspect ratio does not match the frame (gets center-cropped)

---

## 1. Hero Background

| File | Current | Display ratio | Recommended |
|------|---------|---------------|-------------|
| `/clinic/hero-bg.jpg` | 1024×682 (3:2) | Full viewport, `cover`, focal center-right | **2560×1440** (16:9) · min 1920×1080 |

---

## 2. The Sanctuary Gallery — `ClinicSection`

Main frame is **16:10** (desktop) / **4:3** (mobile), up to ~1250px wide. Side previews are **4:3**.

| File | Role | Current | Display ratio | Recommended |
|------|------|---------|---------------|-------------|
| `/clinic/clinic-exterior.webp` | Exterior | 1024×576 (16:9) | 16:10 | **1600×1000** |
| `/clinic/IMG_1529.webp` | Lobby | 1350×2400 (portrait) ⚠ | 16:10 | **1600×1000** |
| `/clinic/IMG_1591.webp` | Reception | 1350×2400 (portrait) ⚠ | 16:10 | **1600×1000** |
| `/clinic/IMG_1600.webp` | Lounge | 1350×2400 (portrait) ⚠ | 16:10 | **1600×1000** |

---

## 3. "Labanees Standard" Showcase — `AppleStickyShowcase`

Glass frame is **16:10** (desktop) / **4:3** (mobile). Reuses the gallery files.

| File | Role | Current | Display ratio | Recommended |
|------|------|---------|---------------|-------------|
| `/clinic/IMG_1591.webp` | A Warm Welcome | 1350×2400 ⚠ | 16:10 | **1600×1000** |
| `/clinic/IMG_1600.webp` | Quiet Comfort | 1350×2400 ⚠ | 16:10 | **1600×1000** |
| `/clinic/IMG_1529.webp` | The Experience | 1350×2400 ⚠ | 16:10 | **1600×1000** |

---

## 4. Before / After Slider

Frame is **3:2** (mobile) / **16:10** (larger). Both images must share identical framing.

| File | Current | Display ratio | Recommended |
|------|---------|---------------|-------------|
| `/clinic/before_teeth.webp` | 1024×1024 (1:1) ⚠ | 16:10 | **1600×1000** |
| `/clinic/after_teeth.webp` | 1024×1024 (1:1) ⚠ | 16:10 | **1600×1000** |

---

## 5. Services — `ServicesSection` / `ImageContentSection`

Half-width column, `object-cover`, ~4:3 landscape. Currently pulling from Unsplash at 800×600.

| Slot | Display ratio | Recommended |
|------|---------------|-------------|
| Dental Implants | 4:3 | **1200×900** |
| The Hollywood Smile | 4:3 | **1200×900** |
| Porcelain Veneers | 4:3 | **1200×900** |
| Endodontic Care | 4:3 | **1200×900** |

---

## 6. Team — `TeamSection`

Frame is **4:5** portrait. Currently Unsplash at 400×500.

| Slot | Display ratio | Recommended |
|------|---------------|-------------|
| Dr. Sahar Albeini | 4:5 | **800×1000** |
| Dr. Salma Al Jahdhami | 4:5 | **800×1000** |
| Dr. May Eljaberi | 4:5 | **800×1000** |

---

## 7. Referenced in Code but Not Currently Rendered

`SectionBridge` and `HeroScrollProduct` are not mounted in `page.tsx`, so these are unused right now.

| File | Role | Current | Display ratio | If enabled |
|------|------|---------|---------------|------------|
| `/clinic/IMG_1575.webp` | mainLobby | 675×1200 | 3:4 (portrait) | **900×1200** |
| `/clinic/IMG_1582.webp` | imagingSuite | 675×1200 | 3:4 (portrait) | **900×1200** |
| `/clinic/hero-mockup.jpg` | Hero mockup | 1024×682 | 16:9 | **2560×1440** |

---

## Fallback

| File | Current | Notes |
|------|---------|-------|
| `/placeholder-dental.svg` | 1200×800 | Vector, fine as-is |

---

## Key Takeaway

The ⚠ items are the priority fix: the **Sanctuary**, **Showcase**, and **Before/After** photos are **portrait or square**, but the layout frames them as **landscape (16:10)**. They're being center-cropped, which is why they can look awkward. Re-export those as **landscape 1600×1000** and they'll fill correctly.
