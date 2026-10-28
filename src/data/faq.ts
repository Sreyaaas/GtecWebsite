import { ltr, useLocale, type Locale } from '../i18n';
import { companyData, companyText } from './company';

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqsByLocale: Record<Locale, FAQItem[]> = {
  en: [
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
      answer: `Our sales team works ${companyText.en.hours}. Enquiries are answered during working hours. For anything urgent, call ${companyData.phone} or ${companyData.mobile}.`,
    },
  ],
  ar: [
    {
      question: 'ما نوع المصعد المناسب لمبناي؟',
      answer:
        'يعتمد ذلك على طبيعة استخدام المبنى وعدد مستخدميه وعدد الطوابق والمساحة المتاحة للبئر. يراجع مهندسونا مخططاتك ويوصون بالنوع والسعة المناسبين، سواء كان مصعد ركاب أو مصعد فيلا أو مصعدًا بانوراميًا أو مصعد بضائع.',
    },
    {
      question: 'ما المعلومات التي تحتاجونها لإعداد عرض السعر؟',
      answer:
        'نوع المبنى، وعدد الطوابق أو الوقفات، وهل المبنى جديد أم قائم، ونوع المصعد الذي تفكر فيه. تساعدنا المخططات المعمارية على تقديم سعر دقيق، لكنها ليست ضرورية في التواصل الأول.',
    },
    {
      question: 'هل أتواصل معكم قبل تصميم المبنى؟',
      answer:
        'نعم، إن أمكن. مناقشة المصعد في مرحلة التخطيط تضمن تنفيذ مقاس البئر وعمق الحفرة والارتفاع العلوي والدعامات الإنشائية بشكل صحيح من البداية، مما يجنّبك تعديلات مكلفة لاحقًا.',
    },
    {
      question: 'هل تتولون تركيب المصاعد بأنفسكم؟',
      answer:
        'نعم. تتولى فرقنا الهندسية التركيب والاختبار والتشغيل في الموقع وفق معايير السلامة والأنظمة السعودية، وتنسّق الفحص المطلوب للتسليم.',
    },
    {
      question: 'هل تقدمون عقود صيانة؟',
      answer:
        'نعم. تشمل عقود الصيانة الوقائية لدينا فحوصات سلامة مجدولة، وفحصًا ميكانيكيًا، وتزييتًا، وتشخيصًا للوحة التحكم، إضافةً إلى الاستجابة للأعطال. أخبرنا بنوع مصعدك وعمره وموقعه، وسنقترح عليك العقد المناسب أو الإصلاح أو التحديث.',
    },
    {
      question: 'متى سيتواصل معي فريقكم؟',
      answer: `يعمل فريق المبيعات ${companyText.ar.hours}، ونرد على الاستفسارات خلال ساعات العمل. وللحالات العاجلة، اتصل على ${ltr(companyData.phone)} أو ${ltr(companyData.mobile)}.`,
    },
  ],
};

export const useFaqs = () => faqsByLocale[useLocale()];
