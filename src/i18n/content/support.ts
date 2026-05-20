import type { Lang } from "../LanguageContext";

interface Topic {
  title: string;
  desc: string;
}

interface SupportContent {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  sub: string;
  emailTitle: string;
  emailDesc: string;
  phoneTitle: string;
  phoneDesc: string;
  responseTitle: string;
  responseDesc: string;
  commonTopicsTitle: string;
  topics: Topic[];
  mailingAddressTitle: string;
}

export const support: Record<Lang, SupportContent> = {
  en: {
    metaTitle: "Support — LightChats",
    metaDescription:
      "Get help with LightChats. Contact our support team for questions about your account, billing, automation flows, or technical issues.",
    heading: "Customer Support",
    sub:
      "We're here to help. Reach out through any of the channels below and we'll get back to you as soon as possible.",
    emailTitle: "Email",
    emailDesc: "For general inquiries and account support.",
    phoneTitle: "Phone",
    phoneDesc: "Call us directly during business hours.",
    responseTitle: "Response Time",
    responseDesc:
      "We typically respond within 24 hours during business days (Monday–Friday, 9 AM–6 PM MT).",
    commonTopicsTitle: "Common Topics",
    topics: [
      {
        title: "Account & Login Issues",
        desc:
          "Having trouble signing in, resetting your password, or managing your account settings? Email us with the address associated with your account and we'll help you regain access.",
      },
      {
        title: "Billing & Subscriptions",
        desc:
          "Questions about your plan, charges, invoices, or cancellations? We can assist with any billing-related inquiries. Please include your account email in your message.",
      },
      {
        title: "Instagram Connection",
        desc:
          "If you're having trouble connecting or reconnecting your Instagram Business or Creator account, make sure your account is linked to a Facebook Page, then try again. Contact us if the issue persists.",
      },
      {
        title: "Automation & Flows",
        desc:
          "Need help setting up triggers, building flows, or troubleshooting automations that aren't working as expected? Describe the issue and we'll walk you through a solution.",
      },
      {
        title: "Bug Reports",
        desc:
          "Found something that doesn't look right? Let us know what happened, what you expected, and any screenshots if possible. This helps us fix issues faster.",
      },
    ],
    mailingAddressTitle: "Mailing Address",
  },
  fr: {
    metaTitle: "Support — LightChats",
    metaDescription:
      "Obtenez de l'aide pour LightChats. Contactez notre équipe de support pour toute question sur votre compte, la facturation, vos flux d'automatisation ou des problèmes techniques.",
    heading: "Support client",
    sub:
      "Nous sommes là pour vous aider. Contactez-nous via l'un des canaux ci-dessous et nous reviendrons vers vous au plus vite.",
    emailTitle: "E-mail",
    emailDesc: "Pour les demandes générales et l'assistance compte.",
    phoneTitle: "Téléphone",
    phoneDesc: "Appelez-nous directement pendant les horaires ouvrés.",
    responseTitle: "Délai de réponse",
    responseDesc:
      "Nous répondons généralement sous 24 heures en jours ouvrés (du lundi au vendredi, 9h–18h MT).",
    commonTopicsTitle: "Sujets fréquents",
    topics: [
      {
        title: "Compte et connexion",
        desc:
          "Vous rencontrez des difficultés pour vous connecter, réinitialiser votre mot de passe ou gérer vos paramètres ? Écrivez-nous avec l'adresse associée à votre compte et nous vous aiderons à y accéder.",
      },
      {
        title: "Facturation et abonnements",
        desc:
          "Questions sur votre formule, vos prélèvements, vos factures ou vos annulations ? Nous pouvons vous accompagner sur toute demande liée à la facturation. Merci d'indiquer votre e-mail de compte dans votre message.",
      },
      {
        title: "Connexion Instagram",
        desc:
          "Si vous avez du mal à connecter ou reconnecter votre compte Instagram Business ou Créateur, assurez-vous qu'il est bien lié à une Page Facebook, puis réessayez. Contactez-nous si le problème persiste.",
      },
      {
        title: "Automatisation et flux",
        desc:
          "Besoin d'aide pour configurer des déclencheurs, créer des flux ou résoudre des automatisations qui ne fonctionnent pas comme prévu ? Décrivez-nous le problème et nous vous guiderons vers une solution.",
      },
      {
        title: "Signalement de bugs",
        desc:
          "Quelque chose ne va pas ? Indiquez-nous ce qui s'est passé, ce que vous attendiez et, si possible, joignez des captures d'écran. Cela nous aide à corriger les problèmes plus vite.",
      },
    ],
    mailingAddressTitle: "Adresse postale",
  },
  ar: {
    metaTitle: "الدعم — LightChats",
    metaDescription:
      "احصل على المساعدة بشأن LightChats. تواصل مع فريق الدعم لأي سؤال يخصّ حسابك أو الفوترة أو تدفقات الأتمتة أو المشكلات التقنية.",
    heading: "دعم العملاء",
    sub:
      "نحن هنا للمساعدة. تواصل معنا عبر أي من القنوات أدناه وسنردّ عليك في أقرب وقت ممكن.",
    emailTitle: "البريد الإلكتروني",
    emailDesc: "للاستفسارات العامة ودعم الحساب.",
    phoneTitle: "الهاتف",
    phoneDesc: "اتصل بنا مباشرة خلال ساعات العمل.",
    responseTitle: "زمن الاستجابة",
    responseDesc:
      "نردّ عادةً خلال 24 ساعة في أيام العمل (من الإثنين إلى الجمعة، 9 صباحاً – 6 مساءً بتوقيت الجبال MT).",
    commonTopicsTitle: "المواضيع الشائعة",
    topics: [
      {
        title: "مشكلات الحساب وتسجيل الدخول",
        desc:
          "هل تواجه صعوبة في تسجيل الدخول أو إعادة تعيين كلمة المرور أو إدارة إعدادات حسابك؟ راسلنا من البريد المرتبط بحسابك وسنساعدك على استعادة الوصول.",
      },
      {
        title: "الفوترة والاشتراكات",
        desc:
          "أسئلة حول باقتك أو الرسوم أو الفواتير أو عمليات الإلغاء؟ يمكننا مساعدتك في أي استفسار يتعلق بالفوترة. يُرجى تضمين بريد حسابك في رسالتك.",
      },
      {
        title: "ربط إنستغرام",
        desc:
          "إن واجهت مشكلة في ربط أو إعادة ربط حساب إنستغرام التجاري أو حساب المبدع، فتأكد من أن حسابك مرتبط بصفحة فيسبوك، ثم أعد المحاولة. تواصل معنا إذا استمرّت المشكلة.",
      },
      {
        title: "الأتمتة والتدفقات",
        desc:
          "تحتاج إلى مساعدة في إعداد المحفزات أو بناء التدفقات أو حلّ مشكلات أتمتة لا تعمل كما تتوقّع؟ صف لنا المشكلة وسنرشدك إلى الحل.",
      },
      {
        title: "الإبلاغ عن الأخطاء",
        desc:
          "اكتشفت شيئاً يبدو غير صحيح؟ أخبرنا بما حدث وما كنت تتوقّعه وأرفق لقطات شاشة إن أمكن. هذا يساعدنا على إصلاح المشكلات بسرعة أكبر.",
      },
    ],
    mailingAddressTitle: "العنوان البريدي",
  },
};
