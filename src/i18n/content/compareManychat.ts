import type { Lang } from "../LanguageContext";

interface Row {
  feature: string;
  lightchats: string;
  competitor: string;
}

interface CompareManychatContent {
  eyebrow: string;
  title: string;
  intro: string;
  competitorHeader: string;
  competitorBullets: string[];
  ourHeader: string;
  ourBullets: string[];
  rows: Row[];
  featureColLabel: string;
  competitorColLabel: string;
  footnote: string;
  ctaTitle: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const compareManychat: Record<Lang, CompareManychatContent> = {
  en: {
    eyebrow: "Compare",
    title: "LightChats vs ManyChat",
    intro:
      "Both are official-API Instagram automation platforms. Here's an honest, side-by-side comparison so you can pick the one that fits your use case.",
    competitorHeader: "When ManyChat fits better",
    competitorBullets: [
      "You're a multi-channel team that needs Messenger, SMS, and WhatsApp on day one",
      "You already have a deep ManyChat flow library and don't want to migrate",
      "You need a brand-name vendor for an enterprise procurement process",
    ],
    ourHeader: "When LightChats fits better",
    ourBullets: [
      "Instagram is your main channel and you want a tool that's optimized for it, not a multi-channel afterthought",
      "You want flat pricing with no per-contact creep",
      "You want AI conversations included, not as an add-on",
      "You're an agency or affiliate that wants better lifetime commissions ($5 bounty + 15% lifetime)",
    ],
    rows: [
      {
        feature: "Free plan AI replies",
        lightchats: "150 / month",
        competitor: "Limited or unavailable",
      },
      {
        feature: "Free plan static replies",
        lightchats: "1,000 / month",
        competitor: "1,000 contacts (different metric)",
      },
      {
        feature: "Cheapest paid plan (monthly)",
        lightchats: "$9 — Pro",
        competitor: "$15 — Pro",
      },
      {
        feature: "AI conversations included on cheapest paid plan",
        lightchats: "Yes (Claude-powered)",
        competitor: "AI add-on, extra cost",
      },
      {
        feature: "Pricing model",
        lightchats: "Flat rate + opt-in $4.90 top-ups",
        competitor: "Tiered by contacts (price grows)",
      },
      {
        feature: "Visual flow builder",
        lightchats: "Yes",
        competitor: "Yes",
      },
      {
        feature: "Story-reply trigger",
        lightchats: "Free + paid",
        competitor: "Paid only",
      },
      {
        feature: "Live comment trigger",
        lightchats: "Pro and Business",
        competitor: "Higher tiers only",
      },
      {
        feature: "Affiliate program",
        lightchats: "30% × 12mo, then 15% lifetime + $5 bounty",
        competitor: "Flat 30%, no lifetime",
      },
      {
        feature: "DM watermark on Free plan",
        lightchats: '"Sent via LightChats ⚡"',
        competitor: "Branded reply on free",
      },
    ],
    featureColLabel: "Feature",
    competitorColLabel: "ManyChat",
    footnote:
      "Comparison reflects publicly listed plans as of 2026-04-26. ManyChat and the ManyChat logo are trademarks of their respective owners.",
    ctaTitle: "Try it for free, no card",
    ctaSub:
      "See how LightChats handles your existing flows. Free plan ships with a real, useful quota.",
    ctaPrimary: "Get Started Free",
    ctaSecondary: "See all features",
  },
  fr: {
    eyebrow: "Comparer",
    title: "LightChats vs ManyChat",
    intro:
      "Les deux sont des plateformes d'automatisation Instagram via l'API officielle. Voici une comparaison honnête et détaillée pour choisir l'outil adapté à votre usage.",
    competitorHeader: "Quand ManyChat est plus adapté",
    competitorBullets: [
      "Vous êtes une équipe multi-canal qui a besoin de Messenger, SMS et WhatsApp dès le premier jour",
      "Vous avez déjà une bibliothèque de flux ManyChat conséquente et ne souhaitez pas migrer",
      "Vous avez besoin d'un fournisseur reconnu pour un processus d'achat en entreprise",
    ],
    ourHeader: "Quand LightChats est plus adapté",
    ourBullets: [
      "Instagram est votre principal canal et vous voulez un outil optimisé pour lui, pas une option multi-canal secondaire",
      "Vous voulez une tarification fixe sans dérive au prorata des contacts",
      "Vous voulez des conversations IA incluses, pas en supplément",
      "Vous êtes une agence ou un affilié et souhaitez de meilleures commissions à vie (prime de 5 $ + 15 % à vie)",
    ],
    rows: [
      {
        feature: "Réponses IA du plan gratuit",
        lightchats: "150 / mois",
        competitor: "Limitées ou indisponibles",
      },
      {
        feature: "Réponses statiques du plan gratuit",
        lightchats: "1 000 / mois",
        competitor: "1 000 contacts (métrique différente)",
      },
      {
        feature: "Plan payant le moins cher (mensuel)",
        lightchats: "9 $ — Pro",
        competitor: "15 $ — Pro",
      },
      {
        feature: "Conversations IA incluses dans le plan payant le moins cher",
        lightchats: "Oui (propulsé par Claude)",
        competitor: "Module IA en supplément, coût additionnel",
      },
      {
        feature: "Modèle de tarification",
        lightchats: "Tarif fixe + recharges optionnelles à 4,90 $",
        competitor: "Paliers par contacts (le prix augmente)",
      },
      {
        feature: "Constructeur de flux visuel",
        lightchats: "Oui",
        competitor: "Oui",
      },
      {
        feature: "Déclencheur de réponse aux stories",
        lightchats: "Gratuit + payant",
        competitor: "Payant uniquement",
      },
      {
        feature: "Déclencheur de commentaire en direct",
        lightchats: "Pro et Business",
        competitor: "Paliers supérieurs uniquement",
      },
      {
        feature: "Programme d'affiliation",
        lightchats: "30 % × 12 mois, puis 15 % à vie + prime de 5 $",
        competitor: "30 % fixes, sans rémunération à vie",
      },
      {
        feature: "Filigrane sur les DM du plan gratuit",
        lightchats: '« Sent via LightChats ⚡ »',
        competitor: "Mention de marque sur le plan gratuit",
      },
    ],
    featureColLabel: "Fonctionnalité",
    competitorColLabel: "ManyChat",
    footnote:
      "Comparaison basée sur les plans publiés au 26/04/2026. ManyChat et le logo ManyChat sont des marques de leurs détenteurs respectifs.",
    ctaTitle: "Essayez gratuitement, sans carte",
    ctaSub:
      "Voyez comment LightChats gère vos flux existants. Le plan gratuit inclut un quota réellement utilisable.",
    ctaPrimary: "Commencer gratuitement",
    ctaSecondary: "Voir toutes les fonctionnalités",
  },
  ar: {
    eyebrow: "مقارنة",
    title: "LightChats مقابل ManyChat",
    intro:
      "كلاهما منصة لأتمتة إنستغرام عبر الواجهة الرسمية. هذه مقارنة صادقة وموجزة لمساعدتك في اختيار الأنسب لاستخدامك.",
    competitorHeader: "متى يكون ManyChat أنسب",
    competitorBullets: [
      "أنت فريق متعدد القنوات ويحتاج إلى Messenger وSMS وWhatsApp منذ اليوم الأول",
      "لديك بالفعل مكتبة تدفقات معمّقة في ManyChat ولا ترغب في الترحيل",
      "تحتاج إلى مورّد بعلامة تجارية شهيرة لعملية شراء مؤسسية",
    ],
    ourHeader: "متى يكون LightChats أنسب",
    ourBullets: [
      "إنستغرام هو قناتك الرئيسية وتريد أداة مُحسَّنة له، لا حلاً متعدد القنوات يضع إنستغرام في المرتبة الثانية",
      "تريد تسعيراً ثابتاً دون تضخّم بحسب عدد جهات الاتصال",
      "تريد محادثات الذكاء الاصطناعي مضمّنة، لا كإضافة بتكلفة منفصلة",
      "أنت وكالة أو شريك بالعمولة وتريد عمولات أفضل مدى الحياة (مكافأة 5$ + 15٪ مدى الحياة)",
    ],
    rows: [
      {
        feature: "ردود الذكاء الاصطناعي في الباقة المجانية",
        lightchats: "150 / شهر",
        competitor: "محدودة أو غير متاحة",
      },
      {
        feature: "الردود الثابتة في الباقة المجانية",
        lightchats: "1,000 / شهر",
        competitor: "1,000 جهة اتصال (وحدة قياس مختلفة)",
      },
      {
        feature: "أرخص باقة مدفوعة (شهرياً)",
        lightchats: "$9 — Pro",
        competitor: "$15 — Pro",
      },
      {
        feature: "محادثات الذكاء الاصطناعي ضمن أرخص باقة مدفوعة",
        lightchats: "نعم (مدعوم بـ Claude)",
        competitor: "إضافة ذكاء اصطناعي بتكلفة منفصلة",
      },
      {
        feature: "نموذج التسعير",
        lightchats: "تسعير ثابت + شحنات اختيارية بـ $4.90",
        competitor: "شرائح حسب عدد جهات الاتصال (يرتفع السعر)",
      },
      {
        feature: "منشئ التدفقات البصري",
        lightchats: "نعم",
        competitor: "نعم",
      },
      {
        feature: "محفز الردّ على القصص",
        lightchats: "مجاني + مدفوع",
        competitor: "مدفوع فقط",
      },
      {
        feature: "محفز التعليقات الفورية",
        lightchats: "Pro وBusiness",
        competitor: "في الباقات الأعلى فقط",
      },
      {
        feature: "برنامج الشركاء",
        lightchats: "30٪ × 12 شهراً، ثم 15٪ مدى الحياة + مكافأة 5$",
        competitor: "30٪ ثابتة، دون عمولات مدى الحياة",
      },
      {
        feature: "علامة على رسائل الباقة المجانية",
        lightchats: '"Sent via LightChats ⚡"',
        competitor: "رد يحمل علامة المزوّد على الباقة المجانية",
      },
    ],
    featureColLabel: "الميزة",
    competitorColLabel: "ManyChat",
    footnote:
      "تعكس المقارنة الباقات المعلنة حتى 2026-04-26. ManyChat وشعار ManyChat علامتان تجاريتان لأصحابهما.",
    ctaTitle: "جرّب مجاناً دون بطاقة",
    ctaSub:
      "اكتشف كيف يتعامل LightChats مع تدفقاتك الحالية. تأتي الباقة المجانية بحصة فعلية مفيدة.",
    ctaPrimary: "ابدأ مجاناً",
    ctaSecondary: "عرض كل الميزات",
  },
};
