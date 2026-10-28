import { useLocale, type Locale } from '../i18n';

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

type ProductText = Omit<ProductCategory, 'id' | 'slug' | 'image'>;

/** Arabic text for each product, keyed by id. Slugs and images are shared with English. */
const arabic: Record<string, ProductText> = {
  passenger: {
    title: 'مصاعد الركاب',
    summary: 'مصاعد هادئة وعالية الكفاءة للأبراج السكنية والمكاتب والمباني متعددة الاستخدامات.',
    description:
      'مصاعد ركاب للمباني السكنية والتجارية والعامة، تُصمَّم وفق حركة المستخدمين والتشطيبات المطلوبة والمساحة المتاحة لبئر المصعد في كل مشروع.',
    application: 'الأبراج السكنية والمكاتب والمباني متعددة الاستخدامات والمرافق العامة',
    imageAlt: 'كابينة مصعد ركاب بجدران معدنية برونزية وأرضية حجرية وإضاءة سقف دافئة',
    features: [
      'ماكينة جرّ بدون تروس بمغناطيس دائم لحركة سلسة وهادئة',
      'نظام تحكم جماعي بالمعالج الدقيق لإدارة الحركة في أوقات الذروة',
      'تشطيبات للكابينة من الستانلس ستيل المصقول أو بلمسات برونزية أو بأرضيات حجرية',
      'ستارة أمان بالأشعة تحت الحمراء بكامل ارتفاع الباب',
      'إضاءة LED للكابينة مع وضع استعداد تلقائي',
    ],
    specs: [
      { label: 'نظام الدفع', value: 'ماكينة متزامنة بمغناطيس دائم بدون تروس' },
      { label: 'التحكم', value: 'تحكم جماعي كامل بالمعالج الدقيق' },
      { label: 'الأبواب', value: 'تلسكوبية بفتح مركزي أو جانبي' },
      { label: 'المعايير', value: 'متوافقة مع SASO و EN 81-20/50' },
      { label: 'الطوارئ', value: 'جهاز إنقاذ آلي مع بطارية احتياطية' },
    ],
    integration:
      'يُصمَّم مخطط البئر بما يتناسب مع القلب الإنشائي للمبنى، لتقليل الأعمال الإنشائية والمساحة المفقودة من الطوابق.',
  },
  villa: {
    title: 'مصاعد الفلل',
    summary: 'مصاعد منزلية مدمجة تناسب بيت الدرج القائم أو مخططات الفلل الجديدة.',
    description:
      'مصاعد منزلية للفلل والبنتهاوس والتاون هاوس، تُصمَّم حسب المساحة المتوفرة لديك وطابع التصميم الداخلي وطريقة استخدام أسرتك لها.',
    application: 'الفلل الخاصة والبنتهاوس والتاون هاوس',
    imageAlt: 'مصعد منزلي من الزجاج بإطار برونزي بجانب درج دائري في فيلا',
    features: [
      'حفرة بعمق محدود وارتفاع علوي منخفض يناسب المنازل القائمة',
      'يعمل بتيار أحادي الطور أو ثلاثي الطور',
      'تشطيبات للكابينة تتناسق مع الأعمال الخشبية والرخام والإكسسوارات في منزلك',
      'تشغيل هادئ لا ينقل الاهتزاز إلى مساحات المعيشة',
      'ينزل إلى أقرب طابق ويفتح الباب تلقائيًا عند انقطاع الكهرباء',
    ],
    specs: [
      { label: 'عمق الحفرة', value: 'من 200 مم' },
      { label: 'مصدر الكهرباء', value: '220 فولت أحادي الطور أو 380 فولت ثلاثي الطور' },
      { label: 'نظام الدفع', value: 'جرّ بدون تروس أو هيدروليكي' },
      { label: 'الأبواب', value: 'أبواب زجاجية تلسكوبية آلية أو أبواب مفصلية' },
      { label: 'الأمان', value: 'إنزال بالبطارية، ومنظم للسرعة الزائدة، وأقفال للأبواب' },
    ],
    integration:
      'يمكن تركيبه داخل بيت درج قائم أو إدراجه في مخطط فيلا جديدة دون الحاجة إلى غرفة ماكينات أو حفر عميق.',
  },
  panoramic: {
    title: 'المصاعد البانورامية',
    summary: 'كبائن زجاجية تجعل الرحلة جزءًا من الطابع المعماري للمبنى.',
    description: 'مصاعد زجاجية للأفنية الداخلية والفنادق والمباني المميزة، حيث يصبح المصعد جزءًا مما يراه الزوار.',
    application: 'الأفنية الداخلية في الفنادق والمراكز التجارية، وردهات الشركات، والمباني المميزة',
    imageAlt: 'كابينة مصعد زجاجية دائرية تتحرك داخل فناء زجاجي متعدد الطوابق',
    features: [
      'زجاج أمان مُصفَّح بأشكال منحنية أو نصف دائرية أو مضلعة',
      'هيكل فولاذي نحيف بتثبيتات مخفية',
      'إضاءة معمارية تُبرز الكابينة أثناء حركتها',
      'مزالق توجيه هادئة تناسب الأفنية المفتوحة',
      'كسوة خارجية تتناسق مع واجهة المبنى',
    ],
    specs: [
      { label: 'الهيكل', value: 'زجاج أمان معماري مُصفَّح' },
      { label: 'شكل الكابينة', value: 'دائري أو نصف دائري أو مربع أو حسب الطلب' },
      { label: 'البئر', value: 'فناء مفتوح أو جدار زجاجي أو هيكل فولاذي' },
      { label: 'الماكينة', value: 'بدون غرفة ماكينات أو بغرفة ماكينات علوية' },
      { label: 'الإضاءة', value: 'إضاءة LED مخفية مع تحكم في شدة الإضاءة' },
    ],
    integration:
      'عند وضعه في فناء مركزي، يصبح المصعد البانورامي نقطة جذب بصرية مع استمراره في نقل الناس بكفاءة.',
  },
  freight: {
    title: 'مصاعد البضائع',
    summary: 'مصاعد شديدة التحمل للمستودعات والمناطق الخدمية في المتاجر والمصانع.',
    description: 'مصاعد بضائع مصممة لنقل المنصات والعربات والرافعات الشوكية في المباني التجارية والصناعية.',
    application: 'المستودعات ومراكز التوزيع والمتاجر الكبرى والمصانع',
    imageAlt: 'مصعد بضائع من الستانلس ستيل يفتح على أرضية مستودع',
    features: [
      'أرضية مُقوّاة تتحمل أحمال الرافعات الشوكية وعربات المنصات',
      'كابينة فولاذية مع مصدّات للحماية',
      'أبواب عريضة تفتح من المنتصف أو منزلقة متعددة الألواح',
      'أرضية فولاذية مضلّعة مانعة للانزلاق',
      'أزرار تحكم بسيطة مع إمكانية التشغيل بالمفتاح',
    ],
    specs: [
      { label: 'فئة التحميل', value: 'الفئة A أو B أو C' },
      { label: 'الأبواب', value: 'رأسية تفتح من المنتصف أو أفقية تلسكوبية' },
      { label: 'سكك التوجيه', value: 'سكك ثقيلة بمقطع T مع مزالق توجيه صلبة' },
      { label: 'الأرضية', value: 'ألواح فولاذية مضلّعة سميكة' },
      { label: 'الأمان', value: 'أجهزة إيقاف أمان، ومخمّدات ثقيلة، وأقفال للأبواب' },
    ],
    integration:
      'يُخطَّط لها حول أرصفة التحميل وممرات الخدمة، لتنتقل البضائع دون أن تؤثر على الحركة في الواجهة الأمامية للمبنى.',
  },
  escalators: {
    title: 'السلالم الكهربائية والممرات المتحركة',
    summary: 'نقل متواصل للأشخاص في المراكز التجارية والمطارات ومحطات النقل.',
    description:
      'سلالم كهربائية وممرات متحركة للأماكن العامة المزدحمة، حيث يتنقل عدد كبير من الناس بين الطوابق.',
    application: 'المراكز التجارية والمطارات والمحطات ومراكز المعارض والهايبر ماركت',
    imageAlt: 'أشخاص يصعدون سلمًا كهربائيًا بحواجز زجاجية في مبنى حديث ومضيء',
    features: [
      'هيكل فولاذي صلب لتشغيل هادئ ومستقر',
      'نظام دفع موفر للطاقة يخفض السرعة عند عدم وجود مستخدمين',
      'درجات من الألمنيوم المصبوب بحواف أمان صفراء وفُرَش جانبية',
      'حواجز زجاجية مع إضاءة اختيارية للدرابزين',
      'مراقبة إلكترونية للدرجات والجوانب وشدّ السلسلة',
    ],
    specs: [
      { label: 'زاوية الميل', value: '30° أو 35° للسلالم، و0° أو 10° أو 12° للممرات المتحركة' },
      { label: 'الحاجز الجانبي', value: 'زجاج مقسّى بإطار من الستانلس ستيل' },
      { label: 'نظام الدفع', value: 'علبة تروس حلزونية مع محوّل تردد' },
      { label: 'عرض الدرجة', value: '600 أو 800 أو 1000 مم' },
      { label: 'الأمان', value: 'حساسات لوح المشط، ومراقبة سرعة الدرابزين، وإيقاف عند انقطاع سلسلة الدفع' },
    ],
    integration: 'تُصمَّم لنقل الحشود بسلاسة بين الطوابق في الأفنية والصالات.',
  },
};

export const productsByLocale: Record<Locale, ProductCategory[]> = {
  en: productCategories,
  ar: productCategories.map((p) => ({ ...p, ...arabic[p.id] })),
};

export const useProducts = () => productsByLocale[useLocale()];
