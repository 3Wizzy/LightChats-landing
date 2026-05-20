import type { Lang } from "../LanguageContext";

interface Row {
  feature: string;
  lightchats: string;
  competitor: string;
}

interface CompareRespondioContent {
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

export const compareRespondio: Record<Lang, CompareRespondioContent> = {
  en: {
    eyebrow: "Compare",
    title: "LightChats vs Respond.io",
    intro:
      "Respond.io is a powerful multi-channel customer-conversation platform built for support teams. LightChats is a creator-first Instagram automation tool. Different audiences, different price points.",
    competitorHeader: "When Respond.io fits better",
    competitorBullets: [
      "You're a customer-support team running 10+ agents across multiple channels",
      "You need SLA tracking, ticket routing, and detailed reporting",
      "You're integrating with Salesforce, HubSpot, or Zendesk",
      "Your budget supports $79+/month per workspace",
    ],
    ourHeader: "When LightChats fits better",
    ourBullets: [
      "You're a creator, solopreneur, or small business focused on Instagram",
      "You want to be automating in 5 minutes, not in 5 weeks",
      "You want a $9/month tool, not a $79/month platform",
      "You want AI replies built in, not as an add-on subscription",
    ],
    rows: [
      {
        feature: "Best for",
        lightchats: "Creators, solopreneurs, small/medium agencies",
        competitor: "Mid-market and enterprise customer support teams",
      },
      {
        feature: "Cheapest paid plan (monthly)",
        lightchats: "$9 — Pro",
        competitor: "$79+ — Starter / Growth",
      },
      {
        feature: "Setup time",
        lightchats: "~5 minutes (connect IG, build a flow)",
        competitor: "Weeks for full multi-channel + CRM rollout",
      },
      {
        feature: "Channel coverage",
        lightchats: "Instagram (WhatsApp on roadmap)",
        competitor:
          "10+ channels (WhatsApp, Messenger, Telegram, SMS, web chat, etc.)",
      },
      {
        feature: "Visual flow builder",
        lightchats: "Yes",
        competitor: "Yes (more complex)",
      },
      {
        feature: "AI replies & conversations",
        lightchats: "Claude — included on Pro",
        competitor: "AI add-on, separately priced",
      },
      {
        feature: "Pricing model",
        lightchats: "Flat rate + capped opt-in top-ups",
        competitor: "Per-seat + per-contact + per-message tiering",
      },
      {
        feature: "CRM features",
        lightchats: 'Tags, contact groups, AI "ask-for" actions',
        competitor: "Full CRM with team workflows, SLA, reporting",
      },
      {
        feature: "Affiliate program",
        lightchats: "30% × 12mo, then 15% lifetime + $5 bounty",
        competitor: "Standard partner program",
      },
    ],
    featureColLabel: "Feature",
    competitorColLabel: "Respond.io",
    footnote:
      "Comparison reflects publicly listed plans as of 2026-04-26. Respond.io and the Respond.io logo are trademarks of their respective owners.",
    ctaTitle: "Right-sized tool, right-sized price",
    ctaSub:
      "If Instagram is where your customers are, LightChats is built for you.",
    ctaPrimary: "Get Started Free",
    ctaSecondary: "See features",
  },
  fr: {
    eyebrow: "Comparer",
    title: "LightChats vs Respond.io",
    intro:
      "Respond.io est une plateforme multi-canal puissante de gestion des conversations clients, pensée pour les équipes de support. LightChats est un outil d'automatisation Instagram pensé d'abord pour les créateurs. Audiences et tarifs différents.",
    competitorHeader: "Quand Respond.io est plus adapté",
    competitorBullets: [
      "Vous êtes une équipe de support avec plus de 10 agents répartis sur plusieurs canaux",
      "Vous avez besoin du suivi SLA, du routage de tickets et de rapports détaillés",
      "Vous vous intégrez à Salesforce, HubSpot ou Zendesk",
      "Votre budget couvre 79 $+/mois par espace de travail",
    ],
    ourHeader: "Quand LightChats est plus adapté",
    ourBullets: [
      "Vous êtes un créateur, un indépendant ou une petite entreprise centrée sur Instagram",
      "Vous voulez automatiser en 5 minutes, pas en 5 semaines",
      "Vous voulez un outil à 9 $/mois, pas une plateforme à 79 $/mois",
      "Vous voulez des réponses IA intégrées, pas en abonnement séparé",
    ],
    rows: [
      {
        feature: "Idéal pour",
        lightchats:
          "Créateurs, indépendants, petites et moyennes agences",
        competitor:
          "Équipes support des entreprises moyennes et grandes",
      },
      {
        feature: "Plan payant le moins cher (mensuel)",
        lightchats: "9 $ — Pro",
        competitor: "79 $+ — Starter / Growth",
      },
      {
        feature: "Temps de mise en place",
        lightchats: "≈ 5 minutes (connecter IG, créer un flux)",
        competitor:
          "Plusieurs semaines pour un déploiement multi-canal + CRM complet",
      },
      {
        feature: "Couverture des canaux",
        lightchats: "Instagram (WhatsApp prévu)",
        competitor:
          "Plus de 10 canaux (WhatsApp, Messenger, Telegram, SMS, chat web, etc.)",
      },
      {
        feature: "Constructeur de flux visuel",
        lightchats: "Oui",
        competitor: "Oui (plus complexe)",
      },
      {
        feature: "Réponses et conversations IA",
        lightchats: "Claude — inclus dans Pro",
        competitor: "Module IA en supplément, facturé à part",
      },
      {
        feature: "Modèle de tarification",
        lightchats:
          "Tarif fixe + recharges optionnelles plafonnées",
        competitor:
          "Tarification par utilisateur + par contact + par message",
      },
      {
        feature: "Fonctionnalités CRM",
        lightchats:
          "Tags, groupes de contacts, actions IA « demander »",
        competitor:
          "CRM complet avec workflows d'équipe, SLA et rapports",
      },
      {
        feature: "Programme d'affiliation",
        lightchats: "30 % × 12 mois, puis 15 % à vie + prime de 5 $",
        competitor: "Programme partenaire standard",
      },
    ],
    featureColLabel: "Fonctionnalité",
    competitorColLabel: "Respond.io",
    footnote:
      "Comparaison basée sur les plans publiés au 26/04/2026. Respond.io et le logo Respond.io sont des marques de leurs détenteurs respectifs.",
    ctaTitle: "Le bon outil, au bon prix",
    ctaSub:
      "Si Instagram est là où sont vos clients, LightChats est fait pour vous.",
    ctaPrimary: "Commencer gratuitement",
    ctaSecondary: "Voir les fonctionnalités",
  },
  ar: {
    eyebrow: "مقارنة",
    title: "LightChats مقابل Respond.io",
    intro:
      "Respond.io منصة قوية لإدارة محادثات العملاء عبر قنوات متعددة، مصمَّمة لفرق الدعم. أما LightChats فهو أداة لأتمتة إنستغرام موجَّهة للمبدعين أولاً. جمهور مختلف وتسعير مختلف.",
    competitorHeader: "متى يكون Respond.io أنسب",
    competitorBullets: [
      "أنت فريق دعم عملاء بأكثر من 10 وكلاء يعملون عبر قنوات متعددة",
      "تحتاج إلى تتبّع اتفاقيات مستوى الخدمة وتوجيه التذاكر وتقارير تفصيلية",
      "تتكامل مع Salesforce أو HubSpot أو Zendesk",
      "ميزانيتك تستوعب 79$ أو أكثر شهرياً لكل مساحة عمل",
    ],
    ourHeader: "متى يكون LightChats أنسب",
    ourBullets: [
      "أنت مبدع أو رائد أعمال فردي أو شركة صغيرة تركّز على إنستغرام",
      "تريد أن تبدأ الأتمتة خلال 5 دقائق، لا خلال 5 أسابيع",
      "تريد أداة بـ 9$ شهرياً، لا منصة بـ 79$ شهرياً",
      "تريد ردود الذكاء الاصطناعي مدمجة، لا كاشتراك إضافي منفصل",
    ],
    rows: [
      {
        feature: "الأنسب لـ",
        lightchats: "المبدعون، رواد الأعمال الأفراد، الوكالات الصغيرة والمتوسطة",
        competitor: "فرق دعم العملاء في الشركات المتوسطة والكبيرة",
      },
      {
        feature: "أرخص باقة مدفوعة (شهرياً)",
        lightchats: "$9 — Pro",
        competitor: "$79+ — Starter / Growth",
      },
      {
        feature: "زمن الإعداد",
        lightchats: "نحو 5 دقائق (اربط إنستغرام، أنشئ تدفقاً)",
        competitor: "أسابيع لتفعيل القنوات المتعددة وإدارة العلاقات بالكامل",
      },
      {
        feature: "تغطية القنوات",
        lightchats: "إنستغرام (WhatsApp مُخطّط له)",
        competitor:
          "أكثر من 10 قنوات (WhatsApp وMessenger وTelegram وSMS ومحادثة الويب وغيرها)",
      },
      {
        feature: "منشئ التدفقات البصري",
        lightchats: "نعم",
        competitor: "نعم (أكثر تعقيداً)",
      },
      {
        feature: "ردود ومحادثات الذكاء الاصطناعي",
        lightchats: "Claude — مضمّن في باقة Pro",
        competitor: "إضافة ذكاء اصطناعي بسعر منفصل",
      },
      {
        feature: "نموذج التسعير",
        lightchats: "تسعير ثابت + شحنات اختيارية بحد أعلى",
        competitor:
          "تسعير حسب المستخدم + جهة الاتصال + الرسالة",
      },
      {
        feature: "ميزات إدارة العلاقات",
        lightchats: 'الوسوم ومجموعات جهات الاتصال وإجراءات "اطلب" الذكية',
        competitor:
          "نظام CRM كامل مع سير عمل للفريق واتفاقيات خدمة وتقارير",
      },
      {
        feature: "برنامج الشركاء",
        lightchats: "30٪ × 12 شهراً، ثم 15٪ مدى الحياة + مكافأة 5$",
        competitor: "برنامج شركاء تقليدي",
      },
    ],
    featureColLabel: "الميزة",
    competitorColLabel: "Respond.io",
    footnote:
      "تعكس المقارنة الباقات المعلنة حتى 2026-04-26. Respond.io وشعار Respond.io علامتان تجاريتان لأصحابهما.",
    ctaTitle: "أداة بالحجم المناسب وسعر مناسب",
    ctaSub: "إذا كان عملاؤك على إنستغرام، فإن LightChats صُمم لك.",
    ctaPrimary: "ابدأ مجاناً",
    ctaSecondary: "عرض الميزات",
  },
};
