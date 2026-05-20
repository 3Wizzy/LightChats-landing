import type { Lang } from "../LanguageContext";

interface ListItem {
  label: string;
  text: string;
}

interface PrivacyPolicyContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  // 1. Introduction
  s1Title: string;
  s1P1: string;
  s1P2: string;
  // 2. Information We Collect
  s2Title: string;
  s2H1: string;
  s2H1P: string;
  s2H2: string;
  s2H2P: string;
  s2H3: string;
  s2H3P: string;
  s2H4: string;
  s2H4P: string;
  // 3. How We Use Your Information
  s3Title: string;
  s3List: string[];
  // 4. Data Sharing & Disclosure
  s4Title: string;
  s4P1: string;
  s4List: ListItem[];
  // 5. Instagram API Compliance
  s5Title: string;
  s5P1: string;
  // 6. Data Security
  s6Title: string;
  s6P1: string;
  // 7. Data Retention & Deletion
  s7Title: string;
  s7P1: string;
  // 8. Your Rights
  s8Title: string;
  s8P1: string;
  s8List: string[];
  s8P2Prefix: string;
  s8P2Suffix: string;
  // 9. Cookies
  s9Title: string;
  s9P1: string;
  // 10. Children's Privacy
  s10Title: string;
  s10P1: string;
  // 11. Changes
  s11Title: string;
  s11P1: string;
  // 12. Contact
  s12Title: string;
  s12P1Prefix: string;
  s12P1Suffix: string;
}

export const privacyPolicy: Record<Lang, PrivacyPolicyContent> = {
  en: {
    title: "Privacy Policy",
    metaTitle: "Privacy Policy — LightChats",
    metaDescription:
      "Learn how LightChats collects, uses, and protects your data. Read our full privacy policy.",
    lastUpdated: "Last updated:",
    s1Title: "1. Introduction",
    s1P1:
      'Lightchats LLC ("LightChats," "we," "our," or "us"), a Wyoming limited liability company located at 1501 South Greeley Hwy, Ste C #1266, Cheyenne, WY 82007, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application and related services (collectively, the "Service").',
    s1P2:
      "By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.",
    s2Title: "2. Information We Collect",
    s2H1: "2.1 Account Information",
    s2H1P:
      "When you create an account, we collect your email address and a securely hashed password. We do not store plaintext passwords.",
    s2H2: "2.2 Instagram Account Data",
    s2H2P:
      "When you connect an Instagram Business or Creator account, we receive and store data through the Instagram Graph API, including your Instagram user ID, username, profile picture URL, account type, follower and post counts, biography, and access tokens. We also receive real-time data via Instagram webhooks, including comment content, commenter usernames, direct messages, and related metadata.",
    s2H3: "2.3 Activity & Usage Data",
    s2H3P:
      "We log moderation actions (comments removed, auto-replies sent), user contacts who interact with your account, and timestamps of all activity. This data is used to power your analytics dashboard.",
    s2H4: "2.4 Technical Data",
    s2H4P:
      "We may collect browser type, IP address, device information, and usage patterns to improve Service performance, security, and reliability.",
    s3Title: "3. How We Use Your Information",
    s3List: [
      "To provide and maintain the Service, including comment moderation and DM automation",
      "To display analytics and activity history in your dashboard",
      "To authenticate your identity and manage your account",
      "To send service-related notifications (e.g., account alerts, plan limits)",
      "To improve, personalize, and optimize the Service",
      "To detect and prevent fraud, abuse, or security threats",
    ],
    s4Title: "4. Data Sharing & Disclosure",
    s4P1:
      "We do not sell, rent, or trade your personal information. We may share data only in the following circumstances:",
    s4List: [
      {
        label: "Service Providers:",
        text: "Trusted third parties that assist in operating the Service (hosting, database management), bound by confidentiality obligations",
      },
      {
        label: "Legal Compliance:",
        text: "When required by law, regulation, or legal process",
      },
      {
        label: "Safety:",
        text: "To protect the rights, property, or safety of LightChats, our users, or the public",
      },
      {
        label: "Business Transfers:",
        text: "In connection with a merger, acquisition, or sale of assets",
      },
    ],
    s5Title: "5. Instagram API Compliance",
    s5P1:
      "Our use of Instagram data is governed by Meta's Platform Terms and Instagram's API Terms of Use. We only request permissions necessary to provide the Service. Access tokens are stored securely and are never shared with third parties. You can revoke access at any time by disconnecting your account from LightChats or through your Instagram settings.",
    s6Title: "6. Data Security",
    s6P1:
      "We implement industry-standard security measures including encrypted data transmission (TLS/SSL), hashed passwords using bcrypt, secure session management with HTTP-only cookies, and access control mechanisms. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    s7Title: "7. Data Retention & Deletion",
    s7P1:
      "We retain your data for as long as your account is active. Activity logs are retained for up to 14 days by default. When you delete your account, all associated data — including connected Instagram accounts, activity logs, contacts, and settings — is permanently deleted from our systems.",
    s8Title: "8. Your Rights",
    s8P1: "Depending on your jurisdiction, you may have the right to:",
    s8List: [
      "Access the personal data we hold about you",
      "Request correction of inaccurate data",
      "Request deletion of your data",
      "Object to or restrict processing of your data",
      "Data portability",
      "Withdraw consent at any time",
    ],
    s8P2Prefix: "To exercise these rights, contact us at ",
    s8P2Suffix: ".",
    s9Title: "9. Cookies",
    s9P1:
      "We use essential cookies for authentication and session management. We do not use third-party tracking cookies or advertising cookies. By using the Service, you consent to the use of essential cookies.",
    s10Title: "10. Children's Privacy",
    s10P1:
      "The Service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we discover that we have collected data from a child under 16, we will delete it promptly.",
    s11Title: "11. Changes to This Policy",
    s11P1:
      'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the updated policy.',
    s12Title: "12. Contact Us",
    s12P1Prefix:
      "If you have questions or concerns about this Privacy Policy, please contact us at ",
    s12P1Suffix: " or by mail at:",
  },
  fr: {
    title: "Politique de confidentialité",
    metaTitle: "Politique de confidentialité — LightChats",
    metaDescription:
      "Découvrez comment LightChats collecte, utilise et protège vos données. Consultez notre politique de confidentialité complète.",
    lastUpdated: "Dernière mise à jour :",
    s1Title: "1. Introduction",
    s1P1:
      "Lightchats LLC (« LightChats », « nous », « notre » ou « nos »), une société à responsabilité limitée du Wyoming située au 1501 South Greeley Hwy, Ste C #1266, Cheyenne, WY 82007, s'engage à protéger votre vie privée. La présente Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application web et les services associés (collectivement, le « Service »).",
    s1P2:
      "En utilisant le Service, vous acceptez la collecte et l'utilisation des informations conformément à la présente politique. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le Service.",
    s2Title: "2. Informations que nous collectons",
    s2H1: "2.1 Informations de compte",
    s2H1P:
      "Lors de la création de votre compte, nous collectons votre adresse e-mail et un mot de passe haché de manière sécurisée. Nous ne stockons jamais de mots de passe en clair.",
    s2H2: "2.2 Données du compte Instagram",
    s2H2P:
      "Lorsque vous connectez un compte Instagram Business ou Créateur, nous recevons et stockons des données via l'API Instagram Graph, notamment votre identifiant utilisateur Instagram, votre nom d'utilisateur, l'URL de votre photo de profil, le type de compte, le nombre d'abonnés et de publications, la biographie et les jetons d'accès. Nous recevons également des données en temps réel via les webhooks Instagram, notamment le contenu des commentaires, les noms d'utilisateurs des commentateurs, les messages directs et les métadonnées associées.",
    s2H3: "2.3 Données d'activité et d'utilisation",
    s2H3P:
      "Nous enregistrons les actions de modération (commentaires supprimés, réponses automatiques envoyées), les contacts utilisateurs qui interagissent avec votre compte, ainsi que les horodatages de toutes les activités. Ces données alimentent votre tableau de bord analytique.",
    s2H4: "2.4 Données techniques",
    s2H4P:
      "Nous pouvons collecter le type de navigateur, l'adresse IP, les informations sur l'appareil et les habitudes d'utilisation afin d'améliorer les performances, la sécurité et la fiabilité du Service.",
    s3Title: "3. Comment nous utilisons vos informations",
    s3List: [
      "Pour fournir et maintenir le Service, y compris la modération des commentaires et l'automatisation des DM",
      "Pour afficher les analyses et l'historique d'activité dans votre tableau de bord",
      "Pour authentifier votre identité et gérer votre compte",
      "Pour envoyer des notifications liées au service (alertes de compte, limites de plan, etc.)",
      "Pour améliorer, personnaliser et optimiser le Service",
      "Pour détecter et prévenir la fraude, les abus ou les menaces de sécurité",
    ],
    s4Title: "4. Partage et divulgation des données",
    s4P1:
      "Nous ne vendons, ne louons ni n'échangeons vos informations personnelles. Nous pouvons partager des données uniquement dans les circonstances suivantes :",
    s4List: [
      {
        label: "Prestataires de services :",
        text: "tiers de confiance qui contribuent au fonctionnement du Service (hébergement, gestion de base de données), soumis à des obligations de confidentialité",
      },
      {
        label: "Conformité légale :",
        text: "lorsque la loi, la réglementation ou une procédure judiciaire l'exige",
      },
      {
        label: "Sécurité :",
        text: "pour protéger les droits, la propriété ou la sécurité de LightChats, de nos utilisateurs ou du public",
      },
      {
        label: "Transferts d'entreprise :",
        text: "dans le cadre d'une fusion, d'une acquisition ou d'une cession d'actifs",
      },
    ],
    s5Title: "5. Conformité à l'API Instagram",
    s5P1:
      "Notre utilisation des données Instagram est régie par les Conditions de plateforme de Meta et les Conditions d'utilisation de l'API Instagram. Nous demandons uniquement les autorisations nécessaires à la fourniture du Service. Les jetons d'accès sont stockés de manière sécurisée et ne sont jamais partagés avec des tiers. Vous pouvez révoquer l'accès à tout moment en déconnectant votre compte de LightChats ou via les paramètres Instagram.",
    s6Title: "6. Sécurité des données",
    s6P1:
      "Nous mettons en œuvre des mesures de sécurité conformes aux standards de l'industrie, incluant la transmission chiffrée des données (TLS/SSL), des mots de passe hachés avec bcrypt, une gestion sécurisée des sessions avec cookies HTTP-only, et des mécanismes de contrôle d'accès. Cependant, aucune méthode de transmission sur Internet n'est sûre à 100 %, et nous ne pouvons garantir une sécurité absolue.",
    s7Title: "7. Conservation et suppression des données",
    s7P1:
      "Nous conservons vos données aussi longtemps que votre compte est actif. Les journaux d'activité sont conservés jusqu'à 14 jours par défaut. Lorsque vous supprimez votre compte, toutes les données associées — y compris les comptes Instagram connectés, les journaux d'activité, les contacts et les paramètres — sont définitivement effacées de nos systèmes.",
    s8Title: "8. Vos droits",
    s8P1:
      "Selon votre juridiction, vous pouvez disposer des droits suivants :",
    s8List: [
      "Accéder aux données personnelles que nous détenons à votre sujet",
      "Demander la rectification de données inexactes",
      "Demander la suppression de vos données",
      "Vous opposer au traitement de vos données ou le restreindre",
      "Portabilité des données",
      "Retirer votre consentement à tout moment",
    ],
    s8P2Prefix: "Pour exercer ces droits, contactez-nous à l'adresse ",
    s8P2Suffix: ".",
    s9Title: "9. Cookies",
    s9P1:
      "Nous utilisons des cookies essentiels pour l'authentification et la gestion des sessions. Nous n'utilisons pas de cookies de suivi tiers ni de cookies publicitaires. En utilisant le Service, vous consentez à l'utilisation des cookies essentiels.",
    s10Title: "10. Protection des mineurs",
    s10P1:
      "Le Service n'est pas destiné aux personnes de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si nous découvrons que nous avons collecté des données d'un enfant de moins de 16 ans, nous les supprimerons rapidement.",
    s11Title: "11. Modifications de cette politique",
    s11P1:
      "Nous pouvons mettre à jour la présente Politique de confidentialité de temps à autre. Nous vous informerons des modifications importantes en publiant la politique mise à jour sur cette page avec une date « Dernière mise à jour » révisée. Votre utilisation continue du Service après les modifications vaut acceptation de la politique mise à jour.",
    s12Title: "12. Nous contacter",
    s12P1Prefix:
      "Pour toute question ou préoccupation concernant cette Politique de confidentialité, veuillez nous contacter à l'adresse ",
    s12P1Suffix: " ou par courrier à :",
  },
  ar: {
    title: "سياسة الخصوصية",
    metaTitle: "سياسة الخصوصية — LightChats",
    metaDescription:
      "تعرّف على كيفية جمع LightChats لبياناتك واستخدامها وحمايتها. اقرأ سياسة الخصوصية الكاملة.",
    lastUpdated: "آخر تحديث:",
    s1Title: "1. مقدمة",
    s1P1:
      "تلتزم شركة Lightchats LLC («LightChats» أو «نحن» أو «لنا» أو «الخاص بنا»)، وهي شركة ذات مسؤولية محدودة في ولاية وايومنغ ويقع مقرها في 1501 South Greeley Hwy, Ste C #1266, Cheyenne, WY 82007، بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها والإفصاح عنها وحمايتها عند استخدامك لتطبيقنا الإلكتروني والخدمات المرتبطة به (يُشار إليها مجتمعةً بـ «الخدمة»).",
    s1P2:
      "باستخدامك للخدمة، فإنك توافق على جمع المعلومات واستخدامها وفقاً لهذه السياسة. إذا لم توافق، فيرجى عدم استخدام الخدمة.",
    s2Title: "2. المعلومات التي نجمعها",
    s2H1: "2.1 معلومات الحساب",
    s2H1P:
      "عند إنشاء حسابك، نقوم بجمع عنوان بريدك الإلكتروني وكلمة مرور مشفّرة بشكل آمن. لا نخزّن كلمات المرور بصيغة نصية.",
    s2H2: "2.2 بيانات حساب إنستغرام",
    s2H2P:
      "عند ربط حساب إنستغرام تجاري أو حساب مبدع، نتلقّى ونخزّن البيانات عبر واجهة Instagram Graph، بما في ذلك معرّف المستخدم على إنستغرام، واسم المستخدم، ورابط صورة الملف الشخصي، ونوع الحساب، وعدد المتابعين والمنشورات، والسيرة الذاتية، ورموز الوصول. كما نتلقّى بيانات لحظية عبر webhooks الخاصة بإنستغرام، تشمل محتوى التعليقات وأسماء المعلّقين والرسائل المباشرة والبيانات الوصفية المرتبطة بها.",
    s2H3: "2.3 بيانات النشاط والاستخدام",
    s2H3P:
      "نسجّل إجراءات الإدارة (التعليقات المحذوفة، الردود التلقائية المُرسلة)، وجهات الاتصال التي تتفاعل مع حسابك، والطوابع الزمنية لجميع الأنشطة. تُستخدم هذه البيانات لتشغيل لوحة التحليلات الخاصة بك.",
    s2H4: "2.4 البيانات التقنية",
    s2H4P:
      "قد نجمع نوع المتصفح وعنوان IP ومعلومات الجهاز وأنماط الاستخدام لتحسين أداء الخدمة وأمانها وموثوقيتها.",
    s3Title: "3. كيف نستخدم معلوماتك",
    s3List: [
      "لتوفير الخدمة وصيانتها، بما في ذلك إدارة التعليقات وأتمتة الرسائل المباشرة",
      "لعرض التحليلات وسجل النشاط في لوحتك",
      "للتحقّق من هويتك وإدارة حسابك",
      "لإرسال إشعارات متعلقة بالخدمة (تنبيهات الحساب، حدود الباقة، إلخ)",
      "لتحسين الخدمة وتخصيصها وتحسينها",
      "لاكتشاف الاحتيال والإساءة والتهديدات الأمنية ومنعها",
    ],
    s4Title: "4. مشاركة البيانات والإفصاح عنها",
    s4P1:
      "نحن لا نبيع معلوماتك الشخصية أو نؤجّرها أو نتاجر بها. قد نشارك البيانات فقط في الحالات التالية:",
    s4List: [
      {
        label: "مزوّدو الخدمات:",
        text: "أطراف ثالثة موثوقة تساعد في تشغيل الخدمة (الاستضافة، إدارة قواعد البيانات)، ملتزمة بالتزامات السرية",
      },
      {
        label: "الامتثال القانوني:",
        text: "عندما يكون ذلك مطلوباً بموجب القانون أو اللوائح أو الإجراءات القانونية",
      },
      {
        label: "السلامة:",
        text: "لحماية حقوق LightChats أو مستخدميها أو الجمهور أو ممتلكاتهم أو سلامتهم",
      },
      {
        label: "عمليات نقل الأعمال:",
        text: "في إطار اندماج أو استحواذ أو بيع أصول",
      },
    ],
    s5Title: "5. الامتثال لواجهة Instagram API",
    s5P1:
      "يخضع استخدامنا لبيانات إنستغرام لشروط منصة Meta وشروط استخدام واجهة Instagram API. نطلب فقط الأذونات الضرورية لتقديم الخدمة. تُخزَّن رموز الوصول بشكل آمن ولا تُشارك أبداً مع أطراف ثالثة. يمكنك إلغاء الوصول في أي وقت بفصل حسابك عن LightChats أو من خلال إعدادات إنستغرام.",
    s6Title: "6. أمان البيانات",
    s6P1:
      "نطبّق تدابير أمنية وفق معايير الصناعة، تشمل النقل المشفّر للبيانات (TLS/SSL)، وتشفير كلمات المرور باستخدام bcrypt، وإدارة آمنة للجلسات بواسطة ملفات تعريف ارتباط HTTP-only، وآليات للتحكم في الوصول. غير أنّ أي طريقة نقل عبر الإنترنت ليست آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.",
    s7Title: "7. الاحتفاظ بالبيانات وحذفها",
    s7P1:
      "نحتفظ ببياناتك طالما أنّ حسابك نشط. تُحفظ سجلات النشاط لمدة تصل إلى 14 يوماً افتراضياً. عند حذف حسابك، تُحذف جميع البيانات المرتبطة به — بما في ذلك حسابات إنستغرام المتصلة وسجلات النشاط وجهات الاتصال والإعدادات — حذفاً نهائياً من أنظمتنا.",
    s8Title: "8. حقوقك",
    s8P1: "وفقاً للولاية القضائية التي تنتمي إليها، قد تتمتع بالحقوق التالية:",
    s8List: [
      "الوصول إلى البيانات الشخصية التي نحتفظ بها عنك",
      "طلب تصحيح البيانات غير الدقيقة",
      "طلب حذف بياناتك",
      "الاعتراض على معالجة بياناتك أو تقييدها",
      "نقل البيانات",
      "سحب الموافقة في أي وقت",
    ],
    s8P2Prefix: "لممارسة هذه الحقوق، تواصل معنا عبر ",
    s8P2Suffix: ".",
    s9Title: "9. ملفات تعريف الارتباط",
    s9P1:
      "نستخدم ملفات تعريف ارتباط أساسية لأغراض المصادقة وإدارة الجلسات. لا نستخدم ملفات تعريف ارتباط لتتبّع الأطراف الثالثة ولا للإعلانات. باستخدامك للخدمة، فإنك توافق على استخدام ملفات تعريف الارتباط الأساسية.",
    s10Title: "10. خصوصية الأطفال",
    s10P1:
      "الخدمة غير موجّهة للأشخاص دون سن 16 عاماً. ولا نجمع عن قصد معلومات شخصية من الأطفال. إذا اكتشفنا أنّنا جمعنا بيانات من طفل دون سن 16 عاماً، فسنحذفها على الفور.",
    s11Title: "11. التعديلات على هذه السياسة",
    s11P1:
      "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. وسنبلّغك بالتغييرات الجوهرية عبر نشر السياسة المُحدّثة على هذه الصفحة مع تحديث تاريخ «آخر تحديث». ويُعدّ استمرارك في استخدام الخدمة بعد التعديلات قبولاً للسياسة المُحدّثة.",
    s12Title: "12. تواصل معنا",
    s12P1Prefix:
      "إن كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، فيرجى التواصل معنا عبر ",
    s12P1Suffix: " أو بالبريد على العنوان التالي:",
  },
};
