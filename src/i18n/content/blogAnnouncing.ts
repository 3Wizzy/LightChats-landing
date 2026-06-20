import type { Lang } from "../LanguageContext";

interface BlogAnnouncingContent {
  back: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  lede: string;
  // Intro paragraph
  intro: string;
  // Section: The problem we kept seeing
  h2Problem: string;
  problemBody: string;
  // Section: What we shipped on day one
  h2Day1: string;
  day1Bullets: {
    a: string; // before any inline link
    plansLink?: string; // text shown for the pricing link, if any
    b?: string; // text after link, if any
  }[];
  // Section: What we said no to
  h2No: string;
  noBullets: string[];
  // Section: What's next
  h2Next: string;
  nextPre: string;
  nextChangelog: string;
  nextPost: string;
  // Closing paragraph
  closingPre: string;
  closingStartFree: string;
  closingPost: string;
}

export const blogAnnouncing: Record<Lang, BlogAnnouncingContent> = {
  en: {
    back: "Back to blog",
    category: "Product",
    date: "2026-04-26",
    readTime: "5 min read",
    title: "Announcing LightChats — Instagram chat automation, done right",
    lede:
      "Why we're building yet another Instagram automation tool, what makes it different, and what's on the roadmap for 2026.",
    intro:
      "There's no shortage of Instagram-DM tools. ManyChat has been around for a decade. Newer tools like Respond.io cover specific niches. So why are we shipping another one?",
    h2Problem: "The problem we kept seeing",
    problemBody:
      "The same automation patterns from 2018 are still being used in 2026. A creator posts a Reel, asks people to comment a keyword, and the bot replies in DM with a link. The follower knows it's a bot — and it shows in the conversion rate. We built LightChats because we wanted automation that's good enough that recipients don't notice it as automation, but still capped, transparent, and policy-safe.",
    h2Day1: "What we shipped on day one",
    day1Bullets: [
      {
        a: "A visual flow builder with branching, conditions, and AI nodes",
      },
      {
        a: "Triggers across every Instagram surface — comments, DMs, stories, lives, mentions",
      },
      {
        a: "AI replies and AI conversations powered by Claude, with strict safety guardrails and per-contact kill switches",
      },
      {
        a: "Three plans: Free (150 AI replies + 1,000 static), ",
        plansLink: "Pro at $9/mo",
        b: ", and Business at $29/mo",
      },
      {
        a: "A built-in affiliate program — 30% recurring for 12 months, then 15% lifetime + a $5 instant bounty",
      },
    ],
    h2No: "What we said no to (for now)",
    noBullets: [
      "Browser-extension-based automation. Instagram Graph API only. It's slower to build but doesn't get accounts banned.",
      "Per-message metering. We hate getting surprise invoices, so we don't ship them.",
      "Multi-channel right out of the gate. WhatsApp, Messenger, and Telegram are on the roadmap, but we'd rather get Instagram excellent first.",
    ],
    h2Next: "What's next",
    nextPre:
      "Multi-account billing for agencies, a public API, and analytics that actually answer \"did my DM automation drive revenue this month?\" Follow the ",
    nextChangelog: "changelog",
    nextPost: " for the running list.",
    closingPre: "If any of this resonates, ",
    closingStartFree: "start free",
    closingPost:
      " — no card required, real quota, and we'd love to hear what you build.",
  },
  fr: {
    back: "Retour au blog",
    category: "Produit",
    date: "2026-04-26",
    readTime: "5 min de lecture",
    title:
      "Annonce de LightChats — l'automatisation des chats Instagram, bien faite",
    lede:
      "Pourquoi nous lançons encore un outil d'automatisation Instagram, ce qui le distingue et ce qui est prévu pour 2026.",
    intro:
      "Les outils de DM Instagram ne manquent pas. ManyChat existe depuis une décennie. Des outils plus récents comme Respond.io couvrent des niches spécifiques. Alors pourquoi en lancer un autre ?",
    h2Problem: "Le problème que nous voyions sans cesse",
    problemBody:
      "Les mêmes schémas d'automatisation qu'en 2018 sont encore utilisés en 2026. Un créateur publie un Reel, demande aux gens de commenter un mot-clé, et le bot répond en DM avec un lien. L'abonné sait que c'est un bot — et cela se voit dans le taux de conversion. Nous avons construit LightChats parce que nous voulions une automatisation suffisamment bonne pour que les destinataires ne la perçoivent pas comme telle, tout en restant plafonnée, transparente et conforme aux règles.",
    h2Day1: "Ce que nous avons livré dès le premier jour",
    day1Bullets: [
      {
        a: "Un constructeur de flux visuel avec branchements, conditions et nœuds IA",
      },
      {
        a: "Des déclencheurs sur toutes les surfaces Instagram — commentaires, DM, stories, lives, mentions",
      },
      {
        a: "Des réponses et des conversations IA propulsées par Claude, avec des garde-fous stricts et un bouton d'arrêt par contact",
      },
      {
        a: "Trois plans : Gratuit (150 réponses IA + 1 000 statiques), ",
        plansLink: "Pro à 9 $/mois",
        b: " et Business à 29 $/mois",
      },
      {
        a: "Un programme d'affiliation intégré — 30 % récurrents pendant 12 mois, puis 15 % à vie + une prime instantanée de 5 $",
      },
    ],
    h2No: "Ce à quoi nous avons dit non (pour l'instant)",
    noBullets: [
      "L'automatisation via extension de navigateur. Uniquement l'API Graph d'Instagram. C'est plus long à construire, mais ne fait pas bannir les comptes.",
      "La facturation au message. Nous détestons recevoir des factures surprises, donc nous n'en envoyons pas.",
      "Le multicanal dès le départ. WhatsApp, Messenger et Telegram sont sur la feuille de route, mais nous préférons rendre Instagram excellent d'abord.",
    ],
    h2Next: "Et ensuite ?",
    nextPre:
      "La facturation multi-comptes pour les agences, une API publique, et des analyses qui répondent vraiment à la question « mon automatisation DM a-t-elle généré du chiffre d'affaires ce mois-ci ? » Suivez le ",
    nextChangelog: "changelog",
    nextPost: " pour la liste en cours.",
    closingPre: "Si cela vous parle, ",
    closingStartFree: "commencez gratuitement",
    closingPost:
      " — pas de carte requise, vrai quota, et nous serions ravis de découvrir ce que vous construisez.",
  },
  ar: {
    back: "العودة إلى المدوّنة",
    category: "المنتج",
    date: "2026-04-26",
    readTime: "قراءة 5 دقائق",
    title:
      "إطلاق LightChats — أتمتة محادثات إنستغرام كما ينبغي",
    lede:
      "لماذا نطلق أداة جديدة لأتمتة إنستغرام، وما الذي يميّزها، وما هو المخطّط لعام 2026.",
    intro:
      "لا يوجد نقص في أدوات رسائل إنستغرام. ManyChat موجود منذ عقد، وأدوات أحدث مثل Respond.io تغطي نِيْشات محدّدة. فلماذا نطلق أداة أخرى؟",
    h2Problem: "المشكلة التي رأيناها تتكرر",
    problemBody:
      "ما زالت أنماط الأتمتة نفسها التي كانت تُستخدم عام 2018 مستعملةً في 2026. ينشر المبدع Reel، يطلب من الناس التعليق بكلمة مفتاحية، ثم يرسل الروبوت الرابط في الرسالة المباشرة. المتابع يعرف أنه روبوت — وهذا ينعكس في معدّل التحويل. بنينا LightChats لأننا أردنا أتمتة جيدة بما يكفي بحيث لا يلاحظها المستلمون كأتمتة، مع إبقائها محدودة وشفافة ومتوافقة مع السياسات.",
    h2Day1: "ما أطلقناه منذ اليوم الأول",
    day1Bullets: [
      {
        a: "منشئ تدفقات بصري مع تفرعات وشروط وعُقد ذكاء اصطناعي",
      },
      {
        a: "محفزات على جميع أسطح إنستغرام — التعليقات والرسائل والقصص والبث المباشر والإشارات",
      },
      {
        a: "ردود ومحادثات بالذكاء الاصطناعي مدعومة بـ Claude، مع ضوابط أمان صارمة وزرّ إيقاف لكل جهة اتصال",
      },
      {
        a: "ثلاث باقات: مجانية (150 رداً بالذكاء الاصطناعي + 1,000 رد ثابت)، ",
        plansLink: "احترافية بـ 9$/شهر",
        b: "، وBusiness بـ 29$/شهر",
      },
      {
        a: "برنامج تسويق بالعمولة مدمج — 30٪ متكرّرة لمدة 12 شهراً، ثم 15٪ مدى الحياة + مكافأة فورية بـ 5$",
      },
    ],
    h2No: "ما رفضناه (في الوقت الحالي)",
    noBullets: [
      "الأتمتة عبر إضافات المتصفح. نعتمد فقط واجهة Graph الرسمية من إنستغرام. بناؤها أبطأ، لكنها لا تتسبّب في حظر الحسابات.",
      "الفوترة لكل رسالة. نحن نكره الفواتير المفاجئة، لذلك لا نُصدرها.",
      "تعدّد القنوات منذ البداية. WhatsApp وMessenger وTelegram ضمن خارطة الطريق، لكننا نُفضّل إتقان إنستغرام أولاً.",
    ],
    h2Next: "ما القادم؟",
    nextPre:
      "فوترة متعددة الحسابات للوكالات، وواجهة برمجة عامة، وتحليلات تجيب فعلاً عن سؤال «هل حقّقت أتمتة الرسائل إيراداً هذا الشهر؟». تابِع ",
    nextChangelog: "سجل التغييرات",
    nextPost: " للحصول على القائمة المستمرة.",
    closingPre: "إذا كان هذا يلامس ما تبحث عنه، ",
    closingStartFree: "ابدأ مجاناً",
    closingPost:
      " — بدون بطاقة، حصّة فعلية، ويسعدنا أن نسمع ما الذي ستبنيه.",
  },
};
