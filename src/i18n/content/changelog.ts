import type { Lang } from "../LanguageContext";

export type ChangelogTag = "Launch" | "Feature" | "Improvement" | "Fix";

interface ChangelogEntry {
  date: string;
  version?: string;
  tag: ChangelogTag;
  tagLabel: string;
  title: string;
  changes: string[];
}

interface ChangelogContent {
  eyebrow: string;
  h1: string;
  intro: string;
  entries: ChangelogEntry[];
  subscribeTitle: string;
  subscribePre: string;
  subscribeLink: string;
  subscribePost: string;
}

export const changelog: Record<Lang, ChangelogContent> = {
  en: {
    eyebrow: "Changelog",
    h1: "What's new in LightChats",
    intro:
      "A running log of features, improvements, and fixes. Newest first.",
    entries: [
      {
        date: "2026-04-26",
        version: "v1.0.0",
        tag: "Launch",
        tagLabel: "Launch",
        title: "LightChats public launch",
        changes: [
          "Free, Pro ($9/mo), and Agency ($29/mo) plans live",
          "Visual flow builder, AI replies, AI conversations, conditions, contact groups",
          "Affiliate program: 30% × 12mo, then 15% lifetime, plus $5 instant bounty",
          "Auto top-ups: $4.90 (Pro) and $14.90 (Agency)",
          "Annual billing with up to 27% savings",
        ],
      },
      {
        date: "2026-04-19",
        tag: "Feature",
        tagLabel: "Feature",
        title: "AI conversations beta",
        changes: [
          "Multi-turn DM threads driven by Claude",
          "Per-contact AI kill switch from the inbox",
          'New "Ask for" actions to collect email, phone, address mid-conversation',
        ],
      },
      {
        date: "2026-04-12",
        tag: "Feature",
        tagLabel: "Feature",
        title: "Visual flow builder v2",
        changes: [
          "Branching nodes with tag, contact-group, and AI-classification conditions",
          "Reusable sub-flows",
          "Live preview pane",
        ],
      },
      {
        date: "2026-04-05",
        tag: "Improvement",
        tagLabel: "Improvement",
        title: "Faster Instagram OAuth",
        changes: [
          "Reduced connect-account flow from 6 steps to 3",
          "Better error messages when an Instagram account isn't linked to a Facebook Page",
        ],
      },
      {
        date: "2026-03-29",
        tag: "Launch",
        tagLabel: "Launch",
        title: "Private beta",
        changes: [
          "Closed beta with 200 creators",
          "Comment + DM auto-reply, basic flow automations, contact import",
        ],
      },
    ],
    subscribeTitle: "Subscribe to updates",
    subscribePre: "We don't have a mailing list yet — for now, follow ",
    subscribeLink: "the app",
    subscribePost: " for in-product release notes.",
  },
  fr: {
    eyebrow: "Changelog",
    h1: "Nouveautés de LightChats",
    intro:
      "Un journal continu des fonctionnalités, améliorations et correctifs. Le plus récent en premier.",
    entries: [
      {
        date: "2026-04-26",
        version: "v1.0.0",
        tag: "Launch",
        tagLabel: "Lancement",
        title: "Lancement public de LightChats",
        changes: [
          "Plans Gratuit, Pro (9 $/mois) et Agence (29 $/mois) disponibles",
          "Constructeur de flux visuel, réponses IA, conversations IA, conditions, groupes de contacts",
          "Programme d'affiliation : 30 % pendant 12 mois, puis 15 % à vie, plus une prime instantanée de 5 $",
          "Recharges automatiques : 4,90 $ (Pro) et 14,90 $ (Agence)",
          "Facturation annuelle avec jusqu'à 27 % d'économies",
        ],
      },
      {
        date: "2026-04-19",
        tag: "Feature",
        tagLabel: "Fonctionnalité",
        title: "Conversations IA en bêta",
        changes: [
          "Fils de DM multi-tours pilotés par Claude",
          "Bouton d'arrêt IA par contact directement depuis la boîte de réception",
          "Nouvelles actions « Demander » pour collecter e-mail, téléphone et adresse en cours de conversation",
        ],
      },
      {
        date: "2026-04-12",
        tag: "Feature",
        tagLabel: "Fonctionnalité",
        title: "Constructeur de flux visuel v2",
        changes: [
          "Nœuds de branchement avec conditions par tag, groupe de contacts et classification IA",
          "Sous-flux réutilisables",
          "Panneau d'aperçu en direct",
        ],
      },
      {
        date: "2026-04-05",
        tag: "Improvement",
        tagLabel: "Amélioration",
        title: "OAuth Instagram plus rapide",
        changes: [
          "Flux de connexion réduit de 6 à 3 étapes",
          "Meilleurs messages d'erreur quand un compte Instagram n'est pas lié à une page Facebook",
        ],
      },
      {
        date: "2026-03-29",
        tag: "Launch",
        tagLabel: "Lancement",
        title: "Bêta privée",
        changes: [
          "Bêta fermée avec 200 créateurs",
          "Réponse auto aux commentaires et DM, automatisations basiques, import de contacts",
        ],
      },
    ],
    subscribeTitle: "S'abonner aux mises à jour",
    subscribePre:
      "Nous n'avons pas encore de liste de diffusion — pour l'instant, suivez ",
    subscribeLink: "l'application",
    subscribePost: " pour les notes de version intégrées au produit.",
  },
  ar: {
    eyebrow: "سجل التغييرات",
    h1: "ما الجديد في LightChats",
    intro:
      "سجل مستمر للميزات والتحسينات والإصلاحات. الأحدث أولاً.",
    entries: [
      {
        date: "2026-04-26",
        version: "v1.0.0",
        tag: "Launch",
        tagLabel: "إطلاق",
        title: "الإطلاق العام لـ LightChats",
        changes: [
          "إتاحة باقات Free وPro (9$/شهر) وAgency (29$/شهر)",
          "منشئ تدفقات بصري، وردود ذكاء اصطناعي، ومحادثات ذكاء اصطناعي، وشروط، ومجموعات جهات اتصال",
          "برنامج التسويق بالعمولة: 30٪ لمدة 12 شهراً، ثم 15٪ مدى الحياة، بالإضافة إلى مكافأة فورية بـ 5$",
          "إعادة شحن تلقائية: 4.90$ (Pro) و14.90$ (Agency)",
          "فوترة سنوية مع توفير يصل إلى 27٪",
        ],
      },
      {
        date: "2026-04-19",
        tag: "Feature",
        tagLabel: "ميزة",
        title: "محادثات الذكاء الاصطناعي (بيتا)",
        changes: [
          "محادثات DM متعددة الأدوار مدعومة بـ Claude",
          "زرّ إيقاف الذكاء الاصطناعي لكل جهة اتصال من صندوق الوارد",
          'إجراءات "اطلب" الجديدة لجمع البريد الإلكتروني والهاتف والعنوان أثناء المحادثة',
        ],
      },
      {
        date: "2026-04-12",
        tag: "Feature",
        tagLabel: "ميزة",
        title: "منشئ التدفقات البصري الإصدار الثاني",
        changes: [
          "عُقد تفرع مع شروط حسب الوسم ومجموعة جهات الاتصال وتصنيف الذكاء الاصطناعي",
          "تدفقات فرعية قابلة لإعادة الاستخدام",
          "لوحة معاينة مباشرة",
        ],
      },
      {
        date: "2026-04-05",
        tag: "Improvement",
        tagLabel: "تحسين",
        title: "OAuth إنستغرام أسرع",
        changes: [
          "تقليل خطوات ربط الحساب من 6 إلى 3",
          "رسائل خطأ أوضح عندما لا يكون حساب إنستغرام مرتبطاً بصفحة Facebook",
        ],
      },
      {
        date: "2026-03-29",
        tag: "Launch",
        tagLabel: "إطلاق",
        title: "النسخة التجريبية الخاصة",
        changes: [
          "بيتا مغلقة مع 200 مبدع",
          "رد تلقائي على التعليقات والرسائل، أتمتة تدفقات أساسية، استيراد جهات اتصال",
        ],
      },
    ],
    subscribeTitle: "اشترك في التحديثات",
    subscribePre: "ليست لدينا قائمة بريدية بعد — في الوقت الحالي، تابع ",
    subscribeLink: "التطبيق",
    subscribePost: " للاطلاع على ملاحظات الإصدار داخل المنتج.",
  },
};
