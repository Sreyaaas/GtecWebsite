export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  /** One plain sentence used on listings. */
  summary: string;
  /** Opening paragraph on the detail page. */
  description: string;
  application: string;
  image: string;
  imageAlt: string;
  features: string[];
  specs: { label: string; value: string }[];
  integration: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'passenger',
    slug: 'passenger-elevators',
    title: 'Passenger elevators',
    summary: 'Quiet, efficient lifts for residential towers, offices and mixed-use buildings.',
    description:
      'Passenger elevators for residential, commercial and public buildings, configured around the traffic, finishes and shaft space of each project.',
    application: 'Residential towers, offices, mixed-use buildings and public facilities',
    image: '/images/passenger-elevator.jpg',
    imageAlt: 'Passenger elevator cabin with bronze steel walls, stone floor and warm ceiling lighting',
    features: [
      'Gearless permanent-magnet traction drive for smooth, quiet travel',
      'Microprocessor group control to manage peak-hour traffic',
      'Cabin interiors in hairline stainless steel, bronze accents or stone flooring',
      'Full-height infrared door safety curtain',
      'LED cabin lighting with automatic standby',
    ],
    specs: [
      { label: 'Drive', value: 'Permanent-magnet synchronous gearless' },
      { label: 'Control', value: 'Full collective microprocessor control' },
      { label: 'Doors', value: 'Centre-opening or side-opening telescopic' },
      { label: 'Standards', value: 'SASO and EN 81-20/50' },
      { label: 'Emergency', value: 'Automatic rescue device with battery back-up' },
    ],
    integration:
      'Shaft layouts are configured to suit the building core, keeping structural work and lost floor area to a minimum.',
  },
  {
    id: 'villa',
    slug: 'villa-elevators',
    title: 'Villa elevators',
    summary: 'Compact home lifts that fit existing stairwells or new villa plans.',
    description:
      'Home elevators for villas, penthouses and townhouses, designed around the space you have, the look of your interiors and how your family will use it.',
    application: 'Private villas, penthouses and townhouses',
    image: '/images/villa-elevator.jpg',
    imageAlt: 'Glass and bronze home elevator beside a curved staircase in a villa',
    features: [
      'Shallow pit and low headroom for existing homes',
      'Runs on single-phase or three-phase supply',
      'Cabin finishes matched to your joinery, stone and hardware',
      'Quiet drive with no vibration into living areas',
      'Lowers to the nearest floor and opens if the power fails',
    ],
    specs: [
      { label: 'Pit depth', value: 'From 200 mm' },
      { label: 'Power supply', value: '220 V single-phase or 380 V three-phase' },
      { label: 'Drive', value: 'Gearless traction or hydraulic' },
      { label: 'Doors', value: 'Automatic telescopic glass or swing doors' },
      { label: 'Safety', value: 'Battery lowering, over-speed governor, door interlocks' },
    ],
    integration:
      'Can be fitted into an existing stairwell or planned into a new villa without a machine room or deep excavation.',
  },
  {
    id: 'panoramic',
    slug: 'panoramic-elevators',
    title: 'Panoramic elevators',
    summary: 'Glass cars that make the journey part of the building’s architecture.',
    description:
      'Glass elevators for atriums, hotels and landmark buildings, where the lift is part of what visitors see.',
    application: 'Hotel and mall atriums, corporate lobbies and landmark buildings',
    image: '/images/panoramic-elevator.jpg',
    imageAlt: 'Round glass elevator car travelling through a multi-storey glass atrium',
    features: [
      'Laminated safety glass in curved, semi-circular or angled profiles',
      'Slim steel structure with concealed fixings',
      'Architectural lighting that highlights the car as it moves',
      'Quiet guide shoes for open, echoing atriums',
      'Exterior cladding to match the facade',
    ],
    specs: [
      { label: 'Enclosure', value: 'Laminated architectural safety glass' },
      { label: 'Cabin shape', value: 'Round, semi-circular, square or custom' },
      { label: 'Shaft', value: 'Open atrium, glass wall or steel mast' },
      { label: 'Machine', value: 'Machine-room-less or overhead machine room' },
      { label: 'Lighting', value: 'Concealed LED with dimming control' },
    ],
    integration:
      'Placed in a central atrium, a panoramic elevator becomes a focal point while still moving people efficiently.',
  },
  {
    id: 'freight',
    slug: 'freight-elevators',
    title: 'Freight elevators',
    summary: 'Heavy-duty lifts for warehouses, retail back-of-house and factories.',
    description:
      'Goods elevators built for pallets, trolleys and forklifts in commercial and industrial buildings.',
    application: 'Warehouses, distribution centres, department stores and factories',
    image: '/images/freight-elevator.jpg',
    imageAlt: 'Stainless steel freight elevator opening onto a warehouse floor',
    features: [
      'Reinforced platform for forklift and pallet truck loads',
      'Steel cabin with protective bumper rails',
      'Wide bi-parting or multi-panel sliding doors',
      'Non-slip chequered steel floor',
      'Simple push-button controls with key-switch operation',
    ],
    specs: [
      { label: 'Loading class', value: 'Class A, B or C' },
      { label: 'Doors', value: 'Vertical bi-parting or horizontal telescopic' },
      { label: 'Guide rails', value: 'Heavy T-section rails with rigid guide shoes' },
      { label: 'Floor', value: 'Chequered heavy-gauge steel plate' },
      { label: 'Safety', value: 'Safety clamps, heavy buffers, door interlocks' },
    ],
    integration: 'Planned around loading docks and service corridors so goods move without interrupting the front of house.',
  },
  {
    id: 'escalators',
    slug: 'escalators-moving-walks',
    title: 'Escalators and moving walks',
    summary: 'Continuous people-moving for malls, airports and transit stations.',
    description:
      'Escalators and moving walks for busy public spaces where large numbers of people need to move between levels.',
    application: 'Shopping malls, airports, stations, exhibition centres and hypermarkets',
    image: '/images/escalator-authentic.jpg',
    imageAlt: 'People riding a glass-balustrade escalator in a bright modern building',
    features: [
      'Rigid steel truss for quiet, stable running',
      'Energy-saving drive that slows down when no one is riding',
      'Die-cast aluminium steps with yellow safety edges and skirt brushes',
      'Glass balustrades with optional handrail lighting',
      'Electronic monitoring of steps, skirts and chain tension',
    ],
    specs: [
      { label: 'Incline', value: '30° or 35° escalators; 0°, 10° or 12° moving walks' },
      { label: 'Balustrade', value: 'Tempered glass with stainless steel trim' },
      { label: 'Drive', value: 'Helical gearbox with frequency inverter' },
      { label: 'Step width', value: '600, 800 or 1000 mm' },
      { label: 'Safety', value: 'Comb-plate sensors, handrail speed monitor, drive chain stop' },
    ],
    integration: 'Laid out to carry crowds smoothly between levels in atriums and concourses.',
  },
];
