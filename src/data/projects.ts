import { DEMO_MEDIA, type DemoMediaAsset } from "./media";

export type ProjectCategory = "Bedroom" | "Kitchen" | "Living & Foyer";
export type ProjectStatus = "Concept Project" | "Executed Work";

export interface PortfolioProject {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  scope: string;
  classification: ProjectStatus;
  classificationNote: string;
  heroImage: DemoMediaAsset;
  coverFormat: "landscape" | "portrait";
  summary: string;
  editorialDescription: string[];
  designDetails: {
    label: string;
    value: string;
  }[];
  gallery: DemoMediaAsset[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "indigo-oak-master-suite",
    index: "01",
    title: "Indigo & Warm Oak Master Suite",
    subtitle: "Integrated Sleeping, Wardrobe & Study Sanctuary",
    category: "Bedroom",
    scope: "Residential · Interior Design",
    classification: "Concept Project",
    classificationNote: "Concept Project · 3D Interior Visualization",
    heroImage: DEMO_MEDIA.image4,
    coverFormat: "landscape",
    summary:
      "A restful bedroom composition pairing deep indigo vertical upholstery with slatted timber ceiling detailing, cove illumination, and a seamless corner workspace.",
    editorialDescription: [
      "Conceived as a calm multi-functional master retreat, this concept weaves together sleeping, storage, and study without visual clutter. Vertical indigo wall paneling anchors the bed wall while warm timber ceiling slats define an intimate desk alcove beside the window.",
      "Alternate material studies in charcoal, honey-toned oak, and ivory sliding wardrobes illustrate how lighting and surface texture adapt to each homeowner's personal palette while preserving functional circulation.",
    ],
    designDetails: [
      { label: "Spatial Focus", value: "Master Bedroom & Study Alcove" },
      {
        label: "Material Palette",
        value: "Indigo Upholstered Panels, Light Oak Veneer, Matte Ivory",
      },
      {
        label: "Lighting Strategy",
        value: "Recessed Tray Cove Lighting & Suspended Globe Pendants",
      },
      {
        label: "Presentation Status",
        value: "Concept Project (3D Visualization Series)",
      },
    ],
    gallery: [DEMO_MEDIA.image4, DEMO_MEDIA.image5, DEMO_MEDIA.image3],
  },
  {
    slug: "walnut-linear-living",
    index: "02",
    title: "Walnut & Ivory Linear Living Partition",
    subtitle: "Executed Timber Slat Screen & Geometric Media Joinery",
    category: "Living & Foyer",
    scope: "Residential · Interior Execution",
    classification: "Executed Work",
    classificationNote: "Executed Work · VCUBE Portfolio",
    heroImage: DEMO_MEDIA.image16,
    coverFormat: "portrait",
    summary:
      "On-site bespoke cabinetry uniting a horizontal walnut-and-white feature media wall with a floor-to-ceiling timber slat foyer screen and vitrine.",
    editorialDescription: [
      "Drawn from VCUBE's executed residential archive, this collection showcases custom carpentry built for clear spatial zoning in contemporary homes. Deep walnut wood-grain bands alternate with crisp matte-white paneling and an angled floating display shelf.",
      "At the entry transition, three vertical espresso-stained timber pillars frame pass-through display boxes beside a tall glazed crockery cabinet—maintaining openness and daylight while subtly separating foyer and living spaces.",
    ],
    designDetails: [
      { label: "Spatial Focus", value: "Living Media Wall & Foyer Partition" },
      {
        label: "Material Palette",
        value: "Horizontal Walnut Laminate, Matte White, Espresso Veneer & Glass",
      },
      {
        label: "Joinery Highlights",
        value: "Custom Angled Display Shelf, Concealed Cable Routing & Slatted Divider",
      },
      {
        label: "Presentation Status",
        value: "Executed Work (Completed Residential Photography)",
      },
    ],
    gallery: [DEMO_MEDIA.image16, DEMO_MEDIA.image18, DEMO_MEDIA.image15],
  },
  {
    slug: "modular-utility-kitchens",
    index: "03",
    title: "Tailored Modular Kitchen Commissions",
    subtitle: "Durable Granite Counters & Frosted-Glass Storage",
    category: "Kitchen",
    scope: "Residential · Interior Execution & Concepts",
    classification: "Executed Work",
    classificationNote: "Executed Work & Color Studies · VCUBE Portfolio",
    heroImage: DEMO_MEDIA.image12,
    coverFormat: "portrait",
    summary:
      "Realized modular kitchens crafted for daily Indian culinary workflows—combining polished granite worktops, chimney extraction, and accessible overhead storage.",
    editorialDescription: [
      "Built for longevity and effortless maintenance, VCUBE's executed modular kitchens prioritize heat-resistant black granite counters, practical stainless sink placement, and moisture-resilient wood-grain laminates.",
      "Complemented by frosted-glass lift-up shutters, deep cutlery drawers, and bright two-tone concept explorations, each configuration adapts cleanly to compact or generous kitchen footprints.",
    ],
    designDetails: [
      { label: "Spatial Focus", value: "Modular & Utility Kitchens" },
      {
        label: "Material Palette",
        value: "Taupe & Walnut Wood-Grain Laminates, Polished Granite, Frosted Glass",
      },
      {
        label: "Functional Scope",
        value: "Chimney Hood Integration, Deep Drawer Arrays & Utility Access",
      },
      {
        label: "Presentation Status",
        value: "Executed Work with Supporting Concept Palette Studies",
      },
    ],
    gallery: [
      DEMO_MEDIA.image12,
      DEMO_MEDIA.image13,
      DEMO_MEDIA.image11,
      DEMO_MEDIA.image8,
      DEMO_MEDIA.image9,
    ],
  },
  {
    slug: "monolith-oak-kitchen",
    index: "04",
    title: "Architectural Oak & Charcoal Culinary Suite",
    subtitle: "Open-Plan Peninsula & Ergonomic L-Shaped Concepts",
    category: "Kitchen",
    scope: "Residential · Interior Design",
    classification: "Concept Project",
    classificationNote: "Concept Project · 3D Interior Visualization",
    heroImage: DEMO_MEDIA.image7,
    coverFormat: "landscape",
    summary:
      "Warm timber portal framing, matte charcoal wall cabinetry, and clean work triangles tailored for social cooking and breakfast gatherings.",
    editorialDescription: [
      "Designed around smooth movement between prep, cooking, and storage zones, this kitchen series explores open-plan peninsula dining alongside high-contrast L-shaped and U-shaped layouts.",
      "Warm oak framing wraps the stepped breakfast counter under three bronze-accented pendant lights, while matte black upper cabinetry paired with warm under-cabinet LED strips delivers crisp architectural clarity.",
    ],
    designDetails: [
      { label: "Spatial Focus", value: "Open-Plan, L-Shaped & U-Shaped Kitchens" },
      {
        label: "Material Palette",
        value: "Pale Oak Framing, Matte Charcoal, Crisp White & Slate Indigo",
      },
      {
        label: "Ergonomics",
        value: "Tall Pantry Units, Integrated Oven Stack & Stepped Breakfast Bar",
      },
      {
        label: "Presentation Status",
        value: "Concept Project (3D Visualization Series)",
      },
    ],
    gallery: [DEMO_MEDIA.image7, DEMO_MEDIA.image10, DEMO_MEDIA.image6],
  },
  {
    slug: "gabled-study-bedroom",
    index: "05",
    title: "Gabled Alcove Youth Suite",
    subtitle: "Architectural Bed Niche, Library & Window Study Bench",
    category: "Bedroom",
    scope: "Residential · Interior Design",
    classification: "Concept Project",
    classificationNote: "Concept Project · 3D Interior Visualization",
    heroImage: DEMO_MEDIA.image1,
    coverFormat: "landscape",
    summary:
      "A geometric wall elevation that unifies loft storage, a softly lit gabled bed niche, open bookshelves, and a sunlit corner desk.",
    editorialDescription: [
      "Maximizing every square foot of a compact bedroom, full-height loft cabinets and diagonal two-tone wardrobe doors transition seamlessly into a warm, pitched reading alcove.",
      "A cushioned window-side bench adds concealed drawers beside open vertical book shelving, creating an inviting environment for rest, reading, and focused study.",
    ],
    designDetails: [
      { label: "Spatial Focus", value: "Youth Bedroom & Integrated Study Zone" },
      {
        label: "Material Palette",
        value: "Matte Slate Grey, Warm Light Oak & Soft Neutral Textiles",
      },
      {
        label: "Storage Architecture",
        value: "Full-Height Loft Cabinetry, Window Bench & Vertical Bookcase",
      },
      {
        label: "Presentation Status",
        value: "Concept Project (Two Colorway Visualizations)",
      },
    ],
    gallery: [DEMO_MEDIA.image1, DEMO_MEDIA.image2],
  },
  {
    slug: "sculpted-media-lounge",
    index: "06",
    title: "Geometric Lounge & Media Wall",
    subtitle: "Backlit Entertainment Panel & Integrated Home Desk",
    category: "Living & Foyer",
    scope: "Residential · Interior Design",
    classification: "Concept Project",
    classificationNote: "Concept Project · 3D Interior Visualization",
    heroImage: DEMO_MEDIA.image17,
    coverFormat: "landscape",
    summary:
      "Sculptural wall compositions balancing concealed media storage, backlit display niches, and continuous shelving that folds into a workspace.",
    editorialDescription: [
      "Designed to anchor contemporary living rooms, this concept pairs recessed cove illumination around the television backing with hexagonal display cubbies and vertical architectural shelving.",
      "A companion study elevation extends a crisp charcoal shelf into a cantilevered writing surface, showing how living and work functions can share one cohesive wall gesture.",
    ],
    designDetails: [
      { label: "Spatial Focus", value: "Living Lounge & Media Wall Composition" },
      {
        label: "Material Palette",
        value: "Warm Grey Matte Panels, Geometric Accent Wall & Natural Oak",
      },
      {
        label: "Lighting & Display",
        value: "Indirect Perimeter LED Backlight & Spotlit Niche Alcoves",
      },
      {
        label: "Presentation Status",
        value: "Concept Project (3D Visualization Series)",
      },
    ],
    gallery: [DEMO_MEDIA.image17, DEMO_MEDIA.image14],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3): PortfolioProject[] {
  const current = getProjectBySlug(currentSlug);
  const others = PORTFOLIO_PROJECTS.filter((p) => p.slug !== currentSlug);
  if (!current) return others.slice(0, limit);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

