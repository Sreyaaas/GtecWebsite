export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  scope: string[];
  engineeringFocus: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'design',
    slug: 'elevator-design',
    title: 'Elevator Design',
    eyebrow: 'PHASE 01 · ENGINEERING & SPECIFICATION',
    shortDescription: 'Technical planning, shaft sizing, traffic analysis, and interior finishes tailored to your architectural plans.',
    scope: [
      'Traffic flow calculation and waiting-interval modeling based on building occupancy',
      'Structural shaft layout coordination, pit dimensions, and headroom optimization',
      'Power supply, heat dissipation, and electrical supply specification',
      'Architectural cabin finishes, lighting integration, and fixture customization',
      'Code compliance review under Saudi Building Code and international elevator standards',
    ],
    engineeringFocus: 'Early collaboration with architects, consultants, and developers ensures the right equipment capacity and hoistway dimensions before structural concrete is poured.',
  },
  {
    id: 'supply',
    slug: 'manufacturing-supply',
    title: 'Manufacturing & Supply',
    eyebrow: 'PHASE 02 · EQUIPMENT PROCUREMENT',
    shortDescription: 'Sourcing and supply of high-grade elevator systems and precision components from certified manufacturing partners.',
    scope: [
      'Permanent magnet synchronous gearless traction machines and energy-efficient drives',
      'Microprocessor controller cabinets and safety-rated operational circuit boards',
      'Precision machined elevator guide rails, counterweight frames, and high-strength suspension cables',
      'Automatic car and landing door operators with variable speed frequency control',
      'Comprehensive factory acceptance checks prior to shipment to site',
    ],
    engineeringFocus: 'Rigorous component selection ensures mechanical longevity, acoustic quietness, and consistent supply chain delivery matching project construction milestones.',
  },
  {
    id: 'installation',
    slug: 'installation',
    title: 'Installation',
    eyebrow: 'PHASE 03 · ON-SITE EXECUTION',
    shortDescription: 'Disciplined mechanical and electrical installation carried out by trained technicians under strict safety protocols.',
    scope: [
      'Shaft plumbing, laser alignment of guide rails, and bracket anchorage verification',
      'Assembly of car frame, safety gear mechanism, and vibration-isolating sling mounts',
      'Overhead machine mounting, hoist rope suspension, and counterweight balancing',
      'Door mechanism positioning, landing sills leveling, and optical safety curtain wiring',
      'Shaft wiring, traveling cable installation, and machine room electrical termination',
    ],
    engineeringFocus: 'Precision alignment during installation is critical to smooth ride quality, reduced mechanical friction, and prolonged component lifespan.',
  },
  {
    id: 'commissioning',
    slug: 'commissioning',
    title: 'Commissioning',
    eyebrow: 'PHASE 04 · QUALITY & SAFETY VERIFICATION',
    shortDescription: 'Multi-point testing, load checks, speed governor tests, and safety verification prior to formal handover.',
    scope: [
      'Over-speed governor tripping and safety gear wedge engagement testing under full load',
      'Buffer compression, limit switch verification, and door interlock safety circuits',
      'Vibration, acceleration, and deceleration ride quality analysis',
      'Automatic Rescue Device (ARD) and emergency battery power lowering verification',
      'Coordination with civil defense and statutory inspection authorities for licensing handover',
    ],
    engineeringFocus: 'Systematic testing protocols ensure full compliance with regulatory safety requirements and guarantee that the equipment performs reliably from day one.',
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    title: 'Maintenance',
    eyebrow: 'PHASE 05 · PREVENTATIVE CARE',
    shortDescription: 'Scheduled preventative maintenance programs designed to safeguard operational reliability and passenger safety.',
    scope: [
      'Regular lubrication, brake gap inspection, and guide rail cleaning routines',
      'Door operator belt tension, roller guide wear, and contact wear assessments',
      'Microprocessor diagnostic memory review to identify and prevent potential faults early',
      'Traction rope tension balancing and suspension system integrity audits',
      'Dedicated technical callout assistance for registered service agreements',
    ],
    engineeringFocus: 'Preventative maintenance keeps equipment operating at peak efficiency, minimizing downtime and extending the lifecycle of building transportation assets.',
  },
  {
    id: 'after-sales',
    slug: 'after-sales-support',
    title: 'After-Sales Support',
    eyebrow: 'PHASE 06 · CONTINUOUS LIFECYCLE',
    shortDescription: 'Long-term support, genuine replacement parts availability, and modernization consultancy as building needs evolve.',
    scope: [
      'Inventory of genuine spare parts and electrical components for rapid availability',
      'Building modernization assessments for older elevator systems requiring controller upgrades',
      'Interior cab refurbishment, modern LED lighting conversions, and architectural cladding updates',
      'Energy-efficiency retrofits with variable-frequency regenerative drives',
      'Direct technical guidance for facility management teams and property owners',
    ],
    engineeringFocus: 'Ongoing lifecycle engineering support ensures that GTEC installations remain safe, modern, and energy-conscious throughout decades of service.',
  },
];
