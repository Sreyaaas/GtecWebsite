export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  application: string;
  image: string;
  features: string[];
  technicalOverview: {
    label: string;
    value: string;
  }[];
  architecturalIntegration: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'passenger',
    slug: 'passenger-elevators',
    title: 'Passenger Elevators',
    eyebrow: 'COMMERCIAL & RESIDENTIAL CIRCULATION',
    tagline: 'Precision-engineered vertical transit tailored to your building rhythm.',
    description: 'Elevator solutions for moving people through residential, commercial, and other suitable building environments. Final configurations depend on the requirements of each project.',
    application: 'Commercial offices, residential towers, mixed-use buildings & civic facilities',
    image: '/images/elevator-interior-real.jpg',
    features: [
      'Gearless permanent magnet traction drive systems for smooth acceleration and quiet operation',
      'Microprocessor group control and destination dispatch compatibility for peak traffic management',
      'Architectural car interiors with brushed hairline stainless steel, bronze accents, and stone flooring options',
      'Infrared multi-beam door safety curtain providing full-height passenger protection',
      'Energy-efficient LED ambient ceiling lighting with automatic standby sleep mode',
    ],
    technicalOverview: [
      { label: 'Drive System', value: 'Permanent Magnet Synchronous Gearless' },
      { label: 'Control Architecture', value: 'Full Collective Microprocessor Control' },
      { label: 'Door Configuration', value: 'Center Opening or Side Opening Telescopic' },
      { label: 'Safety Standards', value: 'Compliant with SASO & EN 81-20/50 Code Guidelines' },
      { label: 'Emergency Safety', value: 'Automatic Rescue Device (ARD) & Emergency Battery Back-up' },
    ],
    architecturalIntegration: 'Configurable shaft layouts allow seamless alignment with building core designs, reducing structural overhead and optimizing net lettable space.',
  },
  {
    id: 'panoramic',
    slug: 'panoramic-elevators',
    title: 'Panoramic Elevators',
    eyebrow: 'ARCHITECTURAL VISUAL EXPERIENCE',
    tagline: 'Transforming vertical movement into an expressive architectural feature.',
    description: 'Architectural elevator solutions designed to make vertical transportation part of the building\'s visual experience.',
    application: 'Shopping atriums, luxury hotels, prestige corporate lobbies & landmark venues',
    image: '/images/escalator-atrium-arch.jpg',
    features: [
      'Laminated safety glass panels available in curved, semi-circular, or polygonal profiles',
      'Minimalist structural steel frameworks with hidden mechanical fixings and refined finishes',
      'Integrated architectural mood lighting accentuating vertical movement within building atriums',
      'Whisper-quiet guide shoe assemblies engineered for acoustic comfort inside soaring open voids',
      'Custom exterior cladding finishes tailored to complement curtain wall facades',
    ],
    technicalOverview: [
      { label: 'Enclosure Material', value: 'Multi-layer Laminated Safety Architectural Glass' },
      { label: 'Cabin Shapes', value: 'Curved, Semi-circular, Square, or Custom Polygonal' },
      { label: 'Shaft Type', value: 'Open Atrium, Glass Curtain Wall, or Structural Steel Mast' },
      { label: 'Drive Location', value: 'Machine Room-Less (MRL) or Overhead Machine Room' },
      { label: 'Illumination', value: 'Concealed LED Edge & Linear Lighting with Dimming Control' },
    ],
    architecturalIntegration: 'Panoramic elevators establish a dynamic focal point in central atriums, offering passengers exterior skyline perspectives while maintaining building circulation efficiency.',
  },
  {
    id: 'villa',
    slug: 'villa-elevators',
    title: 'Villa Elevators',
    eyebrow: 'PRIVATE RESIDENTIAL MOBILITY',
    tagline: 'Quiet, bespoke residential elevators designed around home architecture.',
    description: 'Elevator solutions for residential properties, considered in the context of available space, building design, and homeowner requirements.',
    application: 'Private luxury residences, multi-level villas, penthouses & townhomes',
    image: '/images/cabin-lighting.jpg',
    features: [
      'Space-efficient shaft dimensions with shallow pit and low headroom requirements',
      'Single-phase or three-phase residential power compatibility with low starting currents',
      'Custom luxury cabin appointments matching interior joinery, stone, and bronze hardware',
      'Silent belt or gearless drive technology eliminating vibration into living quarters',
      'Automatic floor landing and door release in the event of local power interruptions',
    ],
    technicalOverview: [
      { label: 'Installation Envelope', value: 'Reduced Pit (from 200mm) & Low Overhead Clearance' },
      { label: 'Power Supply', value: 'Standard 220V Single-Phase or 380V Three-Phase' },
      { label: 'Drive Mechanism', value: 'Gearless Traction or Smooth Hydraulic Drive' },
      { label: 'Door Styles', value: 'Automatic Telescopic Glass Doors or Architectural Swing Doors' },
      { label: 'Safety Systems', value: 'Automatic Battery Lowering, Over-speed Governor, Interlocks' },
    ],
    architecturalIntegration: 'Engineered specifically for retrofitting into existing stairwells or integrating into new architectural plans without requiring large machine rooms or deep foundation excavations.',
  },
  {
    id: 'freight',
    slug: 'freight-elevators',
    title: 'Freight Elevators',
    eyebrow: 'INDUSTRIAL & CARGO TRANSPORTATION',
    tagline: 'Heavy-duty vertical logistics engineered for industrial reliability.',
    description: 'Solutions intended for transporting goods in appropriate commercial and industrial environments.',
    application: 'Industrial warehouses, distribution hubs, department stores & manufacturing plants',
    image: '/images/commercial-entrance.jpg',
    features: [
      'Reinforced structural chassis engineered for concentrated forklift and pallet truck wheel loads',
      'Heavy-gauge stainless steel or powder-coated steel cab enclosures with protective timber/rubber bumper rails',
      'Vertical bi-parting or heavy-duty horizontal sliding doors engineered for maximum clear door widths',
      'Slip-resistant diamond-pattern steel floor plates built for heavy forklift traction',
      'Intuitive industrial push-button controls with key-lock operational controls',
    ],
    technicalOverview: [
      { label: 'Structural Rating', value: 'Engineered for Class A, Class B, or Class C Industrial Loading' },
      { label: 'Door System', value: 'Bi-Parting Vertical or Multi-Panel Horizontal Telescopic' },
      { label: 'Guide Railing', value: 'Machined Heavy T-Section Rails with Rigid Guide Shoes' },
      { label: 'Platform Deck', value: 'Non-Slip Checkered Heavy-Gauge Steel Plate' },
      { label: 'Safety Protections', value: 'Slack-Rope Safety Clamps, Heavy Buffer Springs, Interlocks' },
    ],
    architecturalIntegration: 'Optimized for back-of-house logistical corridors and industrial loading docks, ensuring dependable vertical cargo movement throughout operations.',
  },
  {
    id: 'escalators-moving-walks',
    slug: 'escalators-moving-walks',
    title: 'Escalators & Moving Walks',
    eyebrow: 'CONTINUOUS PEDESTRIAN LOGISTICS',
    tagline: 'Continuous volume transit engineering for high-density public spaces.',
    description: 'Vertical and horizontal transportation solutions for buildings and spaces where the movement of people needs to be considered at scale.',
    application: 'Commercial retail malls, airports, transit stations, exhibition centers & hypermarkets',
    image: '/images/escalator-authentic.jpg',
    features: [
      'High-rigidity rectangular tube truss construction offering superior torsional stiffness and quiet operation',
      'Energy-saving VVVF frequency drive with intelligent optical radar auto-standby detection',
      'Durable die-cast aluminum step treads with yellow safety demarcation inserts and skirt brush guards',
      'Tempered safety glass balustrades with continuous handrail illumination options',
      'Comprehensive electronic safety chain monitoring step sag, skirt obstruction, and chain tension',
    ],
    technicalOverview: [
      { label: 'Inclination Angles', value: '30° or 35° for Escalators; 10°, 12°, or Horizontal (0°) for Moving Walks' },
      { label: 'Balustrade Construction', value: 'Slim Tempered Safety Glass with Stainless Steel Trim' },
      { label: 'Drive Efficiency', value: 'High-Efficiency Helical Gearbox with Frequency Inverter Control' },
      { label: 'Step / Pallet Width', value: '600mm, 800mm, or 1000mm Effective Passenger Width' },
      { label: 'Safety Mechanisms', value: 'Comb-Plate Sensors, Handrail Speed Monitors, Broken Drive Chain Stop' },
    ],
    architecturalIntegration: 'Designed for fluid architectural integration into central atriums and concourses, directing high volumes of pedestrians smoothly between commercial levels.',
  },
];
