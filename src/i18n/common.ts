import type { Lang } from "./LanguageContext";

interface CommonStrings {
  // Nav
  features: string;
  howItWorks: string;
  pricing: string;
  partner: string;
  faq: string;
  blog: string;
  logIn: string;
  getStarted: string;
  getStartedFree: string;
  // Footer column titles
  productCol: string;
  compareCol: string;
  resourcesCol: string;
  companyCol: string;
  // Footer links
  affiliates: string;
  changelog: string;
  helpCenter: string;
  security: string;
  aiDisclosure: string;
  about: string;
  support: string;
  emailUs: string;
  privacyPolicy: string;
  termsConditions: string;
  dataDeletion: string;
  // Footer copy
  footerAddress1: string;
  footerAddress2: string;
  footerAddress3: string;
  copyright: string; // contains {year}
  madeFor: string;
  // Misc
  backToHome: string;
  // Hero
  beta: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  startFree: string;
  seeHow: string;
  noCardRequired: string;
  chipMetaPartner: string;
  chipOfficialApi: string;
  statsMessages: string;
  statsBusinesses: string;
  statsUptime: string;
  statsResponse: string;
}

export const common: Record<Lang, CommonStrings> = {
  en: {
    features: "Features",
    howItWorks: "How it works",
    pricing: "Pricing",
    partner: "Partner",
    faq: "FAQ",
    blog: "Blog",
    logIn: "Log in",
    getStarted: "Get Started",
    getStartedFree: "Get Started Free",
    productCol: "Product",
    compareCol: "Compare",
    resourcesCol: "Resources",
    companyCol: "Company",
    affiliates: "Affiliates",
    changelog: "Changelog",
    helpCenter: "Help Center",
    security: "Security",
    aiDisclosure: "AI Disclosure",
    about: "About",
    support: "Support",
    emailUs: "Email us",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    dataDeletion: "Data Deletion",
    footerAddress1: "LIGHTCHATS LLC",
    footerAddress2: "1501 South Greeley Hwy, Ste C #1266",
    footerAddress3: "Cheyenne, WY 82007",
    copyright: "© {year} LIGHTCHATS LLC. All rights reserved.",
    madeFor: "Made for creators, businesses, and agencies.",
    backToHome: "Back to home",
    beta: "Now in public beta",
    heroTitleA: "Engage at the",
    heroTitleB: "Speed of Light",
    heroSub:
      "Drive more sales and conversions on Instagram using automation. Engage followers, capture leads, and grow your business — all on autopilot.",
    startFree: "Start for free",
    seeHow: "See how it works",
    noCardRequired: "No credit card required",
    chipMetaPartner: "Meta Business Partner",
    chipOfficialApi: "Official Instagram API",
    statsMessages: "Messages Automated",
    statsBusinesses: "Active Businesses",
    statsUptime: "Uptime",
    statsResponse: "Response Time",
  },
  fr: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    pricing: "Tarifs",
    partner: "Partenaire",
    faq: "FAQ",
    blog: "Blog",
    logIn: "Connexion",
    getStarted: "Commencer",
    getStartedFree: "Commencer gratuitement",
    productCol: "Produit",
    compareCol: "Comparer",
    resourcesCol: "Ressources",
    companyCol: "Entreprise",
    affiliates: "Affiliés",
    changelog: "Nouveautés",
    helpCenter: "Centre d'aide",
    security: "Sécurité",
    aiDisclosure: "Divulgation IA",
    about: "À propos",
    support: "Assistance",
    emailUs: "Écrivez-nous",
    privacyPolicy: "Politique de confidentialité",
    termsConditions: "Conditions d'utilisation",
    dataDeletion: "Suppression de données",
    footerAddress1: "LIGHTCHATS LLC",
    footerAddress2: "1501 South Greeley Hwy, Ste C #1266",
    footerAddress3: "Cheyenne, WY 82007",
    copyright: "© {year} LIGHTCHATS LLC. Tous droits réservés.",
    madeFor: "Conçu pour les créateurs, les entreprises et les agences.",
    backToHome: "Retour à l'accueil",
    beta: "En version bêta publique",
    heroTitleA: "Engagez à la",
    heroTitleB: "vitesse de la lumière",
    heroSub:
      "Boostez vos ventes et conversions sur Instagram grâce à l'automatisation. Engagez vos abonnés, captez des leads et développez votre activité — en pilote automatique.",
    startFree: "Commencer gratuitement",
    seeHow: "Voir comment ça marche",
    noCardRequired: "Aucune carte bancaire requise",
    chipMetaPartner: "Meta Business Partner",
    chipOfficialApi: "API Instagram officielle",
    statsMessages: "Messages automatisés",
    statsBusinesses: "Entreprises actives",
    statsUptime: "Disponibilité",
    statsResponse: "Temps de réponse",
  },
  ar: {
    features: "الميزات",
    howItWorks: "كيف يعمل",
    pricing: "الأسعار",
    partner: "شريك",
    faq: "الأسئلة الشائعة",
    blog: "المدونة",
    logIn: "تسجيل الدخول",
    getStarted: "ابدأ الآن",
    getStartedFree: "ابدأ مجاناً",
    productCol: "المنتج",
    compareCol: "مقارنة",
    resourcesCol: "الموارد",
    companyCol: "الشركة",
    affiliates: "الشركاء",
    changelog: "سجل التحديثات",
    helpCenter: "مركز المساعدة",
    security: "الأمان",
    aiDisclosure: "إفصاح الذكاء الاصطناعي",
    about: "من نحن",
    support: "الدعم",
    emailUs: "راسلنا",
    privacyPolicy: "سياسة الخصوصية",
    termsConditions: "الشروط والأحكام",
    dataDeletion: "حذف البيانات",
    footerAddress1: "LIGHTCHATS LLC",
    footerAddress2: "1501 South Greeley Hwy, Ste C #1266",
    footerAddress3: "Cheyenne, WY 82007",
    copyright: "© {year} LIGHTCHATS LLC. جميع الحقوق محفوظة.",
    madeFor: "صُمم للمبدعين والشركات والوكالات.",
    backToHome: "العودة إلى الرئيسية",
    beta: "متاح الآن في النسخة التجريبية العامة",
    heroTitleA: "تفاعل بسرعة",
    heroTitleB: "الضوء",
    heroSub:
      "حقّق المزيد من المبيعات والتحويلات على إنستغرام بفضل الأتمتة. تفاعل مع المتابعين والتقط العملاء المحتملين ونمِّ أعمالك — كل ذلك تلقائياً.",
    startFree: "ابدأ مجاناً",
    seeHow: "شاهد كيف يعمل",
    noCardRequired: "لا حاجة لبطاقة ائتمان",
    chipMetaPartner: "Meta Business Partner",
    chipOfficialApi: "واجهة إنستغرام الرسمية",
    statsMessages: "رسائل مؤتمتة",
    statsBusinesses: "شركات نشطة",
    statsUptime: "وقت التشغيل",
    statsResponse: "زمن الاستجابة",
  },
};
