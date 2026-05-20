import type { Lang } from "../LanguageContext";

interface DataDeletionContent {
  eyebrow: string;
  title: string;
  intro: string;
  // self-service
  selfTitle: string;
  selfBefore: string;
  selfLink: string;
  selfAfter: string;
  // email
  emailTitle: string;
  emailBefore: string;
  emailMid: string;
  emailQuoted: string;
  emailAfter: string;
  // what gets deleted
  deletedTitle: string;
  deletedBullets: string[];
  // retention
  retentionTitle: string;
  retentionBody: string;
  // Instagram disconnect
  igTitle: string;
  igBefore: string;
  igPath: string;
  igAfter: string;
  // questions
  questionsTitle: string;
  questionsBefore: string;
  questionsAfter: string;
}

export const dataDeletion: Record<Lang, DataDeletionContent> = {
  en: {
    eyebrow: "Data Deletion",
    title: "Request data deletion",
    intro:
      "You can permanently delete your LightChats account and all associated data at any time. This page describes how to request deletion and what happens to your data.",
    selfTitle: "Self-service deletion",
    selfBefore: "The fastest way to delete your account is from inside the app: go to ",
    selfLink: "Settings → Account → Delete account",
    selfAfter:
      ". You'll be asked to confirm. Once confirmed, your account is queued for deletion immediately.",
    emailTitle: "Email request",
    emailBefore: "If you can't access the app, email ",
    emailMid: " from the address tied to your LightChats account, with the subject ",
    emailQuoted: '"Data Deletion Request"',
    emailAfter:
      ". We will verify ownership and complete the deletion within 7 days.",
    deletedTitle: "What gets deleted",
    deletedBullets: [
      "Your LightChats account, profile, and login credentials",
      "All flows, triggers, contact groups, and stored Instagram conversation data",
      "Connected Instagram and Facebook OAuth tokens (revoked)",
      "Stored payment methods (Stripe customer record removed)",
      "Affiliate / partner account, referral links, and pending commissions",
    ],
    retentionTitle: "What we retain (and why)",
    retentionBody:
      "We retain a minimal record of paid invoices and tax-relevant transaction history for the period required by US tax and accounting law (typically 7 years). This data is anonymized where possible and is not used for marketing or product purposes.",
    igTitle: "Instagram-side disconnection",
    igBefore:
      "You can also revoke LightChats's access from Instagram directly at any time: ",
    igPath:
      "Instagram → Settings → Apps and websites → Active → LightChats → Remove",
    igAfter:
      ". Revoking from Instagram alone does not delete your LightChats account — for full deletion, also use one of the methods above.",
    questionsTitle: "Questions",
    questionsBefore: "For anything unclear, write to ",
    questionsAfter: " and we'll respond within 24 business hours.",
  },
  fr: {
    eyebrow: "Suppression des données",
    title: "Demander la suppression des données",
    intro:
      "Vous pouvez supprimer définitivement votre compte LightChats et toutes les données associées à tout moment. Cette page explique comment demander la suppression et ce qu'il advient de vos données.",
    selfTitle: "Suppression en libre-service",
    selfBefore:
      "Le moyen le plus rapide de supprimer votre compte est depuis l'application : rendez-vous dans ",
    selfLink: "Paramètres → Compte → Supprimer le compte",
    selfAfter:
      ". Une confirmation vous sera demandée. Une fois confirmée, votre compte est mis en file d'attente pour suppression immédiatement.",
    emailTitle: "Demande par e-mail",
    emailBefore:
      "Si vous ne pouvez pas accéder à l'application, envoyez un e-mail à ",
    emailMid:
      " depuis l'adresse associée à votre compte LightChats, avec pour objet ",
    emailQuoted: '« Data Deletion Request »',
    emailAfter:
      ". Nous vérifierons la propriété du compte et finaliserons la suppression sous 7 jours.",
    deletedTitle: "Ce qui est supprimé",
    deletedBullets: [
      "Votre compte LightChats, votre profil et vos identifiants de connexion",
      "Tous les flux, déclencheurs, groupes de contacts et données de conversation Instagram stockées",
      "Les jetons OAuth Instagram et Facebook connectés (révoqués)",
      "Les moyens de paiement enregistrés (suppression de la fiche client Stripe)",
      "Le compte d'affilié / partenaire, les liens de parrainage et les commissions en attente",
    ],
    retentionTitle: "Ce que nous conservons (et pourquoi)",
    retentionBody:
      "Nous conservons un enregistrement minimal des factures payées et de l'historique des transactions pertinent sur le plan fiscal pendant la durée requise par la législation fiscale et comptable des États-Unis (généralement 7 ans). Ces données sont anonymisées quand c'est possible et ne sont pas utilisées à des fins marketing ou produit.",
    igTitle: "Déconnexion côté Instagram",
    igBefore:
      "Vous pouvez aussi révoquer l'accès de LightChats directement depuis Instagram à tout moment : ",
    igPath:
      "Instagram → Paramètres → Applications et sites web → Actifs → LightChats → Supprimer",
    igAfter:
      ". La révocation depuis Instagram seule ne supprime pas votre compte LightChats — pour une suppression complète, utilisez aussi l'une des méthodes ci-dessus.",
    questionsTitle: "Questions",
    questionsBefore: "Pour toute question, écrivez à ",
    questionsAfter: " et nous vous répondrons sous 24 heures ouvrées.",
  },
  ar: {
    eyebrow: "حذف البيانات",
    title: "اطلب حذف بياناتك",
    intro:
      "يمكنك حذف حساب LightChats الخاص بك وجميع البيانات المرتبطة به نهائياً في أي وقت. توضح هذه الصفحة كيفية طلب الحذف وما يحدث لبياناتك.",
    selfTitle: "الحذف الذاتي",
    selfBefore: "أسرع طريقة لحذف حسابك هي من داخل التطبيق: انتقل إلى ",
    selfLink: "الإعدادات ← الحساب ← حذف الحساب",
    selfAfter:
      ". سيُطلب منك التأكيد. وبمجرد التأكيد، يُدرج حسابك في قائمة الحذف فوراً.",
    emailTitle: "طلب عبر البريد الإلكتروني",
    emailBefore: "إذا تعذّر عليك الوصول إلى التطبيق، أرسل بريداً إلى ",
    emailMid: " من العنوان المرتبط بحساب LightChats الخاص بك، تحت الموضوع ",
    emailQuoted: '"Data Deletion Request"',
    emailAfter:
      ". سنتحقّق من ملكية الحساب ونُتمّ الحذف خلال 7 أيام.",
    deletedTitle: "ما الذي يتم حذفه",
    deletedBullets: [
      "حساب LightChats وملفك الشخصي وبيانات تسجيل الدخول",
      "كل التدفقات والمحفزات ومجموعات جهات الاتصال وبيانات محادثات إنستغرام المخزّنة",
      "رموز OAuth المتصلة بإنستغرام وفيسبوك (تُلغى)",
      "وسائل الدفع المحفوظة (تُحذف بطاقة العميل في Stripe)",
      "حساب الإحالة / الشريك وروابط الإحالة والعمولات المعلّقة",
    ],
    retentionTitle: "ما الذي نحتفظ به (ولماذا)",
    retentionBody:
      "نحتفظ بسجل أدنى للفواتير المدفوعة وتاريخ المعاملات ذات الصلة الضريبية طوال المدة التي يفرضها قانون الضرائب والمحاسبة في الولايات المتحدة (عادة 7 سنوات). تُجهَّل هذه البيانات قدر الإمكان ولا تُستخدم لأغراض تسويقية أو منتجية.",
    igTitle: "قطع الاتصال من جهة إنستغرام",
    igBefore:
      "يمكنك أيضاً سحب وصول LightChats مباشرة من إنستغرام في أي وقت: ",
    igPath:
      "Instagram ← الإعدادات ← التطبيقات والمواقع ← النشطة ← LightChats ← إزالة",
    igAfter:
      ". السحب من إنستغرام وحده لا يحذف حساب LightChats الخاص بك — للحذف الكامل، استخدم إحدى الطرق أعلاه أيضاً.",
    questionsTitle: "أسئلة",
    questionsBefore: "لأي استفسار غير واضح، راسلنا على ",
    questionsAfter: " وسنرد خلال 24 ساعة عمل.",
  },
};
