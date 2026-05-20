import type { Lang } from "../LanguageContext";

interface Step {
  step: string;
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface AffiliatesContent {
  eyebrow: string;
  heroTitle: string;
  heroSub: string;
  becomePartner: string;
  // commission cards
  card1Value: string;
  card1Title: string;
  card1Desc: string;
  card2Value: string;
  card2Title: string;
  card2Desc: string;
  card3Value: string;
  card3Title: string;
  card3Desc: string;
  // how it works
  howItWorks: string;
  steps: Step[];
  // example
  exampleTitle: string;
  exampleSub: string;
  ex1Value: string;
  ex1Label: string;
  ex1Detail: string;
  ex2Value: string;
  ex2Label: string;
  ex2Detail: string;
  ex3Value: string;
  ex3Label: string;
  ex3Detail: string;
  exampleFooter: string;
  // FAQ
  faqTitle: string;
  faqs: FAQ[];
  // bottom CTA
  ctaTitle: string;
  ctaSub: string;
  ctaSecondary: string;
}

export const affiliates: Record<Lang, AffiliatesContent> = {
  en: {
    eyebrow: "Affiliate Program",
    heroTitle: "Earn 30% recurring + $5 per referral",
    heroSub:
      "Refer creators and businesses to LightChats and earn for every payment they make — for years. No quotas, no waiting period.",
    becomePartner: "Become a Partner",
    card1Value: "30%",
    card1Title: "Year 1 recurring",
    card1Desc:
      "On every subscription payment a referred user makes for the first 12 months.",
    card2Value: "15%",
    card2Title: "Lifetime recurring",
    card2Desc:
      "After year 1, you keep earning 15% for as long as the user stays subscribed. No expiry.",
    card3Value: "$5",
    card3Title: "Instant bounty",
    card3Desc:
      "Paid the moment your referral pays their first invoice — on top of recurring commissions.",
    howItWorks: "How it works",
    steps: [
      {
        step: "1",
        title: "Sign up at the partner portal",
        desc: "Create your free partner account and grab your unique referral link.",
      },
      {
        step: "2",
        title: "Share your link",
        desc: "Drop it in your bio, your videos, your client onboarding email — wherever your audience lives. Tracking uses a `?ref=<code>` query param.",
      },
      {
        step: "3",
        title: "Earn the moment they pay",
        desc: "$5 instant bounty on the first paid invoice + 30% on every recurring payment for 12 months.",
      },
      {
        step: "4",
        title: "Keep earning forever",
        desc: "After year 1, you keep 15% recurring for as long as the user stays subscribed.",
      },
      {
        step: "5",
        title: "Withdraw on demand",
        desc: "Request a payout for any approved balance — bank transfer, PayPal, or alternative payout methods.",
      },
    ],
    exampleTitle: "Example: 25 Pro referrals",
    exampleSub: "A creator with a modest audience referring just 25 Pro users.",
    ex1Value: "$125",
    ex1Label: "Upfront bounties",
    ex1Detail: "$5 × 25",
    ex2Value: "$67.50/mo",
    ex2Label: "Year 1",
    ex2Detail: "$9 × 30% × 25",
    ex3Value: "$33.75/mo",
    ex3Label: "Year 2+",
    ex3Detail: "$9 × 15% × 25",
    exampleFooter: "Annual subscribers and Agency users earn proportionally more.",
    faqTitle: "Affiliate FAQ",
    faqs: [
      {
        q: "When does the commission switch from 30% to 15%?",
        a: "12 months after a referred user's first paid invoice. The transition is automatic and visible in your partner dashboard.",
      },
      {
        q: "What if my referral cancels?",
        a: "Recurring commissions stop when the referred user's subscription ends. The $5 bounty stays yours either way.",
      },
      {
        q: "How do you track referrals?",
        a: "Via a `?ref=<your_code>` query parameter on the signup URL. Each user can only be attributed to one partner — first-touch wins.",
      },
      {
        q: "Are there minimum payout amounts?",
        a: "We process withdrawal requests of any size. Most partners batch monthly to minimize fees.",
      },
      {
        q: "Can I run paid ads to my referral link?",
        a: "Yes, with two rules: don't bid on LightChats brand keywords, and don't make false product claims. We monitor and reverse fraudulent referrals.",
      },
      {
        q: "How do payouts work?",
        a: "Submit a withdrawal request from your partner dashboard. Payouts are reviewed and sent within 5 business days via bank transfer or PayPal.",
      },
    ],
    ctaTitle: "Ready to start earning?",
    ctaSub:
      "Sign up takes less than two minutes. You'll get your unique link, a partner dashboard, and a payout history page.",
    ctaSecondary: "See what you'll be selling",
  },
  fr: {
    eyebrow: "Programme d'affiliation",
    heroTitle: "Gagnez 30 % récurrents + 5 $ par parrainage",
    heroSub:
      "Recommandez des créateurs et des entreprises à LightChats et gagnez sur chaque paiement qu'ils effectuent — pendant des années. Pas de quota, pas de délai d'attente.",
    becomePartner: "Devenir partenaire",
    card1Value: "30 %",
    card1Title: "Récurrent — année 1",
    card1Desc:
      "Sur chaque paiement d'abonnement d'un utilisateur parrainé pendant les 12 premiers mois.",
    card2Value: "15 %",
    card2Title: "Récurrent à vie",
    card2Desc:
      "Après la première année, vous continuez à percevoir 15 % tant que l'utilisateur reste abonné. Sans expiration.",
    card3Value: "5 $",
    card3Title: "Prime instantanée",
    card3Desc:
      "Versée dès que votre filleul règle sa première facture — en plus des commissions récurrentes.",
    howItWorks: "Comment ça marche",
    steps: [
      {
        step: "1",
        title: "Inscrivez-vous sur le portail partenaire",
        desc: "Créez votre compte partenaire gratuit et récupérez votre lien de parrainage unique.",
      },
      {
        step: "2",
        title: "Partagez votre lien",
        desc: "Mettez-le dans votre bio, vos vidéos, votre e-mail d'onboarding client — partout où vit votre audience. Le suivi utilise un paramètre `?ref=<code>`.",
      },
      {
        step: "3",
        title: "Gagnez dès qu'ils paient",
        desc: "Prime instantanée de 5 $ sur la première facture payée + 30 % sur chaque paiement récurrent pendant 12 mois.",
      },
      {
        step: "4",
        title: "Continuez à gagner indéfiniment",
        desc: "Après la première année, vous conservez 15 % récurrents tant que l'utilisateur reste abonné.",
      },
      {
        step: "5",
        title: "Retirez à la demande",
        desc: "Demandez un paiement pour tout solde validé — virement bancaire, PayPal ou autres méthodes de paiement.",
      },
    ],
    exampleTitle: "Exemple : 25 parrainages Pro",
    exampleSub:
      "Un créateur avec une audience modeste qui parraine seulement 25 utilisateurs Pro.",
    ex1Value: "125 $",
    ex1Label: "Primes initiales",
    ex1Detail: "5 $ × 25",
    ex2Value: "67,50 $/mois",
    ex2Label: "Année 1",
    ex2Detail: "9 $ × 30 % × 25",
    ex3Value: "33,75 $/mois",
    ex3Label: "Année 2 et +",
    ex3Detail: "9 $ × 15 % × 25",
    exampleFooter:
      "Les abonnés annuels et les utilisateurs Agence gagnent proportionnellement plus.",
    faqTitle: "FAQ Affiliation",
    faqs: [
      {
        q: "Quand la commission passe-t-elle de 30 % à 15 % ?",
        a: "12 mois après la première facture payée d'un utilisateur parrainé. La transition est automatique et visible dans votre tableau de bord partenaire.",
      },
      {
        q: "Que se passe-t-il si mon filleul annule ?",
        a: "Les commissions récurrentes s'arrêtent dès que l'abonnement de l'utilisateur parrainé prend fin. La prime de 5 $ vous est acquise dans tous les cas.",
      },
      {
        q: "Comment suivez-vous les parrainages ?",
        a: "Via un paramètre `?ref=<votre_code>` ajouté à l'URL d'inscription. Chaque utilisateur ne peut être attribué qu'à un seul partenaire — le premier touché l'emporte.",
      },
      {
        q: "Existe-t-il un montant minimum de retrait ?",
        a: "Nous traitons les demandes de retrait de toute taille. La plupart des partenaires regroupent leurs retraits mensuellement pour minimiser les frais.",
      },
      {
        q: "Puis-je diffuser des publicités payantes vers mon lien d'affiliation ?",
        a: "Oui, avec deux règles : ne pas enchérir sur les mots-clés de marque LightChats et ne pas faire de fausses déclarations sur le produit. Nous surveillons et annulons les parrainages frauduleux.",
      },
      {
        q: "Comment fonctionnent les paiements ?",
        a: "Soumettez une demande de retrait depuis votre tableau de bord partenaire. Les paiements sont vérifiés et envoyés dans les 5 jours ouvrés par virement bancaire ou PayPal.",
      },
    ],
    ctaTitle: "Prêt à commencer à gagner ?",
    ctaSub:
      "L'inscription prend moins de deux minutes. Vous obtiendrez votre lien unique, un tableau de bord partenaire et un historique des paiements.",
    ctaSecondary: "Voir ce que vous allez vendre",
  },
  ar: {
    eyebrow: "برنامج الإحالة",
    heroTitle: "اربح 30٪ متكرّرة + 5$ لكل إحالة",
    heroSub:
      "رشّح المبدعين والشركات إلى LightChats واربح من كل دفعة يقومون بها — لسنوات. لا حصص ولا فترة انتظار.",
    becomePartner: "كن شريكاً",
    card1Value: "30٪",
    card1Title: "متكرّرة في السنة الأولى",
    card1Desc:
      "على كل دفعة اشتراك يقوم بها مستخدم مُحال خلال الـ 12 شهراً الأولى.",
    card2Value: "15٪",
    card2Title: "متكرّرة مدى الحياة",
    card2Desc:
      "بعد السنة الأولى، تستمر في كسب 15٪ ما دام المستخدم مشتركاً. دون انتهاء صلاحية.",
    card3Value: "5$",
    card3Title: "مكافأة فورية",
    card3Desc:
      "تُدفع لحظة سداد الفاتورة الأولى من إحالتك — إضافة إلى العمولات المتكرّرة.",
    howItWorks: "كيف يعمل",
    steps: [
      {
        step: "1",
        title: "سجّل في بوابة الشركاء",
        desc: "أنشئ حساب الشريك المجاني واحصل على رابط الإحالة الخاص بك.",
      },
      {
        step: "2",
        title: "شارك رابطك",
        desc: "ضعه في سيرتك الذاتية وفي مقاطعك وفي بريد ترحيب عملائك — حيثما يتواجد جمهورك. يتم التتبع عبر المعامل `?ref=<code>`.",
      },
      {
        step: "3",
        title: "اربح لحظة سدادهم",
        desc: "مكافأة فورية 5$ على أول فاتورة مدفوعة + 30٪ على كل دفعة متكرّرة لمدة 12 شهراً.",
      },
      {
        step: "4",
        title: "استمر في الكسب إلى الأبد",
        desc: "بعد السنة الأولى، تحتفظ بـ 15٪ متكرّرة طالما بقي المستخدم مشتركاً.",
      },
      {
        step: "5",
        title: "اسحب عند الطلب",
        desc: "اطلب صرف أي رصيد مُعتمد — تحويل بنكي أو PayPal أو طرق دفع بديلة.",
      },
    ],
    exampleTitle: "مثال: 25 إحالة Pro",
    exampleSub: "مبدع بجمهور متواضع يحيل فقط 25 مستخدم Pro.",
    ex1Value: "125$",
    ex1Label: "مكافآت مقدّمة",
    ex1Detail: "5$ × 25",
    ex2Value: "67.50$/شهر",
    ex2Label: "السنة الأولى",
    ex2Detail: "9$ × 30٪ × 25",
    ex3Value: "33.75$/شهر",
    ex3Label: "السنة الثانية فأكثر",
    ex3Detail: "9$ × 15٪ × 25",
    exampleFooter: "المشتركون السنويون ومستخدمو باقة Agency يكسبون أكثر بالتناسب.",
    faqTitle: "أسئلة شائعة عن الإحالة",
    faqs: [
      {
        q: "متى تنتقل العمولة من 30٪ إلى 15٪؟",
        a: "بعد 12 شهراً من أول فاتورة مدفوعة لمستخدم مُحال. الانتقال يتم تلقائياً ويظهر في لوحة الشريك.",
      },
      {
        q: "ماذا يحدث إذا ألغى إحالتي الاشتراك؟",
        a: "تتوقف العمولات المتكرّرة عند انتهاء اشتراك المستخدم المُحال. أما مكافأة الـ 5$ فتبقى لك في كل الأحوال.",
      },
      {
        q: "كيف تتبعون الإحالات؟",
        a: "عبر معامل `?ref=<your_code>` في رابط التسجيل. يمكن إسناد كل مستخدم إلى شريك واحد فقط — الأولوية لمن لمسه أولاً.",
      },
      {
        q: "هل هناك حد أدنى للسحب؟",
        a: "نعالج طلبات السحب بأي حجم. يفضّل معظم الشركاء التجميع شهرياً لتقليل الرسوم.",
      },
      {
        q: "هل يمكنني تشغيل إعلانات مدفوعة لرابط الإحالة؟",
        a: "نعم، بقاعدتين: لا تزايد على كلمات علامة LightChats، ولا تطلق ادعاءات كاذبة حول المنتج. نراقب الإحالات الاحتيالية ونرفضها.",
      },
      {
        q: "كيف تتم المدفوعات؟",
        a: "أرسل طلب سحب من لوحة الشريك. تُراجَع الدفعات وتُرسل خلال 5 أيام عمل عبر التحويل البنكي أو PayPal.",
      },
    ],
    ctaTitle: "هل أنت مستعد لبدء الكسب؟",
    ctaSub:
      "التسجيل يستغرق أقل من دقيقتين. ستحصل على رابطك الفريد ولوحة شريك وصفحة سجل المدفوعات.",
    ctaSecondary: "اطّلع على ما ستبيعه",
  },
};
