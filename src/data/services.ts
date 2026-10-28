export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  scope: string[];
  note: string;
}

/** The project lifecycle, in the order the work happens on site. */
export const servicesData: ServiceItem[] = [
  {
    id: 'design',
    title: 'Design and specification',
    shortDescription:
      'Traffic analysis, shaft sizing and cabin finishes worked out from your architectural drawings.',
    scope: [
      'Traffic and waiting-time calculations based on building occupancy',
      'Shaft layout, pit depth and headroom coordination with your consultant',
      'Power supply, heat load and electrical specification',
      'Cabin finishes, lighting and fixture selection',
      'Review against the Saudi Building Code and international elevator standards',
    ],
    note: 'Agreeing capacity and shaft dimensions before the concrete is poured avoids costly changes on site.',
  },
  {
    id: 'supply',
    title: 'Manufacturing and supply',
    shortDescription:
      'Elevator systems and components sourced from certified manufacturing partners and checked before shipment.',
    scope: [
      'Gearless permanent-magnet traction machines and energy-efficient drives',
      'Microprocessor controllers and safety circuit boards',
      'Guide rails, counterweight frames and suspension ropes',
      'Automatic car and landing door operators',
      'Factory acceptance checks before dispatch to site',
    ],
    note: 'Deliveries are scheduled against your construction programme so equipment arrives when the shaft is ready.',
  },
  {
    id: 'installation',
    title: 'Installation',
    shortDescription:
      'Mechanical and electrical installation by trained technicians working to strict site safety procedures.',
    scope: [
      'Shaft survey and laser alignment of guide rails',
      'Car frame, safety gear and isolation mounts',
      'Machine mounting, rope suspension and counterweight balancing',
      'Door headers, landing sills and safety light curtains',
      'Shaft wiring, travelling cables and controller termination',
    ],
    note: 'Accurate alignment at installation is what gives a quiet, smooth ride for years afterwards.',
  },
  {
    id: 'commissioning',
    title: 'Testing and handover',
    shortDescription:
      'Load tests, governor and safety-gear tests and full safety checks before the elevator is handed over.',
    scope: [
      'Over-speed governor and safety-gear tests under full load',
      'Buffer, limit switch and door interlock checks',
      'Ride quality checks for vibration, acceleration and levelling',
      'Automatic rescue device and emergency battery lowering tests',
      'Coordination with Civil Defense and inspection authorities for licensing',
    ],
    note: 'Every unit is tested and documented before it carries its first passenger.',
  },
  {
    id: 'maintenance',
    title: 'Maintenance contracts',
    shortDescription:
      'Scheduled preventive maintenance that keeps elevators safe, reliable and running smoothly.',
    scope: [
      'Lubrication, brake inspection and guide rail cleaning',
      'Door operator, roller guide and contact wear checks',
      'Controller fault-log review to catch problems early',
      'Rope tension and suspension inspections',
      'Breakdown call-outs for contract customers',
    ],
    note: 'Regular servicing reduces breakdowns and extends the working life of the equipment.',
  },
  {
    id: 'after-sales',
    title: 'Repairs and modernisation',
    shortDescription:
      'Genuine spare parts, repairs and upgrades for older elevators as your building’s needs change.',
    scope: [
      'Stock of genuine spare parts and electrical components',
      'Modernisation surveys for older controllers and drives',
      'Cabin refurbishment and LED lighting upgrades',
      'Energy-saving drive retrofits',
      'Technical advice for facility managers and owners',
    ],
    note: 'Modernising the controller and doors can make an older elevator feel and perform like new.',
  },
];
