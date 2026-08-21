import type { Lang } from "../LanguageContext";

interface Feature {
  title: string;
  desc: string;
}

interface HomeContent {
  marquee: string[];
  // Feature 1
  f1Eyebrow: string;
  f1TitleA: string;
  f1TitleB: string;
  f1Sub: string;
  f1Bullets: string[];
  // Feature 2
  f2Eyebrow: string;
  f2TitleA: string;
  f2TitleB: string;
  f2Sub: string;
  f2Bullets: string[];
  // Feature 3
  f3Eyebrow: string;
  f3TitleA: string;
  f3TitleB: string;
  f3Sub: string;
  f3Bullets: string[];
  // Features Grid
  gridEyebrow: string;
  gridTitleA: string;
  gridTitleB: string;
  gridFeatures: Feature[];
  // How it works
  hiwEyebrow: string;
  hiwTitle: string;
  hiwSteps: { step: string; title: string; desc: string }[];
  // Problem section
  problemTitle: string;
  problems: { title: string; desc: string }[];
  // Pricing
  pricingEyebrow: string;
  pricingTitle: string;
  pricingSub: string;
  pricingPro: string;
  pricingProDesc: string;
  pricingProAnnual: string;
  pricingProBullets: { text: string; type: "check" | "x" | "dollar"; highlight?: boolean }[];
  pricingProCta: string;
  pricingAgency: string;
  pricingAgencyDesc: string;
  pricingAgencyAnnual: string;
  pricingAgencyBullets: { text: string; type: "check" | "x" | "dollar"; highlight?: boolean }[];
  pricingAgencyCta: string;
  pricingCustom: string;
  pricingCustomPrice: string;
  pricingCustomDesc: string;
  pricingCustomNote: string;
  pricingCustomBullets: { text: string; type: "check" | "x" | "dollar"; highlight?: boolean }[];
  pricingCustomCta: string;
  mostPopular: string;
  perMonth: string;
  seeFullPricing: string;
  // Partner
  partnerEyebrow: string;
  partnerTitleA: string;
  partnerTitleB: string;
  partnerTitleC: string;
  partnerTitleD: string;
  partnerDescPrefix: string;
  partner30: string;
  partnerDescMid: string;
  partner15: string;
  partnerDescAfter: string;
  partner5: string;
  partnerDescEnd: string;
  becomePartner: string;
  partnerSteps: { step: string; title: string; desc: string }[];
  // FAQ
  faqEyebrow: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  // CTA
  ctaTitle: string;
  ctaSub: string;
  ctaBtn: string;
  // Chat bubbles
  bubble1: string;
  bubble2: string;
  bubble3: string;
  bubble4: string;
  bubble5: string;
}

export const home: Record<Lang, HomeContent> = {
  en: {
    marquee: [
      "Instagram DMs",
      "Flow Automation",
      "AI Smart Replies",
      "Lead Capture",
      "Comment Triggers",
      "Story Mentions",
      "Multi-Account",
      "Analytics",
    ],
    f1Eyebrow: "Instagram DM Automation",
    f1TitleA: "Turn Conversations into ",
    f1TitleB: "Customers",
    f1Sub:
      "Automatically engage with followers in your DMs. Reply instantly to messages, qualify leads with smart questions, and drive sales — all on autopilot, 24/7.",
    f1Bullets: [
      "Instant auto-replies to DMs and story mentions",
      "Smart keyword triggers for targeted responses",
      "Personalized messages based on user behavior",
      "Seamless handoff to live agents when needed",
    ],
    f2Eyebrow: "Visual Flow Builder",
    f2TitleA: "Build Powerful ",
    f2TitleB: "Automation Flows",
    f2Sub:
      "Create visual automation workflows that guide users through your sales funnel. Drag, drop, and connect — no coding required. Turn every interaction into an opportunity.",
    f2Bullets: [
      "Drag-and-drop visual flow editor",
      "Conditional branching based on user responses",
      "Pre-built templates for common use cases",
      "A/B test different conversation paths",
    ],
    f3Eyebrow: "AI-Powered",
    f3TitleA: "Smart Replies That ",
    f3TitleB: "Convert",
    f3Sub:
      "Let AI handle common questions, recommend products, and close sales while you focus on growing your business. Your always-on sales assistant that never sleeps.",
    f3Bullets: [
      "AI understands context and intent",
      "Product recommendations based on conversation",
      "Handles FAQs automatically with natural language",
      "Learns and improves from every interaction",
    ],
    gridEyebrow: "Everything You Need",
    gridTitleA: "One platform to",
    gridTitleB: "grow your business",
    gridFeatures: [
      {
        title: "DM Auto-Reply",
        desc: "Instantly respond to direct messages with customizable templates. Never miss a conversation again.",
      },
      {
        title: "Comment Moderation",
        desc: "Auto-detect and remove toxic, spam, or unwanted comments using your custom keyword filters.",
      },
      {
        title: "Real-time Analytics",
        desc: "Track messages, engagement trends, and conversion metrics with beautiful charts and insights.",
      },
      {
        title: "Flow Automations",
        desc: "Build visual automation workflows with our drag-and-drop builder. No coding required.",
      },
      {
        title: "Contact Management",
        desc: "Organize and segment your audience. Track every interaction and build lasting relationships.",
      },
      {
        title: "Instant Triggers",
        desc: "React to comments, story mentions, and keywords in real-time. Engage at the speed of light.",
      },
    ],
    hiwEyebrow: "How it works",
    hiwTitle: "Set up in 3 minutes",
    hiwSteps: [
      {
        step: "01",
        title: "Connect Your Account",
        desc: "Link your Instagram business account through our secure OAuth flow. Takes 30 seconds.",
      },
      {
        step: "02",
        title: "Build Your Flows",
        desc: "Use our visual builder to create automation flows, set triggers, and customize your replies.",
      },
      {
        step: "03",
        title: "Watch It Convert",
        desc: "LightChats works 24/7 — engaging followers, qualifying leads, and driving sales automatically.",
      },
    ],
    problemTitle: "Why is selling in the DMs so hard?",
    problems: [
      {
        title: "Buried in DMs",
        desc: "Every post buries you in comments and DMs. Replying by hand stops scaling past a few dozen conversations.",
      },
      {
        title: "Leads slip away",
        desc: 'Someone comments "price?" and never hears back. Every missed reply is a sale walking out the door.',
      },
      {
        title: "You can't be online 24/7",
        desc: "Followers message at 2am, on weekends, mid-vacation. An automation answers in under a second — every time.",
      },
    ],
    pricingEyebrow: "Pricing",
    pricingTitle: "Simple, transparent pricing",
    pricingSub: "Two simple plans. Build for free — pay only when you activate. Cancel anytime.",
    pricingPro: "Pro",
    pricingProDesc: "For growing creators & businesses",
    pricingProAnnual: "or $79/year (save 27%)",
    pricingProBullets: [
      { text: "5,000 static replies/month", type: "check", highlight: true },
      { text: "750 AI replies/month", type: "check" },
      {
        text: "Auto top-up at $4.90 (+250 AI, +2,500 static)",
        type: "dollar",
      },
      { text: "All features unlocked", type: "check" },
      { text: "No LightChats branding on DMs", type: "check" },
    ],
    pricingProCta: "Get started with Pro",
    pricingAgency: "Business",
    pricingAgencyDesc: "For high-volume creators & teams",
    pricingAgencyAnnual: "or $279/year (save 20%)",
    pricingAgencyBullets: [
      { text: "20,000 static replies/month", type: "check", highlight: true },
      { text: "5,000 AI replies/month", type: "check" },
      {
        text: "Auto top-up at $14.90 (+2,000 AI, +10,000 static)",
        type: "dollar",
      },
      { text: "All features unlocked", type: "check" },
      { text: "No LightChats branding on DMs", type: "check" },
    ],
    pricingAgencyCta: "Choose Business",
    pricingCustom: "Custom",
    pricingCustomPrice: "Let's talk",
    pricingCustomDesc: "For brands & agencies beyond Business volumes",
    pricingCustomNote: "tailored to your volume",
    pricingCustomBullets: [
      { text: "Custom reply volumes", type: "check", highlight: true },
      { text: "Everything in Business", type: "check" },
      { text: "Tailored contract & pricing", type: "check" },
      { text: "Priority support", type: "check" },
    ],
    pricingCustomCta: "Contact us",
    mostPopular: "Most Popular",
    perMonth: "/month",
    seeFullPricing: "See full pricing details",
    partnerEyebrow: "Partner Program",
    partnerTitleA: "Earn ",
    partnerTitleB: "30%",
    partnerTitleC: " Recurring + ",
    partnerTitleD: "$5",
    partnerDescPrefix:
      "Refer creators and businesses to LightChats and earn ",
    partner30: "30% recurring",
    partnerDescMid: " for the first 12 months, then ",
    partner15: "15% recurring",
    partnerDescAfter: " after — plus a ",
    partner5: "$5 instant bounty",
    partnerDescEnd: " on every referral's first paid invoice.",
    becomePartner: "Become a Partner",
    partnerSteps: [
      {
        step: "1",
        title: "Sign up as a partner",
        desc: "Create your free partner account and get your unique referral link.",
      },
      {
        step: "2",
        title: "Share with your audience",
        desc: "Promote LightChats to your followers, subscribers, or clients.",
      },
      {
        step: "3",
        title: "Earn every month",
        desc: "$5 upfront on the first paid invoice, plus 30% of every payment for 12 months — then 15% recurring for life.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "Do I need an Instagram Business account?",
        a: "Yes, LightChats works with Instagram Business and Creator accounts connected through Facebook's official API. Personal accounts are not supported.",
      },
      {
        q: "How does LightChats automate my DMs?",
        a: "LightChats uses Instagram's official API to detect triggers like comments, story mentions, or keywords, then automatically sends personalized DM responses based on the flows you build.",
      },
      {
        q: "Is my Instagram data safe?",
        a: "Absolutely. We use Instagram's official Graph API with OAuth authentication. We never store your password and all data is encrypted at rest and in transit.",
      },
      {
        q: "Can I customize my automation flows?",
        a: "Yes — our visual flow builder lets you create custom automation paths with conditional logic, delays, and personalized messages. No coding required.",
      },
      {
        q: "What happens when I reach my plan limit?",
        a: "On Pro and Business, auto top-up kicks in if you have a saved card — $4.90 (Pro) or $14.90 (Business) adds extra replies instantly, capped at 2 charges/month by default (configurable 0–20 in Billing). Once the cap is reached, replies pause until the 1st of next month — never a surprise charge.",
      },
    ],
    ctaTitle: "Ready to grow with chat?",
    ctaSub:
      "Join hundreds of businesses using LightChats to automate conversations and drive more sales on Instagram.",
    ctaBtn: "Get Started Free",
    bubble1: "Hey! 👋",
    bubble2: "Get 20% off! 🔥",
    bubble3: "Sure, sending now!",
    bubble4: "Thanks! ✨",
    bubble5: "How can I help?",
  },
  fr: {
    marquee: [
      "DM Instagram",
      "Automatisation de flux",
      "Réponses IA",
      "Capture de leads",
      "Déclencheurs de commentaires",
      "Mentions Story",
      "Multi-comptes",
      "Analytique",
    ],
    f1Eyebrow: "Automatisation des DM Instagram",
    f1TitleA: "Transformez les conversations en ",
    f1TitleB: "clients",
    f1Sub:
      "Engagez automatiquement vos abonnés dans vos DM. Répondez instantanément, qualifiez les leads avec des questions intelligentes et générez des ventes — en pilote automatique, 24h/24.",
    f1Bullets: [
      "Réponses automatiques instantanées aux DM et mentions Story",
      "Déclencheurs par mots-clés pour des réponses ciblées",
      "Messages personnalisés selon le comportement utilisateur",
      "Transmission fluide à un agent humain si besoin",
    ],
    f2Eyebrow: "Constructeur de flux visuel",
    f2TitleA: "Créez de puissants ",
    f2TitleB: "flux d'automatisation",
    f2Sub:
      "Créez des workflows visuels qui guident vos utilisateurs dans votre tunnel de vente. Glissez, déposez, connectez — sans code. Transformez chaque interaction en opportunité.",
    f2Bullets: [
      "Éditeur visuel par glisser-déposer",
      "Branchements conditionnels selon les réponses",
      "Modèles prêts à l'emploi pour les cas courants",
      "Tests A/B sur différents chemins de conversation",
    ],
    f3Eyebrow: "Propulsé par l'IA",
    f3TitleA: "Des réponses intelligentes qui ",
    f3TitleB: "convertissent",
    f3Sub:
      "Laissez l'IA gérer les questions courantes, recommander des produits et conclure des ventes pendant que vous développez votre activité. Votre assistant commercial toujours actif, qui ne dort jamais.",
    f3Bullets: [
      "L'IA comprend le contexte et l'intention",
      "Recommandations produits basées sur la conversation",
      "Gère les FAQ automatiquement en langage naturel",
      "Apprend et s'améliore à chaque interaction",
    ],
    gridEyebrow: "Tout ce dont vous avez besoin",
    gridTitleA: "Une seule plateforme pour",
    gridTitleB: "développer votre activité",
    gridFeatures: [
      {
        title: "Réponse auto aux DM",
        desc: "Répondez instantanément aux messages directs avec des modèles personnalisables. Ne ratez plus jamais une conversation.",
      },
      {
        title: "Modération des commentaires",
        desc: "Détectez et supprimez automatiquement les commentaires toxiques, spam ou indésirables avec vos filtres de mots-clés.",
      },
      {
        title: "Analytique en temps réel",
        desc: "Suivez les messages, les tendances d'engagement et les métriques de conversion avec de superbes graphiques.",
      },
      {
        title: "Flux d'automatisation",
        desc: "Créez des workflows visuels avec notre constructeur par glisser-déposer. Sans code.",
      },
      {
        title: "Gestion des contacts",
        desc: "Organisez et segmentez votre audience. Suivez chaque interaction et construisez des relations durables.",
      },
      {
        title: "Déclencheurs instantanés",
        desc: "Réagissez aux commentaires, mentions Story et mots-clés en temps réel. Engagez à la vitesse de la lumière.",
      },
    ],
    hiwEyebrow: "Comment ça marche",
    hiwTitle: "Configurez en 3 minutes",
    hiwSteps: [
      {
        step: "01",
        title: "Connectez votre compte",
        desc: "Liez votre compte Instagram professionnel via notre flux OAuth sécurisé. 30 secondes suffisent.",
      },
      {
        step: "02",
        title: "Créez vos flux",
        desc: "Utilisez notre constructeur visuel pour créer des flux, définir des déclencheurs et personnaliser vos réponses.",
      },
      {
        step: "03",
        title: "Regardez convertir",
        desc: "LightChats travaille 24h/24 — engageant les abonnés, qualifiant les leads et générant des ventes automatiquement.",
      },
    ],
    problemTitle: "Pourquoi vendre en DM est-il si difficile ?",
    problems: [
      {
        title: "Noyé sous les DM",
        desc: "Chaque publication vous ensevelit sous les commentaires et les DM. Répondre à la main ne suit plus au-delà de quelques dizaines de conversations.",
      },
      {
        title: "Des prospects qui s'évaporent",
        desc: "Quelqu'un commente « prix ? » et n'obtient jamais de réponse. Chaque réponse manquée, c'est une vente qui s'en va.",
      },
      {
        title: "Impossible d'être en ligne 24h/24",
        desc: "Vos abonnés écrivent à 2h du matin, le week-end, en pleines vacances. Une automatisation répond en moins d'une seconde — à chaque fois.",
      },
    ],
    pricingEyebrow: "Tarifs",
    pricingTitle: "Des tarifs simples et transparents",
    pricingSub: "Deux formules simples. Construisez gratuitement — payez seulement à l'activation. Annulez à tout moment.",
    pricingPro: "Pro",
    pricingProDesc: "Pour créateurs et entreprises en croissance",
    pricingProAnnual: "ou 79 $/an (économisez 27 %)",
    pricingProBullets: [
      { text: "5 000 réponses statiques/mois", type: "check", highlight: true },
      { text: "750 réponses IA/mois", type: "check" },
      {
        text: "Recharge auto à 4,90 $ (+250 IA, +2 500 statiques)",
        type: "dollar",
      },
      { text: "Toutes les fonctionnalités débloquées", type: "check" },
      { text: "Aucun marquage LightChats sur les DM", type: "check" },
    ],
    pricingProCta: "Commencer avec Pro",
    pricingAgency: "Business",
    pricingAgencyDesc: "Pour créateurs à fort volume et équipes",
    pricingAgencyAnnual: "ou 279 $/an (économisez 20 %)",
    pricingAgencyBullets: [
      { text: "20 000 réponses statiques/mois", type: "check", highlight: true },
      { text: "5 000 réponses IA/mois", type: "check" },
      {
        text: "Recharge auto à 14,90 $ (+2 000 IA, +10 000 statiques)",
        type: "dollar",
      },
      { text: "Toutes les fonctionnalités débloquées", type: "check" },
      { text: "Aucun marquage LightChats sur les DM", type: "check" },
    ],
    pricingAgencyCta: "Choisir Business",
    pricingCustom: "Custom",
    pricingCustomPrice: "Sur mesure",
    pricingCustomDesc: "Pour les marques et agences au-delà des volumes Business",
    pricingCustomNote: "adapté à votre volume",
    pricingCustomBullets: [
      { text: "Volumes de réponses personnalisés", type: "check", highlight: true },
      { text: "Tout ce qui est inclus dans Business", type: "check" },
      { text: "Contrat et tarification sur mesure", type: "check" },
      { text: "Support prioritaire", type: "check" },
    ],
    pricingCustomCta: "Contactez-nous",
    mostPopular: "Le plus populaire",
    perMonth: "/mois",
    seeFullPricing: "Voir tous les détails des tarifs",
    partnerEyebrow: "Programme partenaire",
    partnerTitleA: "Gagnez ",
    partnerTitleB: "30 %",
    partnerTitleC: " récurrents + ",
    partnerTitleD: "5 $",
    partnerDescPrefix:
      "Recommandez des créateurs et entreprises à LightChats et gagnez ",
    partner30: "30 % récurrents",
    partnerDescMid: " pendant les 12 premiers mois, puis ",
    partner15: "15 % récurrents",
    partnerDescAfter: " ensuite — plus une ",
    partner5: "prime instantanée de 5 $",
    partnerDescEnd: " sur la première facture payée de chaque filleul.",
    becomePartner: "Devenir partenaire",
    partnerSteps: [
      {
        step: "1",
        title: "Inscrivez-vous comme partenaire",
        desc: "Créez votre compte partenaire gratuit et obtenez votre lien de parrainage unique.",
      },
      {
        step: "2",
        title: "Partagez avec votre audience",
        desc: "Faites la promotion de LightChats auprès de vos abonnés, lecteurs ou clients.",
      },
      {
        step: "3",
        title: "Gagnez chaque mois",
        desc: "5 $ d'avance sur la première facture payée, plus 30 % de chaque paiement pendant 12 mois — puis 15 % récurrents à vie.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        q: "Ai-je besoin d'un compte Instagram Business ?",
        a: "Oui, LightChats fonctionne avec les comptes Instagram Business et Créateur connectés via l'API officielle de Facebook. Les comptes personnels ne sont pas pris en charge.",
      },
      {
        q: "Comment LightChats automatise-t-il mes DM ?",
        a: "LightChats utilise l'API officielle d'Instagram pour détecter les déclencheurs (commentaires, mentions Story, mots-clés), puis envoie automatiquement des réponses DM personnalisées selon les flux que vous créez.",
      },
      {
        q: "Mes données Instagram sont-elles en sécurité ?",
        a: "Absolument. Nous utilisons l'API Graph officielle d'Instagram avec authentification OAuth. Nous ne stockons jamais votre mot de passe et toutes les données sont chiffrées au repos et en transit.",
      },
      {
        q: "Puis-je personnaliser mes flux d'automatisation ?",
        a: "Oui — notre constructeur visuel vous permet de créer des chemins personnalisés avec logique conditionnelle, délais et messages personnalisés. Sans code.",
      },
      {
        q: "Que se passe-t-il quand j'atteins la limite de mon plan ?",
        a: "Sur Pro et Business, la recharge auto se déclenche si une carte est enregistrée — 4,90 $ (Pro) ou 14,90 $ (Business) ajoutent des réponses supplémentaires instantanément, plafonné à 2 charges/mois par défaut (configurable 0–20 dans Facturation). Une fois le plafond atteint, les réponses s'interrompent jusqu'au 1er du mois suivant — jamais de prélèvement surprise.",
      },
    ],
    ctaTitle: "Prêt à grandir avec le chat ?",
    ctaSub:
      "Rejoignez des centaines d'entreprises qui utilisent LightChats pour automatiser leurs conversations et générer plus de ventes sur Instagram.",
    ctaBtn: "Commencer gratuitement",
    bubble1: "Salut ! 👋",
    bubble2: "20 % de réduction ! 🔥",
    bubble3: "Bien sûr, j'envoie !",
    bubble4: "Merci ! ✨",
    bubble5: "Comment puis-je aider ?",
  },
  ar: {
    marquee: [
      "رسائل إنستغرام المباشرة",
      "أتمتة التدفقات",
      "ردود الذكاء الاصطناعي",
      "التقاط العملاء المحتملين",
      "محفزات التعليقات",
      "إشارات القصص",
      "حسابات متعددة",
      "التحليلات",
    ],
    f1Eyebrow: "أتمتة رسائل إنستغرام المباشرة",
    f1TitleA: "حوّل المحادثات إلى ",
    f1TitleB: "عملاء",
    f1Sub:
      "تفاعل تلقائياً مع المتابعين في رسائلك المباشرة. ردّ فوراً على الرسائل، وأهّل العملاء بأسئلة ذكية، وحقّق المبيعات — تلقائياً وعلى مدار الساعة.",
    f1Bullets: [
      "ردود تلقائية فورية على الرسائل وإشارات القصص",
      "محفزات بالكلمات المفتاحية لردود مستهدفة",
      "رسائل مخصصة بناءً على سلوك المستخدم",
      "تسليم سلس لوكلاء حقيقيين عند الحاجة",
    ],
    f2Eyebrow: "منشئ تدفقات بصري",
    f2TitleA: "ابنِ ",
    f2TitleB: "تدفقات أتمتة قوية",
    f2Sub:
      "أنشئ سير عمل بصرياً يوجّه المستخدمين خلال قمع المبيعات. اسحب وأفلت ووصّل — دون أي برمجة. حوّل كل تفاعل إلى فرصة.",
    f2Bullets: [
      "محرر تدفق بصري بالسحب والإفلات",
      "تفرعات شرطية بناءً على ردود المستخدم",
      "قوالب جاهزة لحالات الاستخدام الشائعة",
      "اختبارات A/B لمسارات محادثة مختلفة",
    ],
    f3Eyebrow: "مدعوم بالذكاء الاصطناعي",
    f3TitleA: "ردود ذكية ",
    f3TitleB: "تُحوّل",
    f3Sub:
      "دع الذكاء الاصطناعي يتعامل مع الأسئلة الشائعة ويوصي بالمنتجات ويُتمم المبيعات بينما تركز أنت على نمو عملك. مساعد مبيعات لا ينام.",
    f3Bullets: [
      "الذكاء الاصطناعي يفهم السياق والنية",
      "توصيات منتجات بناءً على المحادثة",
      "يتعامل مع الأسئلة الشائعة بلغة طبيعية",
      "يتعلم ويتحسّن مع كل تفاعل",
    ],
    gridEyebrow: "كل ما تحتاجه",
    gridTitleA: "منصة واحدة",
    gridTitleB: "لتنمية أعمالك",
    gridFeatures: [
      {
        title: "ردود تلقائية على الرسائل",
        desc: "ردّ فوراً على الرسائل المباشرة بقوالب قابلة للتخصيص. لن تفوّت أي محادثة بعد الآن.",
      },
      {
        title: "إدارة التعليقات",
        desc: "اكتشف واحذف تلقائياً التعليقات المسيئة أو المزعجة باستخدام فلاتر الكلمات المفتاحية الخاصة بك.",
      },
      {
        title: "تحليلات فورية",
        desc: "تتبع الرسائل واتجاهات التفاعل ومؤشرات التحويل برسوم بيانية أنيقة وإحصاءات ثرية.",
      },
      {
        title: "أتمتة التدفقات",
        desc: "ابنِ سير عمل بصري باستخدام أداة السحب والإفلات. دون أي برمجة.",
      },
      {
        title: "إدارة جهات الاتصال",
        desc: "نظّم جمهورك واقسّمه إلى شرائح. تتبّع كل تفاعل وابنِ علاقات دائمة.",
      },
      {
        title: "محفزات فورية",
        desc: "تجاوب مع التعليقات وإشارات القصص والكلمات المفتاحية لحظياً. تفاعل بسرعة الضوء.",
      },
    ],
    hiwEyebrow: "كيف يعمل",
    hiwTitle: "جهّز كل شيء خلال 3 دقائق",
    hiwSteps: [
      {
        step: "01",
        title: "اربط حسابك",
        desc: "اربط حساب إنستغرام التجاري الخاص بك عبر OAuth الآمن. يستغرق 30 ثانية فقط.",
      },
      {
        step: "02",
        title: "ابنِ تدفقاتك",
        desc: "استخدم المنشئ البصري لإنشاء تدفقات الأتمتة، وضبط المحفزات، وتخصيص الردود.",
      },
      {
        step: "03",
        title: "شاهد التحويل",
        desc: "LightChats يعمل 24/7 — يتفاعل مع المتابعين ويؤهّل العملاء ويحقّق المبيعات تلقائياً.",
      },
    ],
    problemTitle: "لماذا البيع عبر الرسائل صعب إلى هذا الحد؟",
    problems: [
      {
        title: "غارق في الرسائل",
        desc: "كل منشور يغرقك بالتعليقات والرسائل. الرد اليدوي لا يواكب بعد بضع عشرات من المحادثات.",
      },
      {
        title: "عملاء محتملون يضيعون",
        desc: 'أحدهم يعلّق "السعر؟" ولا يصله رد أبداً. كل رد فائت هو عملية بيع تخرج من الباب.',
      },
      {
        title: "لا يمكنك البقاء متصلاً 24/7",
        desc: "متابعوك يراسلونك في الثانية فجراً وفي عطلة نهاية الأسبوع وأثناء إجازتك. الأتمتة ترد في أقل من ثانية — في كل مرة.",
      },
    ],
    pricingEyebrow: "الأسعار",
    pricingTitle: "تسعير بسيط وشفاف",
    pricingSub: "خطتان بسيطتان. أنشئ مجاناً — وادفع فقط عند التفعيل. ألغِ في أي وقت.",
    pricingPro: "احترافي",
    pricingProDesc: "للمبدعين والشركات في طور النمو",
    pricingProAnnual: "أو 79$/سنة (وفّر 27٪)",
    pricingProBullets: [
      { text: "5,000 رد ثابت/شهر", type: "check", highlight: true },
      { text: "750 رد بالذكاء الاصطناعي/شهر", type: "check" },
      {
        text: "إعادة شحن تلقائية بـ 4.90$ (+250 ذكاء اصطناعي، +2,500 ثابت)",
        type: "dollar",
      },
      { text: "جميع الميزات مفتوحة", type: "check" },
      { text: "بدون علامة LightChats على الرسائل", type: "check" },
    ],
    pricingProCta: "ابدأ مع Pro",
    pricingAgency: "Business",
    pricingAgencyDesc: "للمبدعين بحجم كبير والفرق",
    pricingAgencyAnnual: "أو 279$/سنة (وفّر 20٪)",
    pricingAgencyBullets: [
      { text: "20,000 رد ثابت/شهر", type: "check", highlight: true },
      { text: "5,000 رد بالذكاء الاصطناعي/شهر", type: "check" },
      {
        text: "إعادة شحن تلقائية بـ 14.90$ (+2,000 ذكاء اصطناعي، +10,000 ثابت)",
        type: "dollar",
      },
      { text: "جميع الميزات مفتوحة", type: "check" },
      { text: "بدون علامة LightChats على الرسائل", type: "check" },
    ],
    pricingAgencyCta: "اختر Business",
    pricingCustom: "Custom",
    pricingCustomPrice: "مخصص",
    pricingCustomDesc: "للعلامات التجارية والوكالات التي تتجاوز أحجام Business",
    pricingCustomNote: "حسب حجم استخدامك",
    pricingCustomBullets: [
      { text: "أحجام ردود مخصصة", type: "check", highlight: true },
      { text: "كل ما في باقة Business", type: "check" },
      { text: "عقد وتسعير مخصصان", type: "check" },
      { text: "دعم ذو أولوية", type: "check" },
    ],
    pricingCustomCta: "تواصل معنا",
    mostPopular: "الأكثر شعبية",
    perMonth: "/شهرياً",
    seeFullPricing: "عرض كل تفاصيل الأسعار",
    partnerEyebrow: "برنامج الشركاء",
    partnerTitleA: "اربح ",
    partnerTitleB: "30٪",
    partnerTitleC: " بشكل متكرر + ",
    partnerTitleD: "5$",
    partnerDescPrefix:
      "رشّح المبدعين والشركات إلى LightChats واربح ",
    partner30: "30٪ متكرّرة",
    partnerDescMid: " خلال الـ 12 شهراً الأولى، ثم ",
    partner15: "15٪ متكرّرة",
    partnerDescAfter: " بعد ذلك — بالإضافة إلى ",
    partner5: "مكافأة فورية بـ 5$",
    partnerDescEnd: " على أول فاتورة مدفوعة لكل عميل تُرشّحه.",
    becomePartner: "كن شريكاً",
    partnerSteps: [
      {
        step: "1",
        title: "سجّل كشريك",
        desc: "أنشئ حساب الشريك المجاني واحصل على رابط الإحالة الخاص بك.",
      },
      {
        step: "2",
        title: "شارك مع جمهورك",
        desc: "روّج لـ LightChats بين متابعيك أو مشتركيك أو عملائك.",
      },
      {
        step: "3",
        title: "اربح كل شهر",
        desc: "5$ مقدماً على أول فاتورة مدفوعة، بالإضافة إلى 30٪ من كل دفعة لمدة 12 شهراً — ثم 15٪ مدى الحياة.",
      },
    ],
    faqEyebrow: "الأسئلة الشائعة",
    faqTitle: "أسئلة شائعة",
    faqs: [
      {
        q: "هل أحتاج إلى حساب إنستغرام تجاري؟",
        a: "نعم، يعمل LightChats مع حسابات إنستغرام التجارية وحسابات المبدعين المتصلة عبر واجهة فيسبوك الرسمية. الحسابات الشخصية غير مدعومة.",
      },
      {
        q: "كيف يقوم LightChats بأتمتة رسائلي المباشرة؟",
        a: "يستخدم LightChats واجهة إنستغرام الرسمية لاكتشاف المحفزات مثل التعليقات أو إشارات القصص أو الكلمات المفتاحية، ثم يرسل تلقائياً ردوداً مخصصة على الرسائل وفق التدفقات التي تنشئها.",
      },
      {
        q: "هل بيانات إنستغرام الخاصة بي آمنة؟",
        a: "بالتأكيد. نستخدم واجهة Graph الرسمية من إنستغرام مع مصادقة OAuth. لا نخزّن كلمة المرور أبداً، وكل البيانات مشفّرة أثناء التخزين والنقل.",
      },
      {
        q: "هل يمكنني تخصيص تدفقات الأتمتة؟",
        a: "نعم — منشئ التدفقات البصري يتيح لك إنشاء مسارات مخصصة بمنطق شرطي وتأخيرات ورسائل شخصية. دون أي برمجة.",
      },
      {
        q: "ماذا يحدث عند الوصول إلى حد الباقة؟",
        a: "في باقتَي Pro وBusiness، تبدأ إعادة الشحن التلقائية عند وجود بطاقة محفوظة — 4.90$ (Pro) أو 14.90$ (Business) لإضافة ردود فوراً، بحد افتراضي مرتين/شهر (قابل للتعديل من 0 إلى 20 في صفحة الفواتير). عند بلوغ الحد، تتوقف الردود حتى أول الشهر التالي — دون أي رسوم مفاجئة.",
      },
    ],
    ctaTitle: "هل أنت مستعد للنمو عبر المحادثات؟",
    ctaSub:
      "انضم إلى مئات الشركات التي تستخدم LightChats لأتمتة المحادثات وزيادة المبيعات على إنستغرام.",
    ctaBtn: "ابدأ مجاناً",
    bubble1: "مرحباً! 👋",
    bubble2: "خصم 20٪! 🔥",
    bubble3: "بالتأكيد، أرسلها الآن!",
    bubble4: "شكراً! ✨",
    bubble5: "كيف يمكنني المساعدة؟",
  },
};
