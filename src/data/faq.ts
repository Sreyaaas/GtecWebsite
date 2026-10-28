export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'planning' | 'service';
}

export const faqsData: FAQItem[] = [
  {
    question: 'Which elevator solution is suitable for my building?',
    answer: 'The ideal vertical transportation solution depends on your building\'s primary usage (residential, commercial, hospitality, or industrial), anticipated passenger traffic, number of floors, and available hoistway dimensions. Our engineering team assists developers and architects during the early planning stages to evaluate traffic requirements and recommend appropriate elevator types (from gearless passenger lifts to panoramic glass cars or freight systems).',
    category: 'general',
  },
  {
    question: 'What information is required for a quotation?',
    answer: 'To prepare an accurate technical quotation, we typically review the project type (new installation, modernization, or replacement), building type, number of stops/floors, travel height, desired elevator category (passenger, panoramic, villa, freight, or escalator), architectural layout drawings, and project stage. You can submit these details directly through our Enquiry Assistant or Contact Form.',
    category: 'planning',
  },
  {
    question: 'Can elevator requirements be discussed during the building planning stage?',
    answer: 'Yes, early coordination is strongly recommended. Discussing elevator requirements during the architectural planning stage ensures that shaft dimensions, pit depths, overhead clearances, and structural beam supports are properly integrated into civil engineering drawings, preventing costly on-site modifications later.',
    category: 'planning',
  },
  {
    question: 'Does GTEC provide installation services?',
    answer: 'Yes. Global Team Elevator Co. provides comprehensive on-site installation and commissioning services. Our certified engineering teams carry out shaft alignment, mechanical assembly, guide rail installation, electrical wiring, and controller integration in full compliance with safety standards and local Saudi regulations.',
    category: 'service',
  },
  {
    question: 'Is maintenance support available?',
    answer: 'Yes. GTEC offers scheduled preventative maintenance and after-sales support agreements. Regular maintenance visits include safety checks, mechanical inspections, lubrication, and system diagnostics to safeguard passenger safety, maintain ride quality, and ensure long-term operational dependability.',
    category: 'service',
  },
  {
    question: 'How can I enquire about a specific elevator product?',
    answer: 'You can submit a project enquiry through our online Quotation & Enquiry Form, utilize the interactive Enquiry Assistant to specify your parameters, call our office directly at +966 13 818 1396 / +966 55 262 9141, or email sales@gtecelevators.com. Our technical team will review your specifications and get in touch promptly.',
    category: 'general',
  },
];
