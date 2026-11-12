import type { StaticImageData } from "next/image";

import image1 from "../../demo imgs/Image_1.jpg";
import image2 from "../../demo imgs/Image_2.jpg";
import image3 from "../../demo imgs/Image_3.jpg";
import image4 from "../../demo imgs/Image_4.jpg";
import image5 from "../../demo imgs/Image_5.jpg";
import image6 from "../../demo imgs/Image_6.jpg";
import image7 from "../../demo imgs/Image_7.jpg";
import image8 from "../../demo imgs/Image_8.jpg";
import image9 from "../../demo imgs/Image_9.jpg";
import image10 from "../../demo imgs/Image_10.jpg";
import image11 from "../../demo imgs/Image_11.jpg";
import image12 from "../../demo imgs/Image_12.jpg";
import image13 from "../../demo imgs/Image_13.jpg";
import image14 from "../../demo imgs/Image_14.jpg";
import image15 from "../../demo imgs/Image_15.jpg";
import image16 from "../../demo imgs/Image_16.jpg";
import image17 from "../../demo imgs/Image_17.jpg";
import image18 from "../../demo imgs/Image_18.jpg";

export type MediaFormat = "landscape" | "portrait";
export type MediaOrigin = "3D Concept" | "Completed Work";

export interface DemoMediaAsset {
  id: string;
  src: StaticImageData;
  alt: string;
  caption: string;
  space: "Bedroom" | "Kitchen" | "Living & Foyer";
  format: MediaFormat;
  origin: MediaOrigin;
}

export const DEMO_MEDIA: Record<string, DemoMediaAsset> = {
  image1: {
    id: "image-1",
    src: image1,
    alt: "Youth bedroom interior visualization with gabled warm oak reading alcove, charcoal wardrobe, and window study desk",
    caption: "Gabled Alcove & Dual-Tone Wardrobe Concept",
    space: "Bedroom",
    format: "landscape",
    origin: "3D Concept",
  },
  image2: {
    id: "image-2",
    src: image2,
    alt: "Alternate daylight palette for youth study bedroom with ochre bedding and matte slate built-in storage",
    caption: "Daylight Study & Storage Elevation",
    space: "Bedroom",
    format: "landscape",
    origin: "3D Concept",
  },
  image3: {
    id: "image-3",
    src: image3,
    alt: "Contemporary bedroom visualization featuring teak-and-ivory sliding wardrobe, backlit headboard panel, and tray ceiling",
    caption: "Sliding Wardrobe & Cove-Lit Bed Backdrop",
    space: "Bedroom",
    format: "landscape",
    origin: "3D Concept",
  },
  image4: {
    id: "image-4",
    src: image4,
    alt: "Master bedroom suite with deep indigo vertical headboard wall, timber slatted study canopy, globe pendants, and oak parquet floor",
    caption: "Indigo Ribbed Backdrop & Slatted Timber Study",
    space: "Bedroom",
    format: "landscape",
    origin: "3D Concept",
  },
  image5: {
    id: "image-5",
    src: image5,
    alt: "Warm minimalist bedroom with matte charcoal accent wall, honey-oak backlit headboard, vertical mirror recess, and sliding wardrobe",
    caption: "Charcoal & Honey-Oak Backlit Suite",
    space: "Bedroom",
    format: "landscape",
    origin: "3D Concept",
  },
  image6: {
    id: "image-6",
    src: image6,
    alt: "U-shaped contemporary modular kitchen with slate-indigo lower cabinets, white upper storage, honey-wood counter, and built-in oven",
    caption: "U-Shaped Matte Indigo & Oak Kitchen",
    space: "Kitchen",
    format: "landscape",
    origin: "3D Concept",
  },
  image7: {
    id: "image-7",
    src: image7,
    alt: "Open-plan architectural kitchen featuring warm oak portal framing, white cabinetry, industrial bronze pendants, and breakfast counter",
    caption: "Oak Portal Kitchen & Stepped Breakfast Bar",
    space: "Kitchen",
    format: "landscape",
    origin: "3D Concept",
  },
  image8: {
    id: "image-8",
    src: image8,
    alt: "Compact two-tone modular kitchen visualization in soft mint and warm grey cabinetry with stone tile backsplash",
    caption: "Two-Tone Compact Modular Elevation",
    space: "Kitchen",
    format: "landscape",
    origin: "3D Concept",
  },
  image9: {
    id: "image-9",
    src: image9,
    alt: "L-shaped modular kitchen visualization with saffron-yellow and beige lower cabinets, dark granite counter, and marble-look tile",
    caption: "L-Shaped Saffron & Granite Culinary Concept",
    space: "Kitchen",
    format: "landscape",
    origin: "3D Concept",
  },
  image10: {
    id: "image-10",
    src: image10,
    alt: "Matte black and pale oak L-shaped kitchen with tall pantry, warm under-cabinet LED task lighting, and open oak shelf",
    caption: "Matte Charcoal & Pale Oak Kitchen Visualization",
    space: "Kitchen",
    format: "landscape",
    origin: "3D Concept",
  },
  image11: {
    id: "image-11",
    src: image11,
    alt: "Completed residential modular kitchen in warm mahogany finish with granite countertop and glass-panel utility door",
    caption: "Completed Mahogany Laminate Kitchen",
    space: "Kitchen",
    format: "landscape",
    origin: "Completed Work",
  },
  image12: {
    id: "image-12",
    src: image12,
    alt: "Completed modular kitchen photograph with taupe wood-grain cabinets, frosted glass lift-up overhead units, and black granite counter",
    caption: "Completed Taupe Wood-Grain Kitchen & Frosted Glazing",
    space: "Kitchen",
    format: "portrait",
    origin: "Completed Work",
  },
  image13: {
    id: "image-13",
    src: image13,
    alt: "Completed straight-line utility kitchen featuring dark walnut base cabinetry, black granite counter, and clean white backsplash",
    caption: "Completed Straight-Line Walnut Utility Kitchen",
    space: "Kitchen",
    format: "landscape",
    origin: "Completed Work",
  },
  image14: {
    id: "image-14",
    src: image14,
    alt: "Integrated living media wall and cantilevered study desk with continuous dark ribbon shelving on warm apricot walls",
    caption: "Continuous Ribbon Shelf & Study Wall",
    space: "Living & Foyer",
    format: "landscape",
    origin: "3D Concept",
  },
  image15: {
    id: "image-15",
    src: image15,
    alt: "Completed floating walnut media console installed with concealed electrical outlets",
    caption: "Floating Walnut Console Installation",
    space: "Living & Foyer",
    format: "portrait",
    origin: "Completed Work",
  },
  image16: {
    id: "image-16",
    src: image16,
    alt: "Completed bespoke TV wall unit in white and horizontal walnut grain bands with angled geometric display shelf and storage drawers",
    caption: "Completed Walnut & White Geometric Media Wall",
    space: "Living & Foyer",
    format: "portrait",
    origin: "Completed Work",
  },
  image17: {
    id: "image-17",
    src: image17,
    alt: "Feature entertainment wall visualization with hexagonal textured backdrop, backlit TV panel, and staggered illuminated niches",
    caption: "Backlit Entertainment Wall & Hexagonal Niches",
    space: "Living & Foyer",
    format: "landscape",
    origin: "3D Concept",
  },
  image18: {
    id: "image-18",
    src: image18,
    alt: "Completed espresso timber foyer partition with vertical slats, intersecting white display boxes, and glazed crockery cabinet",
    caption: "Completed Timber Slat Foyer Partition & Vitrine",
    space: "Living & Foyer",
    format: "portrait",
    origin: "Completed Work",
  },
};

export const ALL_MEDIA_LIST: DemoMediaAsset[] = Object.values(DEMO_MEDIA);

