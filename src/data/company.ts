export interface CompanyInfo {
  name: string;
  fullName: string;
  established: number;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  email: string;
  phone: string;
  mobile: string;
  altMobile: string;
  tagline: string;
  overview: string;
}

export const companyData: CompanyInfo = {
  name: 'GTEC Elevators',
  fullName: 'Global Team Elevator Co.',
  established: 2007,
  country: 'Saudi Arabia',
  city: 'Dammam',
  address: 'P.O. Box 72635, Al Aali Street #1, 71 Dammam, Kingdom of Saudi Arabia',
  postalCode: '31528',
  email: 'sales@gtecelevators.com',
  phone: '+966 13 818 1396',
  mobile: '+966 55 262 9141',
  altMobile: '+966 55 262 9337',
  tagline: 'Moving people. Connecting spaces.',
  overview: 'Global Team Elevator Co. brings together elevator and escalator design, manufacturing, sales, installation, and maintenance. Our focus is on delivering solutions that respond to building requirements and supporting customers throughout the project lifecycle.',
};

export const corePillars = [
  {
    title: 'Integrated Solutions',
    description: 'Elevator and escalator solutions tailored around building requirements and passenger circulation.',
  },
  {
    title: 'Engineering & Installation',
    description: 'Disciplined project execution with certified on-site mechanical and electrical commissioning capabilities.',
  },
  {
    title: 'Lifecycle Maintenance',
    description: 'Dependable service support, scheduled preventative maintenance routines, and responsive assistance.',
  },
];
