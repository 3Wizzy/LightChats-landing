import type { Lang } from "../LanguageContext";

type FeatureType = "check" | "x" | "dollar";

interface PlanFeature {
  text: string;
  type: FeatureType;
  highlight?: boolean;
}

interface Plan {
  name: string;
  monthly: string;
  annual: string;
  annualSavings?: string;
  desc: string;
  features: PlanFeature[];
  cta: string;
  ctaLink: string;
  highlight: boolean;
}

interface ComparisonRow {
  label: string;
  pro: string;
  agency: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface PricingContent {
  // Nav
  backToHome: string;
  // Hero
  eyebrow: string;
  titleA: string; // "Simple plans."
  titleB: string; // "No surprise charges."
  intro: string;
  // Toggle
  monthly: string;
  annual: string;
  saveBadge: string; // "Save 27%"
  // Plans
  plans: Plan[];
  mostPopular: string;
  perMonth: string; // "/month"
  perYear: string; // "/year"
  vsMonthly: string; // " vs monthly"
  orAnnualPrefix: string; // "or "
  orAnnualMid: string; // "/yr ("
  orAnnualSuffix: string; // ")"
  multiAccountNote: string;
  // Comparison
  compareTitle: string;
  compareSub: string;
  featureCol: string;
  proCol: string;
  agencyCol: string;
  rows: ComparisonRow[];
  // Auto top-up section
  topupTitle: string;
  topupSub: string;
  topupCapTitle: string;
  topupCapBefore: string;
  topupCapBold: string;
  topupCapAfter: string;
  topupEmailTitle: string;
  topupEmailDesc: string;
  topupCapReachedTitle: string;
  topupCapReachedDesc: string;
  topupNoCardTitle: string;
  topupNoCardDesc: string;
  topupFootnote: string;
  // Annual savings
  annualTitle: string;
  annualSub: string;
  annualProTitle: string;
  annualProSub: string;
  annualAgencyTitle: string;
  annualAgencySub: string;
  monthlyTimes12: string;
  annualLabel: string;
  youSave: string;
  // Affiliate
  affiliateEyebrow: string;
  affiliateTitleA: string; // "Earn "
  affiliatePct: string; // "30%"
  affiliateTitleB: string; // " recurring + "
  affiliateBounty: string; // "$5"
  affiliateTitleC: string; // " per referral"
  affiliateBodyA: string; // "Refer creators and businesses to LightChats and earn "
  affiliateBodyPct1: string; // "30% recurring"
  affiliateBodyB: string; // " for the first 12 months, "
  affiliateBodyPct2: string; // "15% recurring"
  affiliateBodyC: string; // " after — plus a "
  affiliateBodyBounty: string; // "$5 instant bounty"
  affiliateBodyD: string; // " on every referral's first paid invoice."
  affiliateY1Title: string;
  affiliateY1Desc: string;
  affiliateLifetimeTitle: string;
  affiliateLifetimeDesc: string;
  affiliateInstantTitle: string;
  affiliateInstantDesc: string;
  affiliateExampleLabel: string;
  affiliateUpfrontAmount: string;
  affiliateUpfrontDesc: string;
  affiliateY1Amount: string;
  affiliateY1Calc: string;
  affiliateY2Amount: string;
  affiliateY2Calc: string;
  becomePartner: string;
  // FAQ
  faqTitle: string;
  faqs: FAQ[];
  // CTA
  ctaTitle: string;
  ctaSub: string;
  ctaBtn: string;
}

export const pricing: Record<Lang, PricingContent> = {
  en: {
    backToHome: "Back to home",
    eyebrow: "Pricing",
    titleA: "Simple plans.",
    titleB: "No surprise charges.",
    intro:
      "Sign up and build your automations for free — no card required. Pick a plan when you're ready to activate them. Annual billing saves up to 27%.",
    monthly: "Monthly",
    annual: "Annual",
    saveBadge: "Save 27%",
    plans: [
      {
        name: "Pro",
        monthly: "$9",
        annual: "$79",
        annualSavings: "Save 27%",
        desc: "For creators running serious automation.",
        features: [
          { text: "5,000 static replies/month", type: "check", highlight: true },
          { text: "750 AI replies/month", type: "check" },
          {
            text: "Auto top-up at $4.90 → +250 AI / +2,500 static",
            type: "dollar",
          },
          {
            text: "All triggers unlocked (story, live, comments, DMs)",
            type: "check",
          },
          { text: "AI multi-turn conversations", type: "check" },
          {
            text: '"Ask for" actions (collect email/phone/address)',
            type: "check",
          },
          { text: "Conditions & branching", type: "check" },
          { text: "Custom contact groups", type: "check" },
          { text: "No LightChats branding on DMs", type: "check" },
          { text: "Cancel anytime", type: "check" },
        ],
        cta: "Get started with Pro",
        ctaLink: "https://app.lightchats.com/signup",
        highlight: true,
      },
      {
        name: "Business",
        monthly: "$29",
        annual: "$279",
        annualSavings: "Save 20%",
        desc: "For high-volume creators (100k+ followers) and heavy automation.",
        features: [
          { text: "20,000 static replies/month", type: "check", highlight: true },
          { text: "5,000 AI replies/month", type: "check" },
          {
            text: "Auto top-up at $14.90 → +2,000 AI / +10,000 static",
            type: "dollar",
          },
          { text: "Everything in Pro", type: "check" },
          { text: "All features unlocked", type: "check" },
          { text: "No LightChats branding on DMs", type: "check" },
          {
            text: "Custom contracts available above this volume",
            type: "check",
          },
        ],
        cta: "Choose Business",
        ctaLink: "https://app.lightchats.com/signup",
        highlight: false,
      },
    ],
    mostPopular: "Most Popular",
    perMonth: "/month",
    perYear: "/year",
    vsMonthly: " vs monthly",
    orAnnualPrefix: "or ",
    orAnnualMid: "/yr (",
    orAnnualSuffix: ")",
    multiAccountNote:
      "One LightChats account = one Instagram account. Multi-account billing is on the roadmap.",
    compareTitle: "Plans, side-by-side",
    compareSub: "Every feature, every limit, no asterisks.",
    featureCol: "Feature",
    proCol: "Pro",
    agencyCol: "Business",
    rows: [
      { label: "Monthly price", pro: "$9", agency: "$29" },
      { label: "Annual price", pro: "$79/yr", agency: "$279/yr" },
      {
        label: "Static replies / month",
        pro: "5,000",
        agency: "20,000",
      },
      {
        label: "AI replies / month",
        pro: "750",
        agency: "5,000",
      },
      {
        label: "Auto top-up",
        pro: "$4.90 → +250 AI / +2,500 static",
        agency: "$14.90 → +2,000 AI / +10,000 static",
      },
      {
        label: "Comment & DM auto-reply",
        pro: "Included",
        agency: "Included",
      },
      {
        label: "Story-reply trigger",
        pro: "Unlimited",
        agency: "Unlimited",
      },
      {
        label: "Live comment trigger",
        pro: "Included",
        agency: "Included",
      },
      {
        label: "AI multi-turn conversations",
        pro: "Included",
        agency: "Included",
      },
      {
        label: '"Ask for" actions',
        pro: "Included",
        agency: "Included",
      },
      {
        label: "Conditions & branching",
        pro: "Included",
        agency: "Included",
      },
      {
        label: "Contact groups",
        pro: "Custom groups",
        agency: "Custom groups",
      },
      {
        label: "DM watermark",
        pro: "None",
        agency: "None",
      },
    ],
    topupTitle: "How auto top-ups work",
    topupSub: "A safety net for busy months — never a surprise.",
    topupCapTitle: "Configurable cap",
    topupCapBefore: "Default cap is ",
    topupCapBold: "2 charges per month",
    topupCapAfter: ". Change it to anywhere from 0 (off) to 20 in Billing.",
    topupEmailTitle: "Email receipt",
    topupEmailDesc:
      "You're emailed every time a top-up runs — amount, capacity added, card used, current count.",
    topupCapReachedTitle: "Cap reached?",
    topupCapReachedDesc:
      "Once you hit your top-up cap, replies pause until the 1st — never an extra charge beyond it.",
    topupNoCardTitle: "No card on file?",
    topupNoCardDesc:
      "Replies pause until your monthly quota resets on the 1st.",
    topupFootnote:
      "Per-reply cost on top-ups is roughly 1.3–1.6× the base plan's rate — sensible overage, not punitive.",
    annualTitle: "Annual billing — pay once, save more",
    annualSub:
      "Existing customers keep their original price if pricing changes later.",
    annualProTitle: "Pro",
    annualProSub: "Pay $79 once, get a full year.",
    annualAgencyTitle: "Business",
    annualAgencySub: "Pay $279 once, get a full year.",
    monthlyTimes12: "Monthly × 12",
    annualLabel: "Annual",
    youSave: "You save",
    affiliateEyebrow: "Affiliate program",
    affiliateTitleA: "Earn ",
    affiliatePct: "30%",
    affiliateTitleB: " recurring +",
    affiliateBounty: " $5",
    affiliateTitleC: " per referral",
    affiliateBodyA: "Refer creators and businesses to LightChats and earn ",
    affiliateBodyPct1: "30% recurring",
    affiliateBodyB: " for the first 12 months, ",
    affiliateBodyPct2: "15% recurring",
    affiliateBodyC: " after — plus a ",
    affiliateBodyBounty: "$5 instant bounty",
    affiliateBodyD: " on every referral's first paid invoice.",
    affiliateY1Title: "Year 1 recurring",
    affiliateY1Desc: "On every payment for 12 months",
    affiliateLifetimeTitle: "Lifetime recurring",
    affiliateLifetimeDesc: "Year 2 onwards, no expiry",
    affiliateInstantTitle: "Instant bounty",
    affiliateInstantDesc: "On first paid invoice",
    affiliateExampleLabel: "Example: 25 Pro referrals",
    affiliateUpfrontAmount: "$125 upfront",
    affiliateUpfrontDesc: "$5 × 25 bounties",
    affiliateY1Amount: "$67.50 / month",
    affiliateY1Calc: "Year 1 ($9 × 30% × 25)",
    affiliateY2Amount: "$33.75 / month",
    affiliateY2Calc: "Year 2+ ($9 × 15% × 25)",
    becomePartner: "Become a Partner",
    faqTitle: "Pricing FAQ",
    faqs: [
      {
        q: "Is there a free plan or trial?",
        a: "Signing up and building automations is completely free — no card required, no time limit. You only pick a plan when you're ready to activate an automation; the first invoice is charged at subscribe time, and your automations start running right away.",
      },
      {
        q: 'What counts as an "AI reply"?',
        a: "Any outbound comment or DM where the response text is generated by AI. Static replies are pre-written templates that get sent verbatim — much cheaper to run, with much higher monthly limits.",
      },
      {
        q: "What happens when I hit my limit?",
        a: "If you have a saved card and haven't hit your top-up cap, we charge a top-up to keep things running. You can configure the cap (or turn it off) in Billing — once it's reached, replies pause until the 1st. Never a surprise beyond the cap you set.",
      },
      {
        q: "Do unused replies roll over?",
        a: "No. Each plan's monthly quota resets on the 1st.",
      },
      {
        q: "Can I run multiple Instagram accounts on one subscription?",
        a: "Not today. Each Instagram account gets its own LightChats subscription. We're working on a multi-account billing model.",
      },
      {
        q: "Can I switch from monthly to annual mid-period?",
        a: "Yes — cancel and re-subscribe with the annual interval. Your current paid period is honored until it ends.",
      },
      {
        q: "What's the cancellation policy?",
        a: "Cancel anytime from Billing. Your plan stays active until the end of the paid period — no prorated refunds.",
      },
      {
        q: "Are there any usage-based hidden costs?",
        a: "No. Monthly subscription + opt-in top-ups (capped). No per-message metering, no surprise overages.",
      },
    ],
    ctaTitle: "Start automating in minutes",
    ctaSub: "Sign up and build for free. No credit card required until you activate.",
    ctaBtn: "Get Started",
  },
  fr: {
    backToHome: "Retour à l'accueil",
    eyebrow: "Tarifs",
    titleA: "Des plans simples.",
    titleB: "Aucun frais surprise.",
    intro:
      "Inscrivez-vous et construisez vos automatisations gratuitement — sans carte. Choisissez une formule quand vous êtes prêt à les activer. Le paiement annuel vous fait économiser jusqu'à 27 %.",
    monthly: "Mensuel",
    annual: "Annuel",
    saveBadge: "Économisez 27 %",
    plans: [
      {
        name: "Pro",
        monthly: "$9",
        annual: "$79",
        annualSavings: "Économisez 27 %",
        desc: "Pour les créateurs qui automatisent sérieusement.",
        features: [
          { text: "5 000 réponses statiques/mois", type: "check", highlight: true },
          { text: "750 réponses IA/mois", type: "check" },
          {
            text: "Recharge auto à 4,90 $ → +250 IA / +2 500 statiques",
            type: "dollar",
          },
          {
            text: "Tous les déclencheurs débloqués (story, direct, commentaires, DM)",
            type: "check",
          },
          { text: "Conversations IA multi-tours", type: "check" },
          {
            text: 'Actions « Demander » (collecte e-mail, téléphone, adresse)',
            type: "check",
          },
          { text: "Conditions et branchements", type: "check" },
          { text: "Groupes de contacts personnalisés", type: "check" },
          { text: "Aucun marquage LightChats sur les DM", type: "check" },
          { text: "Annulez à tout moment", type: "check" },
        ],
        cta: "Commencer avec Pro",
        ctaLink: "https://app.lightchats.com/signup",
        highlight: true,
      },
      {
        name: "Business",
        monthly: "$29",
        annual: "$279",
        annualSavings: "Économisez 20 %",
        desc: "Pour les créateurs à fort volume (100k+ abonnés) et l'automatisation intensive.",
        features: [
          { text: "20 000 réponses statiques/mois", type: "check", highlight: true },
          { text: "5 000 réponses IA/mois", type: "check" },
          {
            text: "Recharge auto à 14,90 $ → +2 000 IA / +10 000 statiques",
            type: "dollar",
          },
          { text: "Tout ce qui est inclus dans Pro", type: "check" },
          { text: "Toutes les fonctionnalités débloquées", type: "check" },
          { text: "Aucun marquage LightChats sur les DM", type: "check" },
          {
            text: "Contrats sur mesure disponibles au-delà de ce volume",
            type: "check",
          },
        ],
        cta: "Choisir Business",
        ctaLink: "https://app.lightchats.com/signup",
        highlight: false,
      },
    ],
    mostPopular: "Le plus populaire",
    perMonth: "/mois",
    perYear: "/an",
    vsMonthly: " vs mensuel",
    orAnnualPrefix: "ou ",
    orAnnualMid: "/an (",
    orAnnualSuffix: ")",
    multiAccountNote:
      "Un compte LightChats = un compte Instagram. La facturation multi-comptes est prévue sur la feuille de route.",
    compareTitle: "Les plans en parallèle",
    compareSub: "Chaque fonctionnalité, chaque limite, sans astérisque.",
    featureCol: "Fonctionnalité",
    proCol: "Pro",
    agencyCol: "Business",
    rows: [
      { label: "Prix mensuel", pro: "$9", agency: "$29" },
      {
        label: "Prix annuel",
        pro: "$79/an",
        agency: "$279/an",
      },
      {
        label: "Réponses statiques / mois",
        pro: "5 000",
        agency: "20 000",
      },
      {
        label: "Réponses IA / mois",
        pro: "750",
        agency: "5 000",
      },
      {
        label: "Recharge automatique",
        pro: "4,90 $ → +250 IA / +2 500 statiques",
        agency: "14,90 $ → +2 000 IA / +10 000 statiques",
      },
      {
        label: "Réponse auto commentaires et DM",
        pro: "Inclus",
        agency: "Inclus",
      },
      {
        label: "Déclencheur de réponse aux stories",
        pro: "Illimité",
        agency: "Illimité",
      },
      {
        label: "Déclencheur de commentaire en direct",
        pro: "Inclus",
        agency: "Inclus",
      },
      {
        label: "Conversations IA multi-tours",
        pro: "Inclus",
        agency: "Inclus",
      },
      {
        label: "Actions « Demander »",
        pro: "Inclus",
        agency: "Inclus",
      },
      {
        label: "Conditions et branchements",
        pro: "Inclus",
        agency: "Inclus",
      },
      {
        label: "Groupes de contacts",
        pro: "Groupes personnalisés",
        agency: "Groupes personnalisés",
      },
      {
        label: "Filigrane sur les DM",
        pro: "Aucun",
        agency: "Aucun",
      },
    ],
    topupTitle: "Comment fonctionnent les recharges automatiques",
    topupSub: "Un filet de sécurité pour les mois chargés — jamais une surprise.",
    topupCapTitle: "Plafond configurable",
    topupCapBefore: "Le plafond par défaut est de ",
    topupCapBold: "2 prélèvements par mois",
    topupCapAfter:
      ". Modifiez-le entre 0 (désactivé) et 20 depuis Facturation.",
    topupEmailTitle: "Reçu par e-mail",
    topupEmailDesc:
      "Vous recevez un e-mail à chaque recharge — montant, capacité ajoutée, carte utilisée et compteur actuel.",
    topupCapReachedTitle: "Plafond atteint ?",
    topupCapReachedDesc:
      "Une fois le plafond de recharge atteint, les réponses s'interrompent jusqu'au 1er — jamais de prélèvement au-delà.",
    topupNoCardTitle: "Pas de carte enregistrée ?",
    topupNoCardDesc:
      "Les réponses s'interrompent jusqu'au reset de votre quota mensuel le 1er.",
    topupFootnote:
      "Le coût par réponse en recharge est environ 1,3–1,6× le tarif du plan de base — une surconsommation raisonnable, pas punitive.",
    annualTitle: "Paiement annuel — payez une fois, économisez plus",
    annualSub:
      "Les clients existants conservent leur tarif initial si les prix évoluent par la suite.",
    annualProTitle: "Pro",
    annualProSub: "Payez 79 $ une seule fois pour une année complète.",
    annualAgencyTitle: "Business",
    annualAgencySub: "Payez 279 $ une seule fois pour une année complète.",
    monthlyTimes12: "Mensuel × 12",
    annualLabel: "Annuel",
    youSave: "Vous économisez",
    affiliateEyebrow: "Programme d'affiliation",
    affiliateTitleA: "Gagnez ",
    affiliatePct: "30 %",
    affiliateTitleB: " récurrents +",
    affiliateBounty: " 5 $",
    affiliateTitleC: " par filleul",
    affiliateBodyA:
      "Recommandez des créateurs et des entreprises à LightChats et gagnez ",
    affiliateBodyPct1: "30 % récurrents",
    affiliateBodyB: " pendant les 12 premiers mois, ",
    affiliateBodyPct2: "15 % récurrents",
    affiliateBodyC: " ensuite — plus une ",
    affiliateBodyBounty: "prime instantanée de 5 $",
    affiliateBodyD: " sur la première facture payée de chaque filleul.",
    affiliateY1Title: "Récurrent année 1",
    affiliateY1Desc: "Sur chaque paiement pendant 12 mois",
    affiliateLifetimeTitle: "Récurrent à vie",
    affiliateLifetimeDesc: "Année 2 et au-delà, sans expiration",
    affiliateInstantTitle: "Prime instantanée",
    affiliateInstantDesc: "Sur la première facture payée",
    affiliateExampleLabel: "Exemple : 25 filleuls Pro",
    affiliateUpfrontAmount: "125 $ d'avance",
    affiliateUpfrontDesc: "5 $ × 25 primes",
    affiliateY1Amount: "67,50 $ / mois",
    affiliateY1Calc: "Année 1 (9 $ × 30 % × 25)",
    affiliateY2Amount: "33,75 $ / mois",
    affiliateY2Calc: "Année 2+ (9 $ × 15 % × 25)",
    becomePartner: "Devenir partenaire",
    faqTitle: "FAQ Tarifs",
    faqs: [
      {
        q: "Existe-t-il un plan gratuit ou un essai ?",
        a: "S'inscrire et construire ses automatisations est entièrement gratuit — sans carte, sans limite de temps. Vous ne choisissez une formule qu'au moment d'activer une automatisation ; la première facture est prélevée à la souscription, et vos automatisations démarrent aussitôt.",
      },
      {
        q: 'Qu\'est-ce qui compte comme « réponse IA » ?',
        a: "Tout commentaire ou DM sortant dont le texte est généré par l'IA. Les réponses statiques sont des modèles pré-écrits envoyés tels quels — beaucoup moins coûteux et avec des limites mensuelles bien plus élevées.",
      },
      {
        q: "Que se passe-t-il quand j'atteins ma limite ?",
        a: "Si une carte est enregistrée et que vous n'avez pas atteint votre plafond de recharge, nous prélevons une recharge pour maintenir le service. Vous pouvez ajuster le plafond (ou le désactiver) dans Facturation — une fois atteint, les réponses s'interrompent jusqu'au 1er. Jamais de surprise au-delà du plafond que vous fixez.",
      },
      {
        q: "Les réponses non utilisées sont-elles reportées ?",
        a: "Non. Le quota mensuel de chaque plan se remet à zéro le 1er.",
      },
      {
        q: "Puis-je gérer plusieurs comptes Instagram avec un seul abonnement ?",
        a: "Pas pour le moment. Chaque compte Instagram nécessite son propre abonnement LightChats. Nous travaillons sur un modèle de facturation multi-comptes.",
      },
      {
        q: "Puis-je passer du mensuel à l'annuel en cours de période ?",
        a: "Oui — annulez et réabonnez-vous avec l'intervalle annuel. Votre période payée actuelle est honorée jusqu'à son terme.",
      },
      {
        q: "Quelle est la politique d'annulation ?",
        a: "Annulez à tout moment depuis Facturation. Votre plan reste actif jusqu'à la fin de la période payée — pas de remboursement au prorata.",
      },
      {
        q: "Y a-t-il des coûts cachés liés à l'usage ?",
        a: "Non. Abonnement mensuel + recharges optionnelles (plafonnées). Pas de facturation au message, pas de dépassement surprise.",
      },
    ],
    ctaTitle: "Commencez à automatiser en quelques minutes",
    ctaSub:
      "Inscrivez-vous et construisez gratuitement. Aucune carte requise avant l'activation.",
    ctaBtn: "Commencer",
  },
  ar: {
    backToHome: "العودة إلى الرئيسية",
    eyebrow: "الأسعار",
    titleA: "خطط بسيطة.",
    titleB: "بلا رسوم مفاجئة.",
    intro:
      "سجّل وأنشئ أتمتاتك مجاناً — دون بطاقة. اختر باقة عندما تكون جاهزاً لتفعيلها. الفوترة السنوية توفّر حتى 27٪.",
    monthly: "شهري",
    annual: "سنوي",
    saveBadge: "وفّر 27٪",
    plans: [
      {
        name: "Pro",
        monthly: "$9",
        annual: "$79",
        annualSavings: "وفّر 27٪",
        desc: "للمبدعين الذين يديرون أتمتة جدّية.",
        features: [
          { text: "5,000 رد ثابت/شهر", type: "check", highlight: true },
          { text: "750 رد بالذكاء الاصطناعي/شهر", type: "check" },
          {
            text: "إعادة شحن تلقائية بـ $4.90 → +250 ذكاء اصطناعي / +2,500 ثابت",
            type: "dollar",
          },
          {
            text: "جميع المحفزات مفعّلة (قصص، تعليقات فورية، تعليقات، رسائل)",
            type: "check",
          },
          { text: "محادثات ذكاء اصطناعي متعددة الأدوار", type: "check" },
          {
            text: 'إجراءات "اطلب" (جمع البريد الإلكتروني/الهاتف/العنوان)',
            type: "check",
          },
          { text: "الشروط والتفرعات", type: "check" },
          { text: "مجموعات جهات اتصال مخصصة", type: "check" },
          { text: "بدون علامة LightChats على الرسائل", type: "check" },
          { text: "إلغاء في أي وقت", type: "check" },
        ],
        cta: "ابدأ مع Pro",
        ctaLink: "https://app.lightchats.com/signup",
        highlight: true,
      },
      {
        name: "Business",
        monthly: "$29",
        annual: "$279",
        annualSavings: "وفّر 20٪",
        desc: "للمبدعين بحجم تفاعل كبير (+100 ألف متابع) وللأتمتة المكثفة.",
        features: [
          { text: "20,000 رد ثابت/شهر", type: "check", highlight: true },
          { text: "5,000 رد بالذكاء الاصطناعي/شهر", type: "check" },
          {
            text: "إعادة شحن تلقائية بـ $14.90 → +2,000 ذكاء اصطناعي / +10,000 ثابت",
            type: "dollar",
          },
          { text: "كل ما في باقة Pro", type: "check" },
          { text: "جميع الميزات مفتوحة", type: "check" },
          { text: "بدون علامة LightChats على الرسائل", type: "check" },
          {
            text: "عقود مخصصة متاحة لما يتجاوز هذا الحجم",
            type: "check",
          },
        ],
        cta: "اختر Business",
        ctaLink: "https://app.lightchats.com/signup",
        highlight: false,
      },
    ],
    mostPopular: "الأكثر شعبية",
    perMonth: "/شهرياً",
    perYear: "/سنوياً",
    vsMonthly: " مقارنةً بالشهري",
    orAnnualPrefix: "أو ",
    orAnnualMid: "/سنة (",
    orAnnualSuffix: ")",
    multiAccountNote:
      "حساب LightChats واحد = حساب إنستغرام واحد. فوترة الحسابات المتعددة قيد التطوير.",
    compareTitle: "مقارنة الباقات جنباً إلى جنب",
    compareSub: "كل ميزة وكل حد، دون أي ملاحظات صغيرة.",
    featureCol: "الميزة",
    proCol: "Pro",
    agencyCol: "Business",
    rows: [
      { label: "السعر الشهري", pro: "$9", agency: "$29" },
      {
        label: "السعر السنوي",
        pro: "$79/سنة",
        agency: "$279/سنة",
      },
      {
        label: "الردود الثابتة / شهر",
        pro: "5,000",
        agency: "20,000",
      },
      {
        label: "ردود الذكاء الاصطناعي / شهر",
        pro: "750",
        agency: "5,000",
      },
      {
        label: "الشحن التلقائي",
        pro: "$4.90 → +250 ذكاء اصطناعي / +2,500 ثابت",
        agency: "$14.90 → +2,000 ذكاء اصطناعي / +10,000 ثابت",
      },
      {
        label: "رد تلقائي على التعليقات والرسائل",
        pro: "مضمّن",
        agency: "مضمّن",
      },
      {
        label: "محفز الرد على القصص",
        pro: "غير محدود",
        agency: "غير محدود",
      },
      {
        label: "محفز التعليقات الفورية",
        pro: "مضمّن",
        agency: "مضمّن",
      },
      {
        label: "محادثات ذكاء اصطناعي متعددة الأدوار",
        pro: "مضمّن",
        agency: "مضمّن",
      },
      {
        label: 'إجراءات "اطلب"',
        pro: "مضمّن",
        agency: "مضمّن",
      },
      {
        label: "الشروط والتفرعات",
        pro: "مضمّن",
        agency: "مضمّن",
      },
      {
        label: "مجموعات جهات الاتصال",
        pro: "مجموعات مخصصة",
        agency: "مجموعات مخصصة",
      },
      {
        label: "علامة على الرسائل",
        pro: "بدون",
        agency: "بدون",
      },
    ],
    topupTitle: "كيف تعمل إعادة الشحن التلقائية",
    topupSub: "شبكة أمان للأشهر المزدحمة — دون مفاجآت.",
    topupCapTitle: "حدّ قابل للتعديل",
    topupCapBefore: "الحدّ الافتراضي هو ",
    topupCapBold: "خصمَين شهرياً",
    topupCapAfter:
      ". يمكنك تغييره من 0 (إيقاف) إلى 20 من صفحة الفواتير.",
    topupEmailTitle: "إيصال بالبريد الإلكتروني",
    topupEmailDesc:
      "تصلك رسالة بريد إلكتروني عند كل عملية شحن — المبلغ والسعة المضافة والبطاقة المستخدمة والعدد الحالي.",
    topupCapReachedTitle: "وصلت إلى الحد؟",
    topupCapReachedDesc:
      "عند بلوغ حد الشحن، تتوقف الردود حتى الأول من الشهر — دون أي خصم إضافي بعده.",
    topupNoCardTitle: "لا توجد بطاقة محفوظة؟",
    topupNoCardDesc:
      "تتوقف الردود حتى يُعاد تعيين حصتك الشهرية في الأول من الشهر.",
    topupFootnote:
      "تكلفة الرد عند الشحن أعلى بحوالي 1.3–1.6× من سعر الباقة الأساسية — تجاوز معقول لا عقابي.",
    annualTitle: "الفوترة السنوية — ادفع مرة واحدة ووفّر أكثر",
    annualSub:
      "يحتفظ العملاء الحاليون بالسعر الأصلي إذا تغيرت الأسعار لاحقاً.",
    annualProTitle: "Pro",
    annualProSub: "ادفع 79$ مرة واحدة واحصل على سنة كاملة.",
    annualAgencyTitle: "Business",
    annualAgencySub: "ادفع 279$ مرة واحدة واحصل على سنة كاملة.",
    monthlyTimes12: "شهري × 12",
    annualLabel: "سنوي",
    youSave: "توفّر",
    affiliateEyebrow: "برنامج الشركاء",
    affiliateTitleA: "اربح ",
    affiliatePct: "30٪",
    affiliateTitleB: " متكرّرة +",
    affiliateBounty: " 5$",
    affiliateTitleC: " عن كل إحالة",
    affiliateBodyA: "رشّح المبدعين والشركات إلى LightChats واربح ",
    affiliateBodyPct1: "30٪ متكرّرة",
    affiliateBodyB: " خلال أول 12 شهراً، ثم ",
    affiliateBodyPct2: "15٪ متكرّرة",
    affiliateBodyC: " بعد ذلك — بالإضافة إلى ",
    affiliateBodyBounty: "مكافأة فورية بـ 5$",
    affiliateBodyD: " على أول فاتورة مدفوعة لكل إحالة.",
    affiliateY1Title: "متكرر السنة الأولى",
    affiliateY1Desc: "على كل دفعة خلال 12 شهراً",
    affiliateLifetimeTitle: "متكرر مدى الحياة",
    affiliateLifetimeDesc: "من السنة الثانية فما فوق، دون انتهاء",
    affiliateInstantTitle: "مكافأة فورية",
    affiliateInstantDesc: "على أول فاتورة مدفوعة",
    affiliateExampleLabel: "مثال: 25 إحالة على باقة Pro",
    affiliateUpfrontAmount: "125$ مقدماً",
    affiliateUpfrontDesc: "5$ × 25 مكافأة",
    affiliateY1Amount: "67.50$ / شهر",
    affiliateY1Calc: "السنة 1 (9$ × 30٪ × 25)",
    affiliateY2Amount: "33.75$ / شهر",
    affiliateY2Calc: "السنة 2 فما فوق (9$ × 15٪ × 25)",
    becomePartner: "كن شريكاً",
    faqTitle: "أسئلة شائعة عن الأسعار",
    faqs: [
      {
        q: "هل توجد باقة مجانية أو فترة تجريبية؟",
        a: "التسجيل وبناء الأتمتات مجاني تماماً — دون بطاقة ودون حد زمني. تختار الباقة فقط عندما تكون جاهزاً لتفعيل أتمتة؛ تُخصم الفاتورة الأولى عند الاشتراك، وتبدأ أتمتاتك بالعمل فوراً.",
      },
      {
        q: 'ما الذي يُحتسب "رد ذكاء اصطناعي"؟',
        a: "أي تعليق أو رسالة صادرة يكون نصّها مولَّداً بالذكاء الاصطناعي. أما الردود الثابتة فهي قوالب جاهزة تُرسل كما هي — أرخص بكثير وبحدود شهرية أعلى بكثير.",
      },
      {
        q: "ماذا يحدث عند الوصول إلى الحد؟",
        a: "إذا كانت لديك بطاقة محفوظة ولم تبلغ حد الشحن، نخصم إعادة شحن لمواصلة العمل. يمكنك تعديل الحد (أو إيقافه) من صفحة الفواتير — وعند بلوغه تتوقف الردود حتى الأول من الشهر. لا مفاجآت تتجاوز الحد الذي حددته.",
      },
      {
        q: "هل تُرحَّل الردود غير المستخدمة؟",
        a: "لا. تُعاد تعيين الحصة الشهرية لكل باقة في الأول من كل شهر.",
      },
      {
        q: "هل يمكنني تشغيل عدة حسابات إنستغرام باشتراك واحد؟",
        a: "ليس اليوم. كل حساب إنستغرام يحتاج إلى اشتراك LightChats خاص به. نعمل على نموذج فوترة للحسابات المتعددة.",
      },
      {
        q: "هل يمكنني التحويل من الشهري إلى السنوي خلال الفترة؟",
        a: "نعم — ألغِ الاشتراك ثم اشترك مجدداً بالفترة السنوية. تُحترم فترة الدفع الحالية حتى نهايتها.",
      },
      {
        q: "ما سياسة الإلغاء؟",
        a: "ألغِ في أي وقت من صفحة الفواتير. تبقى الباقة فعّالة حتى نهاية الفترة المدفوعة — دون استرداد جزئي.",
      },
      {
        q: "هل توجد تكاليف خفية مرتبطة بالاستخدام؟",
        a: "لا. اشتراك شهري + شحنات اختيارية محدودة. لا فوترة لكل رسالة، ولا تجاوزات مفاجئة.",
      },
    ],
    ctaTitle: "ابدأ الأتمتة خلال دقائق",
    ctaSub: "سجّل وأنشئ مجاناً. لا حاجة لبطاقة قبل التفعيل.",
    ctaBtn: "ابدأ الآن",
  },
};
