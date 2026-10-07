export type Product = {
  slug: string;
  name: string;
  category: string;
  brand?: string;
  summary: string;
  applications?: string[];
  specs?: string[];
  image: string;
  badge?: string;
};

const assets = {
  hero: "/images/hero-1.mp4",
  lighting: "/products/lights.webp",
  decorative: "/products/switch.jpg",
};

export const seasonalCampaign = {
  eyebrow: "Seasonal electrical edit",
  title: "Powering every space with excellence.",
  description:
    "Decorative, ambient, and essential electrical products for residential, commercial, and industrial requirements.",
  image: assets.hero,
};

export const categories = [
  {
    name: "Appliances & Cooling",
    slug: "appliances",
    count: "ACs, fans, cooktops & home appliances",
    image: "/products/ac.jpg",
  },
  {
    name: "Lighting & Wiring",
    slug: "lighting-wiring",
    count: "LEDs, decorative lighting, wires & switches",
    image: "/products/lights.webp",
  },
  {
    name: "Protection & Hardware",
    slug: "protection-hardware",
    count: "Junction boxes, conduits & distribution",
    image: "/products/pipes.png",
  },
];

export const products: Product[] = [
  {
    slug: "led-lighting",
    name: "LED Lighting",
    category: "Lighting & Wiring",
    brand: "Multiple established brands",
    summary: "Premium indoor and outdoor illumination fixtures delivering high lumens per watt.",
    applications: ["Retail spaces", "Offices", "Facade illumination"],
    specs: [
      "High luminous efficiency",
      "Long operating lifespan",
      "Multiple color temperatures",
    ],
    image: "/products/lights.webp",
  },
  {
    slug: "fans",
    name: "Fans",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Energy-saving modern ceiling fans designed for optimal air delivery and silent operation.",
    applications: ["Living rooms", "Bedrooms", "Commercial spaces"],
    specs: [
      "Low power consumption",
      "Silent aerodynamic blades",
      "Remote control enabled",
    ],
    image: "/products/fan.jpg",
  },
  {
    slug: "air-coolers",
    name: "Air Coolers",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Heavy-duty cooling units built for robust performance in industrial and large spaces.",
    applications: ["Open halls", "Workshops", "Large patios"],
    specs: [
      "High air delivery capacity",
      "Honeycomb cooling pads",
      "Inverter compatible",
    ],
    image: "/products/cooler.jpg",
  },
  {
    slug: "induction-cooktops",
    name: "Induction Cooktops",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Precision heating appliance with multiple safety features and digital touch interface.",
    applications: ["Modular kitchens", "Pantry setups", "Compact apartments"],
    specs: [
      "Preset cooking menus",
      "Overheat protection",
      "Digital display controls",
    ],
    image: "/products/induction.jpg",
  },
  {
    slug: "electric-stoves",
    name: "Electric Stoves",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Durable multi-burner stove setup optimized for heavy-duty commercial or residential kitchens.",
    applications: ["Home kitchens", "Restaurants", "Cafeterias"],
    specs: [
      "Multi-burner configuration",
      "Heavy gauge structure",
      "Easy-clean glass top",
    ],
    image: "/products/stove.jpg",
  },
  {
    slug: "kitchen-chimneys",
    name: "Kitchen Chimneys",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "High-suction modular kitchen chimneys with auto-clean filter technology.",
    applications: ["Modern kitchens", "Open floor plans"],
    specs: [
      "Powerful suction capacity",
      "Thermal auto-clean function",
      "Touch control panel",
    ],
    image: "/products/chimney.webp",
  },
  {
    slug: "ovens",
    name: "Ovens",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Multi-functional baking and grilling appliance with accurate digital thermostat controls.",
    applications: ["Baking", "Grilling", "Commercial kitchens"],
    specs: [
      "Even heat distribution",
      "Digital temperature settings",
      "Multi-tier cooking racks",
    ],
    image: "/products/oven.jpg",
  },
  {
    slug: "water-geysers",
    name: "Water Geysers",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Corrosion-resistant high-pressure tank water heater with rapid heating elements.",
    applications: ["Bathrooms", "Commercial washrooms", "Salons"],
    specs: [
      "High pressure resistance",
      "Energy star rating",
      "Advanced safety thermostat",
    ],
    image: "/products/geyser.jpg",
  },
  {
    slug: "refrigerators",
    name: "Refrigerators",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "Energy-star rated cooling storage engineered for uniform temperature distribution.",
    applications: ["Retail stores", "Commercial pantries", "Food outlets"],
    specs: [
      "Uniform cooling circulation",
      "Durable shelving units",
      "Frost-free technology",
    ],
    image: "/products/refridgerator.jpg",
  },
  {
    slug: "wires-and-cables",
    name: "Wires & Cables",
    category: "Lighting & Wiring",
    brand: "Multiple established brands",
    summary: "Flame-retardant low-smoke copper wiring insulated for ultimate residential safety.",
    applications: ["New construction", "Concealed wiring", "Electrical upgrades"],
    specs: [
      "100% electrolytic copper",
      "Flame retardant properties",
      "Available in multiple gauges",
    ],
    image: "/products/wires.webp",
  },
  {
    slug: "modular-switches",
    name: "Modular Switches",
    category: "Lighting & Wiring",
    brand: "Multiple established brands",
    summary: "Contemporary switching systems, sockets, plates and accessories for modern spaces.",
    applications: ["Residential projects", "Commercial fit-outs", "Renovations"],
    specs: [
      "Sleek aesthetic plates",
      "Shock-proof terminals",
      "Durable mechanism cycles",
    ],
    image: "/products/switch.jpg",
  },
  {
    slug: "irons",
    name: "Irons",
    category: "Lighting & Wiring",
    brand: "Multiple established brands",
    summary: "Ergonomic garment care appliance featuring non-stick soleplates and steady thermal regulation.",
    applications: ["Household care", "Tailoring units", "Hospitality laundry"],
    specs: [
      "Non-stick coated soleplate",
      "Adjustable steam output",
      "Ergonomic handle grip",
    ],
    image: "/products/iron.jpg",
  },
  {
    slug: "junction-boxes",
    name: "Junction Boxes",
    category: "Protection & Hardware",
    brand: "Multiple established brands",
    summary: "Galvanized iron enclosures built for secure concealed wiring and socket housing.",
    applications: ["Wall concealment", "Switch mounting", "Junction wiring"],
    specs: [
      "Rust-resistant galvanization",
      "Pre-punched knockouts",
      "Standard modular sizing",
    ],
    image: "/products/metal-box.webp",
  },
  {
    slug: "conduits-and-pipes",
    name: "Conduits & Pipes",
    category: "Protection & Hardware",
    brand: "Multiple established brands",
    summary: "Heavy-gauge crush-resistant conduits designed to protect internal cable lines.",
    applications: ["Underground wiring", "Surface channeling", "Industrial protection"],
    specs: [
      "High impact resistance",
      "Flame retardant PVC compound",
      "Standard diameter variants",
    ],
    image: "/products/pipes.png",
  },
  {
    slug: "air-conditioner",
    name: "Air Conditioner",
    category: "Appliances & Cooling",
    brand: "Multiple established brands",
    summary: "High-efficiency commercial & residential split AC units with advanced climate control.",
    applications: ["Residential bedrooms", "Office cabins", "Commercial suites"],
    specs: [
      "Energy-saving inverter technology",
      "Rapid cooling performance",
      "Enquire for capacity options",
    ],
    image: "/products/ac.jpg",
    badge: "Coming Soon",
  },
];

export const brands = [
  "Schneider Electric",
  "Havells",
  "Philips",
  "Legrand",
  "Panasonic",
  "Bosch",
];

export const audiences = [
  {
    title: "Homeowners",
    text: "Lighting and electrical products for new homes, upgrades and repairs.",
  },
  {
    title: "Electricians",
    text: "A broad source for everyday installation and project requirements.",
  },
  {
    title: "Businesses",
    text: "Electrical products for offices, retail spaces and commercial properties.",
  },
  {
    title: "Builders & Projects",
    text: "Coordinated sourcing for project and bulk requirements.",
  },
];

export const company = {
  phone: "+91 9876543210",
  email: "rahul@megsolutions.in",
  address: "Plot No. 23, Industrial Area, Udaipur, Rajasthan 313001",
  note: "These are Contact details!",
};