import { DEMO_MEDIA, type DemoMediaAsset } from "./media";

export interface ServiceOffering {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  lead: string;
  description: string[];
  deliverables: string[];
  image: DemoMediaAsset;
  secondaryImage: DemoMediaAsset;
  inquiryValue: string;
}

export interface VastuPrinciple {
  element: string;
  zone: string;
  guidance: string;
}

export const SERVICES_DATA: ServiceOffering[] = [
  {
    id: "interior-design",
    index: "01",
    title: "Interior Design",
    shortTitle: "Interior Design",
    eyebrow: "Art, Science & Everyday Living",
    lead: "Combining art and science to create healthier, aesthetically refined, and deeply functional living and working environments.",
    description: [
      "Your space reflects your personal taste, rhythms, and daily habits. At VCUBE, interior design goes far beyond surface decoration—it is an integrated architectural process encompassing conceptual development, space planning, programming, material research, site inspections, and turnkey execution.",
      "From bespoke bedrooms, ergonomic modular kitchens, and custom TV media units to timber-slat foyers, wardrobes, pooja rooms, and commercial offices, every detail is planned and managed with precision.",
    ],
    deliverables: [
      "Conceptual Development & 3D Visualizations",
      "Space Planning & Ergonomic Layout",
      "Modular Kitchens, Wardrobes & Custom Joinery",
      "False Ceiling, Lighting & Material Selection",
      "Site Inspections & Turnkey Interior Execution",
    ],
    image: DEMO_MEDIA.image10,
    secondaryImage: DEMO_MEDIA.image16,
    inquiryValue: "Interior Design",
  },
  {
    id: "architecture-construction",
    index: "02",
    title: "Architecture & Construction",
    shortTitle: "Architecture & Construction",
    eyebrow: "Residential & Commercial Building",
    lead: "End-to-end residential and commercial construction—guided from initial design layouts and foundation work through final handover.",
    description: [
      "Building a home is one of life's most meaningful milestones. VCUBE brings creativity, technical intelligence, and practical construction discipline together to turn your vision into a structurally sound, enduring residence or commercial building.",
      "Recognizing that every client holds distinct preferences and budgets, we tailor construction methods without compromising material strength or long-term durability—overseeing everything from architectural planning and foundation laying to final finishes.",
    ],
    deliverables: [
      "Architectural Planning & Design Layouts",
      "Residential & Commercial Construction",
      "Foundation to Turnkey Structural Execution",
      "Quality Materials for Strength & Durability",
      "Budget-Aligned Construction Management",
    ],
    image: DEMO_MEDIA.image14,
    secondaryImage: DEMO_MEDIA.image18,
    inquiryValue: "Architecture & Construction",
  },
  {
    id: "vastu-consultation",
    index: "03",
    title: "Vastu Consultation",
    shortTitle: "Vastu Consultation",
    eyebrow: "Harmony of the Five Elements",
    lead: "Integrating traditional Vastu Shastra thoughtfully into modern architectural plans and calm, balanced interiors.",
    description: [
      "Vastu Shastra guides the subtle flow of natural energy within a residence or commercial space by balancing directional forces and the five elements. Planned thoughtfully at the drawing stage, Vastu harmonizes your home without triggering costly late-stage structural alterations.",
      "Our team pairs directional principles with serene contemporary interior architecture—supporting peace, clarity, and spatial equilibrium across homes and offices.",
    ],
    deliverables: [
      "New Plan Vastu Alignment Before Construction",
      "Five-Element & Directional Zoning Guidance",
      "Room Orientation for Homes & Commercial Offices",
      "Practical Remedies Without Unnecessary Rework",
      "Seamless Integration with Interior Layouts",
    ],
    image: DEMO_MEDIA.image3,
    secondaryImage: DEMO_MEDIA.image4,
    inquiryValue: "Vastu Consultation",
  },
];

export const VASTU_PRINCIPLES: VastuPrinciple[] = [
  {
    element: "Kitchen",
    zone: "Agni Moolai (South-East) / Vaayu Moolai (North-West)",
    guidance:
      "Ideally positioned in Agni Moolai as first priority, followed by Vaayu Moolai, with cooking and preparation zones aligned accordingly.",
  },
  {
    element: "Bedroom",
    zone: "Directional Rest Alignment",
    guidance:
      "For students and focused rest, positioning the head toward the East supports positive energy and mental clarity.",
  },
  {
    element: "Pooja Room",
    zone: "North-East Clarity",
    guidance:
      "Keep Vaayu Moolai unobstructed by heavy structural loads to preserve cosmic balance and household prosperity.",
  },
  {
    element: "Wardrobe / Beuro",
    zone: "South-West or North-West Wall",
    guidance:
      "Best placed in the South-West corner against South or West walls, or in the North-West along the North wall facing East.",
  },
  {
    element: "Staircase",
    zone: "Internal & External Placement",
    guidance:
      "Internal stairs may sit centrally along South or West walls (never in room corners); exterior stairs can be placed anywhere except the North-East.",
  },
  {
    element: "Water Tank",
    zone: "South-West Load Balance",
    guidance:
      "Overhead weight elements such as water tanks are ideally positioned in the South-West corner for directional stability.",
  },
];

