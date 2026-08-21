import type { Lang } from "./LanguageContext";

export interface RouteMeta {
  title: string;
  description: string;
  breadcrumbLabel?: string;
}

export const routeMeta: Record<Lang, Record<string, RouteMeta>> = {
  en: {
    "/": {
      title: "LightChats — Engage at the Speed of Light",
      description:
        "Drive more sales and conversions on Instagram using chat automation. Automate DMs, build visual flows, and convert followers into customers.",
    },
    "/privacy": {
      title: "Privacy Policy — LightChats",
      description:
        "Learn how LightChats collects, uses, and protects your data. Read our full privacy policy.",
      breadcrumbLabel: "Privacy Policy",
    },
    "/terms": {
      title: "Terms & Conditions — LightChats",
      description:
        "Read the terms and conditions for using LightChats, our Instagram chat marketing automation platform.",
      breadcrumbLabel: "Terms & Conditions",
    },
    "/support": {
      title: "Support — LightChats",
      description:
        "Get help with LightChats. Email contact@lightchats.com or call +1 (380) 257-4689 — our support team responds within 24 business hours.",
      breadcrumbLabel: "Support",
    },
    "/pricing": {
      title: "Pricing — LightChats",
      description:
        "Simple, transparent pricing for LightChats. Pro ($9/mo) and Business ($29/mo) plans, with auto top-ups, annual savings up to 27%, and a 30% recurring affiliate program.",
      breadcrumbLabel: "Pricing",
    },
    "/data-deletion": {
      title: "Data Deletion — LightChats",
      description:
        "How to permanently delete your LightChats account and all associated data. Self-service from the app, or by email request to contact@lightchats.com.",
      breadcrumbLabel: "Data Deletion",
    },
    "/ai-disclosure": {
      title: "AI Disclosure — LightChats",
      description:
        "How LightChats uses AI in Instagram replies and conversations, what data the AI sees, and the safeguards in place. Required disclosure under Meta's AI Messaging policy.",
      breadcrumbLabel: "AI Disclosure",
    },
    "/features": {
      title: "Features — LightChats",
      description:
        "Visual flow builder, every Instagram trigger, AI replies and conversations powered by Claude, conditions and branching, contact management, and a unified inbox.",
      breadcrumbLabel: "Features",
    },
    "/about": {
      title: "About — LightChats",
      description:
        "About LightChats — an independent team building Instagram chat automation that's good enough that recipients don't notice it as automation. Our mission, values, and roadmap.",
      breadcrumbLabel: "About",
    },
    "/blog": {
      title: "Blog — LightChats",
      description:
        "Notes from the LightChats team. Product updates, deep dives on Instagram chat automation, and lessons we're learning while building this thing.",
      breadcrumbLabel: "Blog",
    },
    "/blog/announcing-lightchats": {
      title: "Announcing LightChats — Instagram chat automation, done right",
      description:
        "Why we built another Instagram automation tool, what we shipped on day one (Free / Pro $9 / Business $29), what we said no to, and what's on the roadmap for 2026.",
      breadcrumbLabel: "Announcing LightChats",
    },
    "/affiliates": {
      title: "Affiliate Program — LightChats",
      description:
        "Earn 30% recurring for the first 12 months, then 15% lifetime, plus a $5 instant bounty per referral. No quotas, no waiting period.",
      breadcrumbLabel: "Affiliates",
    },
    "/compare/manychat": {
      title: "LightChats vs ManyChat — Honest comparison",
      description:
        "A side-by-side comparison of LightChats and ManyChat for Instagram automation: pricing, AI features, triggers, and affiliate programs.",
      breadcrumbLabel: "vs ManyChat",
    },
    "/compare/respond-io": {
      title: "LightChats vs Respond.io — Honest comparison",
      description:
        "Respond.io is a multi-channel platform for support teams. LightChats is a creator-first Instagram automation tool. Different audiences, different price points.",
      breadcrumbLabel: "vs Respond.io",
    },
    "/changelog": {
      title: "Changelog — LightChats",
      description:
        "A running log of features, improvements, and fixes shipped to LightChats. Newest first.",
      breadcrumbLabel: "Changelog",
    },
    "/security": {
      title: "Security — LightChats",
      description:
        "How LightChats protects your data: TLS 1.3 in transit, AES-256 at rest, OAuth-only Instagram authentication, Stripe-handled payments, and Anthropic's no-training data policy for AI.",
      breadcrumbLabel: "Security",
    },
    "/help": {
      title: "Help Center — LightChats",
      description:
        "Quick answers about getting started, triggers and actions, billing, and the affiliate program. For anything not covered, our support team replies within 24 business hours.",
      breadcrumbLabel: "Help Center",
    },
  },
  fr: {
    "/": {
      title: "LightChats — Engagez à la vitesse de la lumière",
      description:
        "Boostez vos ventes et conversions sur Instagram grâce à l'automatisation. Automatisez les DM, créez des flux visuels et convertissez vos abonnés en clients.",
    },
    "/privacy": {
      title: "Politique de confidentialité — LightChats",
      description:
        "Découvrez comment LightChats collecte, utilise et protège vos données. Lisez notre politique de confidentialité complète.",
      breadcrumbLabel: "Politique de confidentialité",
    },
    "/terms": {
      title: "Conditions d'utilisation — LightChats",
      description:
        "Lisez les conditions d'utilisation de LightChats, notre plateforme d'automatisation marketing par chat pour Instagram.",
      breadcrumbLabel: "Conditions d'utilisation",
    },
    "/support": {
      title: "Assistance — LightChats",
      description:
        "Obtenez de l'aide pour LightChats. Écrivez à contact@lightchats.com ou appelez le +1 (380) 257-4689 — notre équipe répond sous 24 heures ouvrées.",
      breadcrumbLabel: "Assistance",
    },
    "/pricing": {
      title: "Tarifs — LightChats",
      description:
        "Tarification simple et transparente. Forfaits Pro (9 $/mois) et Business (29 $/mois), recharges automatiques, jusqu'à 27 % d'économies en annuel et un programme d'affiliation à 30 % récurrent.",
      breadcrumbLabel: "Tarifs",
    },
    "/data-deletion": {
      title: "Suppression de données — LightChats",
      description:
        "Comment supprimer définitivement votre compte LightChats et toutes les données associées. En libre-service depuis l'app ou par email à contact@lightchats.com.",
      breadcrumbLabel: "Suppression de données",
    },
    "/ai-disclosure": {
      title: "Divulgation IA — LightChats",
      description:
        "Comment LightChats utilise l'IA dans les réponses et conversations Instagram, quelles données sont vues et quelles garanties existent. Divulgation requise par la politique d'IA Messaging de Meta.",
      breadcrumbLabel: "Divulgation IA",
    },
    "/features": {
      title: "Fonctionnalités — LightChats",
      description:
        "Constructeur de flux visuel, tous les déclencheurs Instagram, réponses et conversations IA propulsées par Claude, logique conditionnelle, gestion des contacts et boîte de réception unifiée.",
      breadcrumbLabel: "Fonctionnalités",
    },
    "/about": {
      title: "À propos — LightChats",
      description:
        "À propos de LightChats — une équipe indépendante qui construit une automatisation Instagram si bonne que les destinataires ne la remarquent pas. Notre mission, nos valeurs et notre feuille de route.",
      breadcrumbLabel: "À propos",
    },
    "/blog": {
      title: "Blog — LightChats",
      description:
        "Notes de l'équipe LightChats. Nouveautés produit, analyses approfondies de l'automatisation Instagram et leçons apprises en construisant cet outil.",
      breadcrumbLabel: "Blog",
    },
    "/blog/announcing-lightchats": {
      title: "Présentation de LightChats — l'automatisation Instagram, bien faite",
      description:
        "Pourquoi nous avons créé un nouvel outil d'automatisation Instagram, ce que nous avons livré dès le jour 1 (Gratuit / Pro 9 $ / Business 29 $), nos refus, et notre feuille de route 2026.",
      breadcrumbLabel: "Présentation de LightChats",
    },
    "/affiliates": {
      title: "Programme d'affiliation — LightChats",
      description:
        "Gagnez 30 % récurrents pendant 12 mois, puis 15 % à vie, plus 5 $ de prime instantanée par filleul. Sans quota, sans période d'attente.",
      breadcrumbLabel: "Affiliés",
    },
    "/compare/manychat": {
      title: "LightChats vs ManyChat — Comparaison honnête",
      description:
        "Comparaison côte à côte de LightChats et ManyChat pour l'automatisation Instagram : tarifs, fonctionnalités IA, déclencheurs et programmes d'affiliation.",
      breadcrumbLabel: "vs ManyChat",
    },
    "/compare/respond-io": {
      title: "LightChats vs Respond.io — Comparaison honnête",
      description:
        "Respond.io est une plateforme multicanal pour équipes de support. LightChats est un outil d'automatisation Instagram pensé pour les créateurs. Cibles différentes, prix différents.",
      breadcrumbLabel: "vs Respond.io",
    },
    "/changelog": {
      title: "Nouveautés — LightChats",
      description:
        "Journal continu des fonctionnalités, améliorations et corrections livrées dans LightChats. Plus récent en premier.",
      breadcrumbLabel: "Nouveautés",
    },
    "/security": {
      title: "Sécurité — LightChats",
      description:
        "Comment LightChats protège vos données : TLS 1.3 en transit, AES-256 au repos, authentification Instagram OAuth uniquement, paiements gérés par Stripe et politique de non-entraînement IA d'Anthropic.",
      breadcrumbLabel: "Sécurité",
    },
    "/help": {
      title: "Centre d'aide — LightChats",
      description:
        "Réponses rapides sur la prise en main, les déclencheurs et actions, la facturation et le programme d'affiliation. Pour le reste, notre équipe répond sous 24 heures ouvrées.",
      breadcrumbLabel: "Centre d'aide",
    },
  },
  ar: {
    "/": {
      title: "LightChats — تفاعل بسرعة الضوء",
      description:
        "حقّق المزيد من المبيعات والتحويلات على إنستغرام عبر أتمتة المحادثات. أتمت الرسائل المباشرة وابنِ تدفقات بصرية وحوّل المتابعين إلى عملاء.",
    },
    "/privacy": {
      title: "سياسة الخصوصية — LightChats",
      description:
        "تعرّف على كيفية جمع LightChats لبياناتك واستخدامها وحمايتها. اقرأ سياسة الخصوصية كاملة.",
      breadcrumbLabel: "سياسة الخصوصية",
    },
    "/terms": {
      title: "الشروط والأحكام — LightChats",
      description:
        "اقرأ شروط وأحكام استخدام LightChats، منصة أتمتة التسويق عبر المحادثات على إنستغرام.",
      breadcrumbLabel: "الشروط والأحكام",
    },
    "/support": {
      title: "الدعم — LightChats",
      description:
        "احصل على المساعدة من LightChats. راسلنا على contact@lightchats.com أو اتصل بـ +1 (380) 257-4689 — يرد فريق الدعم خلال 24 ساعة عمل.",
      breadcrumbLabel: "الدعم",
    },
    "/pricing": {
      title: "الأسعار — LightChats",
      description:
        "تسعير بسيط وشفاف من LightChats. باقتا Pro (9$/شهر) وBusiness (29$/شهر) مع إعادة شحن تلقائية، توفير سنوي يصل إلى 27٪، وبرنامج إحالة بنسبة 30٪ متكرر.",
      breadcrumbLabel: "الأسعار",
    },
    "/data-deletion": {
      title: "حذف البيانات — LightChats",
      description:
        "طريقة حذف حساب LightChats وكل البيانات المرتبطة به نهائياً. ذاتياً من التطبيق أو عبر طلب بالبريد إلى contact@lightchats.com.",
      breadcrumbLabel: "حذف البيانات",
    },
    "/ai-disclosure": {
      title: "إفصاح الذكاء الاصطناعي — LightChats",
      description:
        "كيف يستخدم LightChats الذكاء الاصطناعي في الردود والمحادثات على إنستغرام، وما البيانات التي يراها، وما الضمانات المطبّقة. إفصاح مطلوب بموجب سياسة Meta للمراسلة بالذكاء الاصطناعي.",
      breadcrumbLabel: "إفصاح الذكاء الاصطناعي",
    },
    "/features": {
      title: "الميزات — LightChats",
      description:
        "منشئ تدفقات بصري، جميع محفزات إنستغرام، ردود ومحادثات ذكاء اصطناعي مدعومة بـ Claude، شروط وتفرعات، إدارة جهات اتصال، وصندوق وارد موحّد.",
      breadcrumbLabel: "الميزات",
    },
    "/about": {
      title: "من نحن — LightChats",
      description:
        "عن LightChats — فريق مستقل يبني أتمتة محادثات إنستغرام بجودة لا يلاحظ معها المتلقي أنها مؤتمتة. مهمتنا وقيمنا وخارطة طريقنا.",
      breadcrumbLabel: "من نحن",
    },
    "/blog": {
      title: "المدونة — LightChats",
      description:
        "ملاحظات من فريق LightChats. تحديثات المنتج، تحليلات معمقة لأتمتة محادثات إنستغرام، ودروس نتعلمها أثناء بناء هذا المنتج.",
      breadcrumbLabel: "المدونة",
    },
    "/blog/announcing-lightchats": {
      title: "إطلاق LightChats — أتمتة محادثات إنستغرام كما يجب أن تكون",
      description:
        "لماذا بنينا أداة أتمتة جديدة لإنستغرام، وما أطلقناه في اليوم الأول (مجاني / Pro بـ 9$ / Business بـ 29$)، وما رفضناه، وما خارطة طريق 2026.",
      breadcrumbLabel: "إطلاق LightChats",
    },
    "/affiliates": {
      title: "برنامج الشركاء — LightChats",
      description:
        "اربح 30٪ متكررة خلال أول 12 شهراً، ثم 15٪ مدى الحياة، بالإضافة إلى 5$ مكافأة فورية لكل إحالة. بدون حصص، وبدون فترة انتظار.",
      breadcrumbLabel: "الشركاء",
    },
    "/compare/manychat": {
      title: "LightChats مقابل ManyChat — مقارنة صريحة",
      description:
        "مقارنة جنباً إلى جنب بين LightChats وManyChat لأتمتة إنستغرام: الأسعار، ميزات الذكاء الاصطناعي، المحفزات، وبرامج الشركاء.",
      breadcrumbLabel: "مقابل ManyChat",
    },
    "/compare/respond-io": {
      title: "LightChats مقابل Respond.io — مقارنة صريحة",
      description:
        "Respond.io منصة متعددة القنوات لفرق الدعم. LightChats أداة أتمتة لإنستغرام موجّهة للمبدعين أولاً. جمهور مختلف، أسعار مختلفة.",
      breadcrumbLabel: "مقابل Respond.io",
    },
    "/changelog": {
      title: "سجل التحديثات — LightChats",
      description:
        "سجل مستمر للميزات والتحسينات والإصلاحات المُطلقة في LightChats. الأحدث أولاً.",
      breadcrumbLabel: "سجل التحديثات",
    },
    "/security": {
      title: "الأمان — LightChats",
      description:
        "كيف يحمي LightChats بياناتك: TLS 1.3 أثناء النقل، AES-256 عند التخزين، مصادقة إنستغرام عبر OAuth حصراً، مدفوعات معالَجة بـ Stripe، وسياسة Anthropic بعدم استخدام البيانات للتدريب.",
      breadcrumbLabel: "الأمان",
    },
    "/help": {
      title: "مركز المساعدة — LightChats",
      description:
        "إجابات سريعة حول البدء والمحفزات والإجراءات والفوترة وبرنامج الشركاء. لأي شيء غير مذكور، يرد فريق الدعم خلال 24 ساعة عمل.",
      breadcrumbLabel: "مركز المساعدة",
    },
  },
};
