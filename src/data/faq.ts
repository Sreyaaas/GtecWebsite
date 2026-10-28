export interface FAQItem {
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    question: 'Which elevator is right for my building?',
    answer:
      'It depends on how the building is used, how many people it serves, the number of floors and the space available for the shaft. Our engineers review your drawings and recommend the right type and capacity, whether that is a passenger lift, a villa elevator, a panoramic car or a freight elevator.',
  },
  {
    question: 'What do you need from me to prepare a quotation?',
    answer:
      'The building type, the number of floors or stops, whether it is a new building or an existing one, and the type of elevator you have in mind. Architectural drawings help us give an accurate price, but they are not needed for a first conversation.',
  },
  {
    question: 'Should I talk to you before the building is designed?',
    answer:
      'Yes, if you can. Discussing the elevator at the planning stage means shaft size, pit depth, headroom and structural supports are built correctly the first time, which avoids expensive changes later.',
  },
  {
    question: 'Do you install the elevators yourselves?',
    answer:
      'Yes. Our own engineering teams handle installation, testing and commissioning on site, in line with safety standards and Saudi regulations, and coordinate the inspection needed for handover.',
  },
  {
    question: 'Do you offer maintenance contracts?',
    answer:
      'Yes. Our preventive maintenance contracts include scheduled safety checks, mechanical inspection, lubrication and controller diagnostics, plus breakdown call-outs. Tell us the make, age and location of your elevator and we will advise on the right contract, repairs or modernisation.',
  },
  {
    question: 'How quickly will someone get back to me?',
    answer:
      'Our sales team works Sunday to Thursday, 8:00 am to 5:00 pm. Enquiries are answered during working hours. For anything urgent, call +966 13 818 1396 or +966 55 262 9141.',
  },
];
