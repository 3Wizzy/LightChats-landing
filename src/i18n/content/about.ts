import type { Lang } from "../LanguageContext";

interface Value {
  title: string;
  desc: string;
}

interface AboutContent {
  eyebrow: string;
  h1: string;
  // Paragraphs — split where inline span/markup occurs
  p1: string;
  p2Pre: string;
  p2Quote: string;
  p2Post: string;
  p3: string;
  p4: string;
  // Values section
  valuesTitle: string;
  values: Value[];
  // Roadmap section
  roadmapTitle: string;
  roadmapPre: string;
  roadmapBlog: string;
  roadmapMid: string;
  roadmapChangelog: string;
  roadmapEnd: string;
  // Contact card
  contactTitle: string;
  contactSub: string;
}

export const about: Record<Lang, AboutContent> = {
  en: {
    eyebrow: "About",
    h1: "We build tools that talk to humans for you — without sounding like a robot.",
    p1: "LightChats is a chat-marketing platform built around one observation: creators and small businesses lose customers in their DMs every day, simply because nobody can answer fast enough.",
    p2Pre: "We started in 2025 after seeing the same pattern over and over — a creator with 50k followers, hundreds of comments and DMs a week, and a tool that replied to all of them with the same ",
    p2Quote: '"DM us for the link!"',
    p2Post: " template. The followers knew it was a bot. The conversion rate was awful. Everyone was using technology that felt 10 years old on a platform that had moved on.",
    p3: "LightChats does the boring part — sending the link, qualifying the lead, collecting the email — and uses AI for the parts where humans actually want a real reply. The result: more replies, more conversions, fewer \"DM Bot detected\" comments.",
    p4: "We're an independent, self-funded team. We're not optimizing for an exit; we're optimizing for a product that creators want to keep paying $9 a month for.",
    valuesTitle: "What we believe",
    values: [
      {
        title: "Official APIs only",
        desc: "We build on Instagram's Graph API. No browser scraping, no risk to your account, no cat-and-mouse with detection.",
      },
      {
        title: "Transparent AI",
        desc: "AI is a tool, not a stunt. We tell recipients when AI is involved, and creators always have a kill switch.",
      },
      {
        title: "Honest pricing",
        desc: "Building your flows is genuinely free. Plans are flat-rate, with capped opt-in top-ups. No per-message metering, no surprise overages.",
      },
      {
        title: "Build for the long game",
        desc: "Each feature should still feel sensible in three years. We say no to growth hacks that erode trust.",
      },
    ],
    roadmapTitle: "Where we're going",
    roadmapPre: "On the roadmap: multi-account billing for agencies, a public API, WhatsApp Business support, and richer analytics for creators who want to actually measure DM-driven revenue. Follow along on the ",
    roadmapBlog: "blog",
    roadmapMid: " or ",
    roadmapChangelog: "changelog",
    roadmapEnd: ".",
    contactTitle: "Get in touch",
    contactSub: "Press, partnerships, or just to say hi:",
  },
  fr: {
    eyebrow: "À propos",
    h1: "Nous créons des outils qui parlent aux humains à votre place — sans avoir l'air d'un robot.",
    p1: "LightChats est une plateforme de marketing conversationnel née d'un constat : créateurs et petites entreprises perdent des clients dans leurs DM chaque jour, simplement parce que personne ne répond assez vite.",
    p2Pre: "Nous avons démarré en 2025 après avoir vu le même schéma se répéter — un créateur avec 50 000 abonnés, des centaines de commentaires et de DM par semaine, et un outil qui leur répondait à tous avec le même modèle ",
    p2Quote: "« DM-nous pour le lien ! »",
    p2Post: ". Les abonnés savaient que c'était un bot. Le taux de conversion était catastrophique. Tout le monde utilisait une technologie d'il y a 10 ans sur une plateforme qui avait évolué.",
    p3: "LightChats prend en charge la partie ennuyeuse — envoyer le lien, qualifier le prospect, collecter l'e-mail — et utilise l'IA là où les gens veulent vraiment une vraie réponse. Résultat : plus de réponses, plus de conversions, moins de commentaires « bot détecté ».",
    p4: "Nous sommes une équipe indépendante, autofinancée. Nous n'optimisons pas pour une revente ; nous optimisons pour un produit que les créateurs souhaitent continuer à payer 9 $ par mois.",
    valuesTitle: "Ce en quoi nous croyons",
    values: [
      {
        title: "Uniquement des API officielles",
        desc: "Nous nous appuyons sur l'API Graph d'Instagram. Pas de scraping, aucun risque pour votre compte, pas de course-poursuite avec la détection.",
      },
      {
        title: "IA transparente",
        desc: "L'IA est un outil, pas un coup d'éclat. Nous signalons aux destinataires quand l'IA est impliquée, et les créateurs ont toujours un bouton d'arrêt.",
      },
      {
        title: "Tarification honnête",
        desc: "Construire ses flux est vraiment gratuit. Les plans sont à prix fixe, avec des recharges plafonnées et optionnelles. Pas de facturation au message, pas de mauvaises surprises.",
      },
      {
        title: "Penser long terme",
        desc: "Chaque fonctionnalité doit rester pertinente dans trois ans. Nous refusons les growth hacks qui érodent la confiance.",
      },
    ],
    roadmapTitle: "Où nous allons",
    roadmapPre: "Sur la feuille de route : facturation multi-comptes pour les agences, une API publique, le support de WhatsApp Business et des analyses plus riches pour les créateurs qui veulent vraiment mesurer le chiffre d'affaires généré par les DM. Suivez l'avancée sur le ",
    roadmapBlog: "blog",
    roadmapMid: " ou le ",
    roadmapChangelog: "changelog",
    roadmapEnd: ".",
    contactTitle: "Contactez-nous",
    contactSub: "Presse, partenariats ou simplement pour dire bonjour :",
  },
  ar: {
    eyebrow: "من نحن",
    h1: "نبني أدوات تتحدث إلى البشر نيابةً عنك — دون أن تبدو كروبوت.",
    p1: "LightChats منصة تسويق عبر المحادثات وُلدت من ملاحظة واحدة: المبدعون والشركات الصغيرة يفقدون العملاء في رسائلهم المباشرة كل يوم، ببساطة لأن لا أحد يستطيع الردّ بسرعة كافية.",
    p2Pre: "بدأنا في 2025 بعد أن رأينا النمط نفسه يتكرر — مبدع لديه 50 ألف متابع، ومئات التعليقات والرسائل أسبوعياً، وأداة ترد على الجميع بنفس قالب ",
    p2Quote: "«راسلونا للحصول على الرابط!»",
    p2Post: ". المتابعون كانوا يعرفون أنه روبوت. كان معدل التحويل كارثياً. الجميع كان يستخدم تقنية تبدو وكأنها من قبل 10 سنوات على منصة تطوّرت كثيراً.",
    p3: "يتولى LightChats الجزء الممل — إرسال الرابط، وتأهيل العميل، وجمع البريد الإلكتروني — ويستخدم الذكاء الاصطناعي في المواضع التي يرغب فيها البشر فعلاً برد حقيقي. النتيجة: ردود أكثر، تحويلات أكثر، وعدد أقل من تعليقات «هذا روبوت».",
    p4: "نحن فريق مستقل ممول ذاتياً. لا نسعى إلى بيع الشركة؛ بل نسعى إلى منتج يرغب المبدعون في الاستمرار بدفع 9 $ شهرياً مقابله.",
    valuesTitle: "ما نؤمن به",
    values: [
      {
        title: "واجهات رسمية فقط",
        desc: "نبني على واجهة Graph الرسمية من إنستغرام. لا scraping للمتصفح، ولا مخاطرة بحسابك، ولا مطاردة مع أنظمة الكشف.",
      },
      {
        title: "ذكاء اصطناعي شفّاف",
        desc: "الذكاء الاصطناعي أداة، لا عرض استعراضي. نُعلم المستلمين عند تدخّل الذكاء الاصطناعي، ولدى المبدعين دائماً زرّ إيقاف.",
      },
      {
        title: "تسعير صادق",
        desc: "بناء التدفقات مجاني فعلاً. الباقات بسعر ثابت، مع إعادة شحن اختيارية ومُحدّدة. لا فوترة لكل رسالة ولا فواتير مفاجئة.",
      },
      {
        title: "بناء للمدى الطويل",
        desc: "كل ميزة يجب أن تبقى منطقية بعد ثلاث سنوات. نقول لا لحيل النمو التي تُضعف الثقة.",
      },
    ],
    roadmapTitle: "إلى أين نتجه",
    roadmapPre: "ضمن خارطة الطريق: فوترة متعددة الحسابات للوكالات، وواجهة برمجة عامة، ودعم WhatsApp Business، وتحليلات أغنى للمبدعين الذين يريدون قياس الإيرادات الناتجة عن الرسائل المباشرة فعلياً. تابِع المستجدات على ",
    roadmapBlog: "المدوّنة",
    roadmapMid: " أو ",
    roadmapChangelog: "سجل التغييرات",
    roadmapEnd: ".",
    contactTitle: "تواصل معنا",
    contactSub: "للصحافة، الشراكات، أو حتى للسلام فقط:",
  },
};
