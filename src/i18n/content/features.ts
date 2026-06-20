import type { Lang } from "../LanguageContext";

interface Feature {
  title: string;
  desc: string;
  bullets: string[];
}

interface FeaturesContent {
  eyebrow: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  features: Feature[];
  ctaTitle: string;
  ctaSub: string;
  ctaBtn: string;
  ctaSecondary: string;
}

export const features: Record<Lang, FeaturesContent> = {
  en: {
    eyebrow: "Features",
    heroTitleA: "Everything you need to automate",
    heroTitleB: "Instagram conversations",
    heroSub:
      "Triggers, AI, conditions, contact management, inbox — all built on Instagram's official Graph API. No browser extensions, no unofficial scraping, no risk to your account.",
    features: [
      {
        title: "Visual flow builder",
        desc: "Design every automation as a visual graph — triggers, conditions, delays, AI nodes, and actions linked together. No code, no YAML, no command line.",
        bullets: [
          "Drag-and-drop nodes for triggers, conditions, AI, and outbound messages",
          "Live preview as you edit — see exactly what a follower would receive",
          "Branching logic: send different messages based on tags, contact group, or AI classification",
          "Reusable sub-flows so a single piece can power many entry points",
        ],
      },
      {
        title: "Triggers — every Instagram surface",
        desc: "Start a flow from anywhere a follower interacts with your account. All triggers run on Instagram's official Graph API.",
        bullets: [
          "Comment trigger — keyword match, exact match, or any-comment",
          "DM trigger — keyword, intent classification, or first-message",
          "Story-reply trigger — when someone replies to or interacts with your story",
          "Live comment trigger — automate engagement during Lives (Pro and Business)",
          "Mention trigger — when your account is @-mentioned",
        ],
      },
      {
        title: "AI replies and AI conversations",
        desc: "Powered by Anthropic's Claude. Single-turn AI replies for one-shot responses, multi-turn AI conversations for qualification and support.",
        bullets: [
          "Configure brand voice once — applies across all AI nodes",
          "Inject context: FAQ, product catalog, calendar, custom data",
          'Built-in "Ask for" actions: collect email, phone, address, or any custom field mid-conversation',
          "Hand off to a human at any point with a tap",
          "Hard caps and per-conversation kill switches — no runaway costs or runaway bots",
        ],
      },
      {
        title: "Conditions and branching",
        desc: "Smart logic that adapts to who you're talking to.",
        bullets: [
          "Branch on tags, contact group, country, time of day, or AI classification",
          "Rate limits per contact, per flow, per day",
          "A/B testing nodes to split traffic across variants",
          "Fallback paths if a step fails (e.g., contact has DMs disabled)",
        ],
      },
      {
        title: "Contact management",
        desc: "Every Instagram contact you talk to is automatically captured, deduplicated, and segmentable.",
        bullets: [
          "Custom contact groups (Pro and Business)",
          "Tag contacts manually or automatically from flow outcomes",
          "Search, filter, and export — your audience is yours",
          "GDPR-ready: a single click deletes a contact's full history",
        ],
      },
      {
        title: "Inbox",
        desc: "A unified human inbox that lives alongside automation. Take over a conversation any time without leaving the app.",
        bullets: [
          "All comments and DMs in one view",
          "AI suggestions you can edit and send (or send as-is)",
          "Pause automation for a contact with one click",
          "Internal notes and assignments for team accounts",
        ],
      },
      {
        title: "Affiliate / partner program",
        desc: "Built-in referral tracking, commission ledger, and a partner portal — for both your own referrals and our affiliate program.",
        bullets: [
          "Per-partner referral links with `?ref=<code>` tracking",
          "Recurring commission rules with optional first-payment bounty",
          "Self-service withdrawal requests, admin approval, payout records",
          "30% / 12 months → 15% lifetime + $5 instant bounty on our affiliate program",
        ],
      },
      {
        title: "Auto top-ups",
        desc: "Never miss an engagement. When you hit your monthly quota, LightChats charges your saved card to add capacity — fully capped, never silent.",
        bullets: [
          "Default cap of 2 charges/month, configurable from 0 to 20",
          "Email receipt every time a top-up runs",
          "Free plan never auto-tops-up (Pro upsell instead — no surprise charges)",
          "$4.90 / +250 AI / +1,000 static (Pro) or $14.90 / +2,000 AI / +8,000 static (Business)",
        ],
      },
    ],
    ctaTitle: "See it run on your account",
    ctaSub:
      "Free plan ships with a real, useful quota. Connect Instagram in two minutes.",
    ctaBtn: "Get Started Free",
    ctaSecondary: "See pricing",
  },
  fr: {
    eyebrow: "Fonctionnalités",
    heroTitleA: "Tout ce qu'il vous faut pour automatiser",
    heroTitleB: "vos conversations Instagram",
    heroSub:
      "Déclencheurs, IA, conditions, gestion des contacts, boîte de réception — le tout bâti sur l'API officielle Graph d'Instagram. Pas d'extensions de navigateur, pas de scraping non officiel, aucun risque pour votre compte.",
    features: [
      {
        title: "Constructeur de flux visuel",
        desc: "Concevez chaque automatisation comme un graphe visuel — déclencheurs, conditions, délais, nœuds IA et actions reliés entre eux. Sans code, sans YAML, sans ligne de commande.",
        bullets: [
          "Nœuds en glisser-déposer pour déclencheurs, conditions, IA et messages sortants",
          "Aperçu en direct pendant l'édition — voyez exactement ce qu'un abonné recevrait",
          "Logique de branchement : envoyez des messages différents selon les étiquettes, le groupe de contacts ou la classification IA",
          "Sous-flux réutilisables : un même élément peut alimenter plusieurs points d'entrée",
        ],
      },
      {
        title: "Déclencheurs — toutes les surfaces Instagram",
        desc: "Lancez un flux dès qu'un abonné interagit avec votre compte. Tous les déclencheurs s'appuient sur l'API officielle Graph d'Instagram.",
        bullets: [
          "Déclencheur de commentaire — correspondance de mot-clé, exacte ou tout commentaire",
          "Déclencheur de DM — mot-clé, classification d'intention ou premier message",
          "Déclencheur de réponse à une story — quand quelqu'un répond ou interagit avec votre story",
          "Déclencheur de commentaire en direct — automatisez l'engagement pendant vos Lives (Pro et Business)",
          "Déclencheur de mention — quand votre compte est @-mentionné",
        ],
      },
      {
        title: "Réponses IA et conversations IA",
        desc: "Propulsé par Claude d'Anthropic. Réponses IA en un seul tour pour des réactions ponctuelles, conversations IA multi-tours pour la qualification et le support.",
        bullets: [
          "Configurez la voix de marque une fois — appliquée à tous les nœuds IA",
          "Injectez du contexte : FAQ, catalogue produit, calendrier, données personnalisées",
          "Actions « Demander » intégrées : collectez e-mail, téléphone, adresse ou tout champ personnalisé en cours de conversation",
          "Passez la main à un humain à tout moment, en un clic",
          "Plafonds stricts et coupe-circuits par conversation — pas de coûts ni de bots qui s'emballent",
        ],
      },
      {
        title: "Conditions et branchements",
        desc: "Une logique intelligente qui s'adapte à votre interlocuteur.",
        bullets: [
          "Branchez selon les étiquettes, le groupe de contacts, le pays, l'heure ou la classification IA",
          "Limites de débit par contact, par flux, par jour",
          "Nœuds de test A/B pour répartir le trafic entre variantes",
          "Chemins de secours si une étape échoue (ex. : le contact a désactivé les DM)",
        ],
      },
      {
        title: "Gestion des contacts",
        desc: "Chaque contact Instagram avec qui vous échangez est automatiquement capturé, dédoublonné et segmentable.",
        bullets: [
          "Groupes de contacts personnalisés (Pro et Business)",
          "Étiquetez les contacts manuellement ou automatiquement selon les résultats des flux",
          "Recherchez, filtrez et exportez — votre audience vous appartient",
          "Conforme RGPD : un seul clic supprime tout l'historique d'un contact",
        ],
      },
      {
        title: "Boîte de réception",
        desc: "Une boîte de réception humaine unifiée qui cohabite avec l'automatisation. Reprenez une conversation à tout moment sans quitter l'app.",
        bullets: [
          "Tous les commentaires et DM dans une seule vue",
          "Suggestions IA que vous pouvez éditer puis envoyer (ou envoyer telles quelles)",
          "Mettez l'automatisation en pause pour un contact en un clic",
          "Notes internes et attributions pour les comptes d'équipe",
        ],
      },
      {
        title: "Programme d'affiliation / partenaires",
        desc: "Suivi des parrainages intégré, registre des commissions et portail partenaire — pour vos propres parrainages comme pour notre programme d'affiliation.",
        bullets: [
          "Liens de parrainage par partenaire avec suivi `?ref=<code>`",
          "Règles de commission récurrente avec prime optionnelle au premier paiement",
          "Demandes de retrait en libre-service, validation admin, historique des paiements",
          "30 % / 12 mois → 15 % à vie + prime instantanée de 5 $ via notre programme d'affiliation",
        ],
      },
      {
        title: "Recharges automatiques",
        desc: "Ne manquez aucune interaction. Quand vous atteignez votre quota mensuel, LightChats débite votre carte enregistrée pour ajouter de la capacité — toujours plafonné, jamais silencieux.",
        bullets: [
          "Plafond par défaut de 2 prélèvements/mois, configurable de 0 à 20",
          "Reçu par e-mail à chaque recharge",
          "Le plan Gratuit n'est jamais rechargé automatiquement (suggestion Pro à la place — aucun prélèvement surprise)",
          "4,90 $ / +250 IA / +1 000 statiques (Pro) ou 14,90 $ / +2 000 IA / +8 000 statiques (Business)",
        ],
      },
    ],
    ctaTitle: "Voyez-le fonctionner sur votre compte",
    ctaSub:
      "Le plan Gratuit inclut un vrai quota utile. Connectez Instagram en deux minutes.",
    ctaBtn: "Commencer gratuitement",
    ctaSecondary: "Voir les tarifs",
  },
  ar: {
    eyebrow: "الميزات",
    heroTitleA: "كل ما تحتاجه لأتمتة",
    heroTitleB: "محادثات إنستغرام",
    heroSub:
      "محفزات، ذكاء اصطناعي، شروط، إدارة جهات اتصال، صندوق وارد — كل ذلك مبني على واجهة Graph الرسمية لإنستغرام. بدون إضافات للمتصفح، بدون استخراج غير رسمي، ودون أي خطر على حسابك.",
    features: [
      {
        title: "منشئ التدفقات البصري",
        desc: "صمّم كل أتمتة كرسم بياني بصري — محفزات وشروط وتأخيرات وعقد ذكاء اصطناعي وإجراءات متصلة ببعضها. دون أي برمجة أو YAML أو سطر أوامر.",
        bullets: [
          "عقد بالسحب والإفلات للمحفزات والشروط والذكاء الاصطناعي والرسائل الصادرة",
          "معاينة مباشرة أثناء التحرير — شاهد بالضبط ما سيتلقاه المتابع",
          "منطق التفرع: أرسل رسائل مختلفة بناءً على الوسوم أو مجموعة الاتصال أو تصنيف الذكاء الاصطناعي",
          "تدفقات فرعية قابلة لإعادة الاستخدام، فيمكن لقطعة واحدة تشغيل عدة نقاط دخول",
        ],
      },
      {
        title: "المحفزات — كل واجهات إنستغرام",
        desc: "ابدأ تدفقاً من أي مكان يتفاعل فيه المتابع مع حسابك. كل المحفزات تعمل عبر واجهة Graph الرسمية لإنستغرام.",
        bullets: [
          "محفز التعليق — تطابق كلمة مفتاحية أو تطابق تام أو أي تعليق",
          "محفز الرسالة المباشرة — كلمة مفتاحية أو تصنيف نية أو أول رسالة",
          "محفز الرد على القصة — حين يردّ شخص على قصتك أو يتفاعل معها",
          "محفز التعليق المباشر — أتمتة التفاعل خلال البث المباشر (Pro وBusiness)",
          "محفز الإشارة — حين يُذكر حسابك بـ @",
        ],
      },
      {
        title: "ردود ومحادثات الذكاء الاصطناعي",
        desc: "مدعوم بـ Claude من Anthropic. ردود ذكاء اصطناعي بدورة واحدة للردود الفورية، ومحادثات ذكاء اصطناعي متعددة الدورات للتأهيل والدعم.",
        bullets: [
          "اضبط صوت العلامة التجارية مرة واحدة — يُطبَّق على كل عقد الذكاء الاصطناعي",
          "أدخل السياق: الأسئلة الشائعة، كتالوج المنتجات، التقويم، بيانات مخصصة",
          'إجراءات "اطلب من" المدمجة: اجمع البريد الإلكتروني أو الهاتف أو العنوان أو أي حقل مخصص أثناء المحادثة',
          "سلّم المحادثة إلى إنسان في أي لحظة بنقرة واحدة",
          "حدود صارمة ومفاتيح إيقاف لكل محادثة — لا تكاليف ولا روبوتات تخرج عن السيطرة",
        ],
      },
      {
        title: "الشروط والتفرّع",
        desc: "منطق ذكي يتكيف مع من تحادثه.",
        bullets: [
          "تفرّع بناءً على الوسوم أو مجموعة الاتصال أو الدولة أو الوقت أو تصنيف الذكاء الاصطناعي",
          "حدود معدل لكل جهة اتصال ولكل تدفق ولكل يوم",
          "عقد اختبار A/B لتقسيم حركة المحادثات بين متغيرات",
          "مسارات احتياطية في حال فشل خطوة (مثل تعطيل الرسائل المباشرة لدى جهة الاتصال)",
        ],
      },
      {
        title: "إدارة جهات الاتصال",
        desc: "كل جهة اتصال على إنستغرام تتحدث إليها تُلتقط تلقائياً وتُزال منها التكرارات وتصبح قابلة للتجزئة.",
        bullets: [
          "مجموعات جهات اتصال مخصصة (Pro وBusiness)",
          "ضع وسوماً على جهات الاتصال يدوياً أو تلقائياً وفق نتائج التدفقات",
          "بحث وتصفية وتصدير — جمهورك ملك لك",
          "متوافق مع GDPR: نقرة واحدة تحذف كامل سجل جهة الاتصال",
        ],
      },
      {
        title: "صندوق الوارد",
        desc: "صندوق وارد بشري موحّد يعمل جنباً إلى جنب مع الأتمتة. تولَّ زمام المحادثة في أي وقت دون مغادرة التطبيق.",
        bullets: [
          "كل التعليقات والرسائل المباشرة في عرض واحد",
          "اقتراحات ذكاء اصطناعي يمكنك تعديلها وإرسالها (أو إرسالها كما هي)",
          "أوقف الأتمتة لجهة اتصال بنقرة واحدة",
          "ملاحظات داخلية وإسنادات لحسابات الفرق",
        ],
      },
      {
        title: "برنامج الإحالة / الشركاء",
        desc: "تتبع إحالات مدمج، سجل عمولات، وبوابة شركاء — لإحالاتك الخاصة ولبرنامج الإحالة لدينا.",
        bullets: [
          "روابط إحالة لكل شريك بتتبع `?ref=<code>`",
          "قواعد عمولة متكررة مع مكافأة اختيارية على أول دفعة",
          "طلبات سحب ذاتية الخدمة وموافقة المسؤول وسجلات الدفعات",
          "30٪ / 12 شهراً ← 15٪ مدى الحياة + مكافأة فورية 5$ في برنامج الإحالة لدينا",
        ],
      },
      {
        title: "الشحن التلقائي",
        desc: "لا تفوّت أي تفاعل. عند بلوغ حصتك الشهرية، يخصم LightChats مبلغاً من بطاقتك المحفوظة لإضافة سعة — بحدود واضحة ودون أي إجراء صامت.",
        bullets: [
          "حد افتراضي 2 خصم/شهر، قابل للضبط من 0 إلى 20",
          "إيصال بالبريد الإلكتروني عند كل شحن",
          "الباقة المجانية لا تُشحن تلقائياً أبداً (تظهر بدلاً من ذلك دعوة للترقية إلى Pro — بدون رسوم مفاجئة)",
          "4.90$ / +250 ذكاء اصطناعي / +1,000 ثابت (Pro) أو 14.90$ / +2,000 ذكاء اصطناعي / +8,000 ثابت (Business)",
        ],
      },
    ],
    ctaTitle: "شاهده يعمل على حسابك",
    ctaSub:
      "الباقة المجانية تأتي بحصة حقيقية ومفيدة. اربط إنستغرام في دقيقتين.",
    ctaBtn: "ابدأ مجاناً",
    ctaSecondary: "اطّلع على الأسعار",
  },
};
