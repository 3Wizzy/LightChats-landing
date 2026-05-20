import type { Lang } from "../LanguageContext";

interface TermsConditionsContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  s1Title: string;
  s1P1: string;
  s2Title: string;
  s2P1: string;
  s3Title: string;
  s3P1: string;
  s4Title: string;
  s4P1: string;
  s5Title: string;
  s5P1Prefix: string;
  s5LinkText: string;
  s5P1Suffix: string;
  s6Title: string;
  s6Intro: string;
  s6List: string[];
  s7Title: string;
  s7P1: string;
  s7P2: string;
  s8Title: string;
  s8P1: string;
  s9Title: string;
  s9P1: string;
  s10Title: string;
  s10P1: string;
  s11Title: string;
  s11P1: string;
  s11P2: string;
  s12Title: string;
  s12P1: string;
  s13Title: string;
  s13P1: string;
  s14Title: string;
  s14P1: string;
  s15Title: string;
  s15P1: string;
  s16Title: string;
  s16P1: string;
  s17Title: string;
  s17P1Prefix: string;
  s17P1Suffix: string;
}

export const termsConditions: Record<Lang, TermsConditionsContent> = {
  en: {
    title: "Terms & Conditions",
    metaTitle: "Terms & Conditions — LightChats",
    metaDescription:
      "Read the terms and conditions for using LightChats, our Instagram chat marketing automation platform.",
    lastUpdated: "Last updated:",
    s1Title: "1. Acceptance of Terms",
    s1P1:
      'By accessing or using LightChats ("the Service"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, you may not use the Service. These Terms constitute a legally binding agreement between you ("User," "you") and Lightchats LLC, a Wyoming limited liability company located at 1501 South Greeley Hwy, Ste C #1266, Cheyenne, WY 82007 ("we," "our," "us").',
    s2Title: "2. Description of Service",
    s2P1:
      "LightChats is a web-based platform that provides Instagram content moderation and automation tools, including automated comment filtering, direct message auto-reply, activity analytics, and multi-account management. The Service operates through Instagram's official Graph API and webhook system.",
    s3Title: "3. Eligibility",
    s3P1:
      "You must be at least 16 years old to use the Service. By creating an account, you represent that you are at least 16 years of age and have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.",
    s4Title: "4. Account Registration",
    s4P1:
      "To use the Service, you must create an account with a valid email address and password. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these Terms.",
    s5Title: "5. Instagram Account Connection",
    s5P1Prefix:
      "The Service requires you to connect one or more Instagram Business or Creator accounts via Meta's OAuth flow. By connecting your account, you authorize LightChats to access and interact with your Instagram data as described in our ",
    s5LinkText: "Privacy Policy",
    s5P1Suffix:
      ". You are responsible for ensuring your use of our moderation and automation features complies with Instagram's Terms of Use and Community Guidelines.",
    s6Title: "6. Acceptable Use",
    s6Intro: "You agree not to use the Service to:",
    s6List: [
      "Violate any applicable laws, regulations, or third-party rights",
      "Violate Instagram's Terms of Use or Community Guidelines",
      "Engage in harassment, bullying, or discriminatory behavior",
      "Send spam, unsolicited messages, or deceptive content via DM automation",
      "Attempt to gain unauthorized access to the Service or other users' accounts",
      "Reverse-engineer, decompile, or disassemble the Service",
      "Use the Service in a way that could damage, disable, or impair its functionality",
      "Resell, sublicense, or commercially exploit the Service without authorization",
    ],
    s7Title: "7. Subscription & Billing",
    s7P1:
      "LightChats offers free and paid subscription plans. Paid plans are billed on a monthly basis. By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis until you cancel. You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period. Refunds are not provided for partial billing periods.",
    s7P2:
      "We reserve the right to change pricing with 30 days' advance notice. Continued use after a price change constitutes acceptance of the new pricing.",
    s8Title: "8. Content Moderation Disclaimer",
    s8P1:
      "LightChats's moderation tools operate based on keyword filters and rules that you configure. We do not guarantee that all unwanted content will be detected or that legitimate content will never be incorrectly flagged. You are solely responsible for configuring your moderation rules and reviewing moderation actions. Lightchats LLC is not liable for any content that is or is not removed from your Instagram accounts.",
    s9Title: "9. Intellectual Property",
    s9P1:
      "The Service, including its design, code, features, graphics, and documentation, is owned by Lightchats LLC and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms. You retain ownership of all content on your Instagram accounts.",
    s10Title: "10. Service Availability",
    s10P1:
      "We strive to maintain high availability but do not guarantee uninterrupted or error-free operation. The Service depends on third-party APIs (including Instagram's Graph API) which may experience outages or changes beyond our control. We may perform maintenance, updates, or modifications that temporarily affect availability. We will make reasonable efforts to notify users of planned downtime.",
    s11Title: "11. Limitation of Liability",
    s11P1:
      "To the maximum extent permitted by law, LightChats and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill, arising from your use of or inability to use the Service.",
    s11P2:
      "Our total aggregate liability for any claims arising from these Terms or the Service shall not exceed the amount you paid us in the 12 months preceding the claim.",
    s12Title: "12. Disclaimer of Warranties",
    s12P1:
      'The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will meet your requirements or that it will be compatible with all Instagram features or updates.',
    s13Title: "13. Indemnification",
    s13P1:
      "You agree to indemnify and hold harmless LightChats and its affiliates from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.",
    s14Title: "14. Termination",
    s14P1:
      "We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Upon termination, your right to use the Service ceases immediately. You may terminate your account at any time by deleting it through the Service settings. Sections that by their nature should survive termination (including Limitation of Liability, Disclaimer, and Indemnification) will survive.",
    s15Title: "15. Changes to Terms",
    s15P1:
      "We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through the Service. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms. If you do not agree, you must stop using the Service and delete your account.",
    s16Title: "16. Governing Law",
    s16P1:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved through binding arbitration or in the courts located in Laramie County, Wyoming.",
    s17Title: "17. Contact",
    s17P1Prefix: "For questions about these Terms, contact us at ",
    s17P1Suffix: " or by mail at:",
  },
  fr: {
    title: "Conditions générales",
    metaTitle: "Conditions générales — LightChats",
    metaDescription:
      "Consultez les conditions générales d'utilisation de LightChats, notre plateforme d'automatisation de chat marketing sur Instagram.",
    lastUpdated: "Dernière mise à jour :",
    s1Title: "1. Acceptation des conditions",
    s1P1:
      "En accédant à LightChats (« le Service ») ou en l'utilisant, vous acceptez d'être lié par les présentes Conditions générales (« Conditions »). Si vous n'acceptez pas ces Conditions, vous ne pouvez pas utiliser le Service. Les présentes Conditions constituent un accord juridiquement contraignant entre vous (« Utilisateur », « vous ») et Lightchats LLC, une société à responsabilité limitée du Wyoming située au 1501 South Greeley Hwy, Ste C #1266, Cheyenne, WY 82007 (« nous », « notre », « nos »).",
    s2Title: "2. Description du service",
    s2P1:
      "LightChats est une plateforme web qui fournit des outils de modération et d'automatisation pour Instagram, notamment le filtrage automatique des commentaires, les réponses automatiques aux messages directs, les analyses d'activité et la gestion multi-comptes. Le Service fonctionne via l'API Graph officielle d'Instagram et son système de webhooks.",
    s3Title: "3. Éligibilité",
    s3P1:
      "Vous devez avoir au moins 16 ans pour utiliser le Service. En créant un compte, vous déclarez avoir au moins 16 ans et disposer de la capacité juridique pour accepter ces Conditions. Si vous utilisez le Service au nom d'une organisation, vous déclarez avoir le pouvoir d'engager cette organisation.",
    s4Title: "4. Inscription au compte",
    s4P1:
      "Pour utiliser le Service, vous devez créer un compte avec une adresse e-mail et un mot de passe valides. Vous êtes responsable de la confidentialité de vos identifiants ainsi que de toutes les activités effectuées depuis votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée. Nous nous réservons le droit de suspendre ou de résilier les comptes qui enfreignent ces Conditions.",
    s5Title: "5. Connexion du compte Instagram",
    s5P1Prefix:
      "Le Service nécessite la connexion d'un ou plusieurs comptes Instagram Business ou Créateur via le flux OAuth de Meta. En connectant votre compte, vous autorisez LightChats à accéder à vos données Instagram et à interagir avec elles, comme décrit dans notre ",
    s5LinkText: "Politique de confidentialité",
    s5P1Suffix:
      ". Il vous incombe de veiller à ce que votre utilisation de nos fonctionnalités de modération et d'automatisation respecte les Conditions d'utilisation et les Règles de la communauté Instagram.",
    s6Title: "6. Utilisation acceptable",
    s6Intro: "Vous vous engagez à ne pas utiliser le Service pour :",
    s6List: [
      "Enfreindre les lois, réglementations applicables ou les droits de tiers",
      "Enfreindre les Conditions d'utilisation ou les Règles de la communauté Instagram",
      "Vous livrer à du harcèlement, de l'intimidation ou des comportements discriminatoires",
      "Envoyer du spam, des messages non sollicités ou du contenu trompeur via l'automatisation des DM",
      "Tenter d'accéder sans autorisation au Service ou aux comptes d'autres utilisateurs",
      "Procéder à de la rétro-ingénierie, à la décompilation ou au désassemblage du Service",
      "Utiliser le Service d'une manière susceptible de l'endommager, de le désactiver ou d'en altérer le fonctionnement",
      "Revendre, sous-licencier ou exploiter commercialement le Service sans autorisation",
    ],
    s7Title: "7. Abonnement et facturation",
    s7P1:
      "LightChats propose des formules d'abonnement gratuites et payantes. Les formules payantes sont facturées mensuellement. En souscrivant à une formule payante, vous nous autorisez à prélever votre moyen de paiement de manière récurrente jusqu'à votre résiliation. Vous pouvez annuler votre abonnement à tout moment ; l'annulation prend effet à la fin de la période de facturation en cours. Aucun remboursement n'est accordé pour les périodes de facturation partielles.",
    s7P2:
      "Nous nous réservons le droit de modifier les tarifs moyennant un préavis de 30 jours. Toute utilisation continue après un changement de tarif vaut acceptation des nouveaux prix.",
    s8Title: "8. Avertissement sur la modération de contenu",
    s8P1:
      "Les outils de modération de LightChats fonctionnent selon les filtres et règles par mots-clés que vous configurez. Nous ne garantissons pas que tout contenu indésirable sera détecté ni qu'un contenu légitime ne sera jamais signalé à tort. Vous êtes seul responsable de la configuration de vos règles de modération et de la vérification des actions de modération. Lightchats LLC n'est pas responsable du contenu retiré ou non retiré de vos comptes Instagram.",
    s9Title: "9. Propriété intellectuelle",
    s9P1:
      "Le Service, y compris sa conception, son code, ses fonctionnalités, ses graphismes et sa documentation, est la propriété de Lightchats LLC et est protégé par les lois sur la propriété intellectuelle. Une licence limitée, non exclusive et non transférable vous est accordée pour utiliser le Service conformément aux présentes Conditions. Vous conservez la propriété de tout le contenu de vos comptes Instagram.",
    s10Title: "10. Disponibilité du service",
    s10P1:
      "Nous nous efforçons de maintenir une haute disponibilité mais ne garantissons pas un fonctionnement ininterrompu ou exempt d'erreurs. Le Service dépend d'API tierces (notamment l'API Graph d'Instagram) qui peuvent connaître des pannes ou des changements indépendants de notre volonté. Nous pouvons effectuer des opérations de maintenance, des mises à jour ou des modifications affectant temporairement la disponibilité. Nous nous efforcerons d'avertir les utilisateurs des indisponibilités planifiées.",
    s11Title: "11. Limitation de responsabilité",
    s11P1:
      "Dans toute la mesure permise par la loi, LightChats ainsi que ses dirigeants, administrateurs, employés et agents ne seront pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris la perte de bénéfices, de données, d'opportunités commerciales ou de réputation, résultant de votre utilisation ou de votre impossibilité d'utiliser le Service.",
    s11P2:
      "Notre responsabilité totale cumulée pour toute réclamation découlant des présentes Conditions ou du Service ne pourra excéder le montant que vous nous avez versé au cours des 12 mois précédant la réclamation.",
    s12Title: "12. Exclusion de garanties",
    s12P1:
      "Le Service est fourni « tel quel » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite, y compris, mais sans s'y limiter, les garanties implicites de qualité marchande, d'adéquation à un usage particulier et de non-violation. Nous ne garantissons pas que le Service répondra à vos exigences ni qu'il sera compatible avec toutes les fonctionnalités ou mises à jour d'Instagram.",
    s13Title: "13. Indemnisation",
    s13P1:
      "Vous acceptez d'indemniser LightChats et ses affiliés et de les dégager de toute responsabilité pour toute réclamation, dommage, perte, coût et dépense (y compris les frais juridiques) découlant de votre utilisation du Service, de votre violation des présentes Conditions ou de votre violation de droits de tiers.",
    s14Title: "14. Résiliation",
    s14P1:
      "Nous pouvons suspendre ou résilier votre accès au Service à tout moment, avec ou sans motif, avec ou sans préavis. En cas de résiliation, votre droit d'utiliser le Service prend fin immédiatement. Vous pouvez résilier votre compte à tout moment en le supprimant via les paramètres du Service. Les sections qui, par leur nature, doivent survivre à la résiliation (notamment la Limitation de responsabilité, l'Exclusion de garanties et l'Indemnisation) survivront.",
    s15Title: "15. Modifications des Conditions",
    s15P1:
      "Nous nous réservons le droit de modifier les présentes Conditions à tout moment. Les modifications importantes seront communiquées par e-mail ou via le Service. Votre utilisation continue du Service après l'entrée en vigueur des modifications vaut acceptation des Conditions révisées. Si vous n'êtes pas d'accord, vous devez cesser d'utiliser le Service et supprimer votre compte.",
    s16Title: "16. Loi applicable",
    s16P1:
      "Les présentes Conditions sont régies et interprétées conformément aux lois de l'État du Wyoming, États-Unis, sans égard aux règles de conflit de lois. Tout litige découlant des présentes Conditions ou du Service sera résolu par arbitrage contraignant ou devant les tribunaux situés dans le comté de Laramie, Wyoming.",
    s17Title: "17. Contact",
    s17P1Prefix:
      "Pour toute question concernant les présentes Conditions, contactez-nous à ",
    s17P1Suffix: " ou par courrier à :",
  },
  ar: {
    title: "الشروط والأحكام",
    metaTitle: "الشروط والأحكام — LightChats",
    metaDescription:
      "اطّلع على الشروط والأحكام الخاصة باستخدام LightChats، منصتنا لأتمتة التسويق عبر المحادثات على إنستغرام.",
    lastUpdated: "آخر تحديث:",
    s1Title: "1. قبول الشروط",
    s1P1:
      "بدخولك إلى LightChats («الخدمة») أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام («الشروط»). إذا لم توافق عليها، فلا يجوز لك استخدام الخدمة. تشكّل هذه الشروط اتفاقاً ملزماً قانوناً بينك («المستخدم»، «أنت») وبين شركة Lightchats LLC، وهي شركة ذات مسؤولية محدودة في ولاية وايومنغ ومقرها 1501 South Greeley Hwy, Ste C #1266, Cheyenne, WY 82007 («نحن»، «لنا»، «الخاص بنا»).",
    s2Title: "2. وصف الخدمة",
    s2P1:
      "LightChats منصة قائمة على الويب توفّر أدوات لإدارة محتوى إنستغرام وأتمتته، تشمل تصفية التعليقات تلقائياً، والردود التلقائية على الرسائل المباشرة، وتحليلات النشاط، وإدارة الحسابات المتعددة. تعمل الخدمة عبر واجهة Graph الرسمية من إنستغرام ونظام webhooks الخاص بها.",
    s3Title: "3. الأهلية",
    s3P1:
      "يجب أن يكون عمرك 16 عاماً على الأقل لاستخدام الخدمة. بإنشائك حساباً، تُقرّ بأنك بلغت 16 عاماً وتمتلك الأهلية القانونية لقبول هذه الشروط. وإذا كنت تستخدم الخدمة نيابةً عن جهة ما، فإنك تُقرّ بأن لديك صلاحية إلزامها بها.",
    s4Title: "4. تسجيل الحساب",
    s4P1:
      "لاستخدام الخدمة، يجب إنشاء حساب بعنوان بريد إلكتروني وكلمة مرور صالحَين. أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تتمّ من خلاله. وتوافق على إخطارنا فوراً بأي استخدام غير مصرّح به. ونحتفظ بحق تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط.",
    s5Title: "5. ربط حساب إنستغرام",
    s5P1Prefix:
      "تتطلّب الخدمة منك ربط حساب أو أكثر من حسابات إنستغرام التجارية أو حسابات المبدعين عبر تدفق OAuth الخاص بـ Meta. وبربط حسابك، فإنك تُصرّح لـ LightChats بالوصول إلى بيانات إنستغرام الخاصة بك والتفاعل معها وفق ما هو موضح في ",
    s5LinkText: "سياسة الخصوصية",
    s5P1Suffix:
      ". أنت مسؤول عن ضمان امتثال استخدامك لميزات الإدارة والأتمتة لدينا لشروط استخدام إنستغرام وقواعد مجتمعها.",
    s6Title: "6. الاستخدام المقبول",
    s6Intro: "توافق على عدم استخدام الخدمة في:",
    s6List: [
      "انتهاك أي قوانين أو لوائح سارية أو حقوق أطراف ثالثة",
      "انتهاك شروط استخدام إنستغرام أو قواعد مجتمعها",
      "ممارسة المضايقة أو التنمر أو السلوك التمييزي",
      "إرسال رسائل غير مرغوب فيها أو مزعجة أو محتوى مضلّل عبر أتمتة الرسائل المباشرة",
      "محاولة الوصول غير المصرّح به إلى الخدمة أو إلى حسابات المستخدمين الآخرين",
      "إجراء هندسة عكسية للخدمة أو فكّ ترجمتها أو تفكيكها",
      "استخدام الخدمة بطريقة قد تُلحق الضرر بوظائفها أو تُعطّلها أو تُضعفها",
      "إعادة بيع الخدمة أو الترخيص من الباطن أو استغلالها تجارياً دون إذن",
    ],
    s7Title: "7. الاشتراك والفوترة",
    s7P1:
      "تقدّم LightChats باقات اشتراك مجانية وأخرى مدفوعة. تُحرَّر فواتير الباقات المدفوعة شهرياً. وبالاشتراك في باقة مدفوعة، فإنك تُصرّح لنا بخصم المبلغ من وسيلة الدفع الخاصة بك بشكل متكرر حتى إلغائك. يمكنك إلغاء اشتراكك في أي وقت؛ ويسري الإلغاء في نهاية فترة الفوترة الحالية. ولا تُقدَّم استردادات عن فترات الفوترة الجزئية.",
    s7P2:
      "نحتفظ بحق تعديل الأسعار بإشعار مسبق مدته 30 يوماً. ويُعتبر استمرار الاستخدام بعد تغيير السعر قبولاً للأسعار الجديدة.",
    s8Title: "8. إخلاء مسؤولية إدارة المحتوى",
    s8P1:
      "تعمل أدوات الإدارة في LightChats وفقاً لفلاتر الكلمات المفتاحية والقواعد التي تقوم بتكوينها. ولا نضمن اكتشاف كل المحتوى غير المرغوب فيه ولا أن المحتوى المشروع لن يُعلَّم خطأً. وأنت وحدك مسؤول عن إعداد قواعد الإدارة ومراجعة إجراءاتها. ولا تتحمّل Lightchats LLC أي مسؤولية عن أي محتوى يُحذف أو لا يُحذف من حسابات إنستغرام الخاصة بك.",
    s9Title: "9. الملكية الفكرية",
    s9P1:
      "تعود ملكية الخدمة، بما في ذلك تصميمها ورموزها وميزاتها ورسوماتها ووثائقها، إلى Lightchats LLC، وهي محميّة بموجب قوانين الملكية الفكرية. ويُمنح لك ترخيص محدود وغير حصري وغير قابل للتحويل لاستخدام الخدمة وفقاً لهذه الشروط. وتحتفظ بملكية جميع المحتويات في حسابات إنستغرام الخاصة بك.",
    s10Title: "10. توفّر الخدمة",
    s10P1:
      "نسعى للحفاظ على توفّر مرتفع للخدمة، غير أننا لا نضمن تشغيلاً دون انقطاع أو خالياً من الأخطاء. فالخدمة تعتمد على واجهات تطبيقات تابعة لأطراف ثالثة (بما فيها Instagram Graph API) التي قد تتعرّض لانقطاعات أو تغييرات خارج سيطرتنا. وقد نُجري عمليات صيانة أو تحديثات أو تعديلات تؤثر مؤقتاً في توفّرها. وسنبذل جهوداً معقولة لإعلام المستخدمين بفترات التوقف المخطط لها.",
    s11Title: "11. تحديد المسؤولية",
    s11P1:
      "إلى أقصى حد يسمح به القانون، لن تتحمّل LightChats ومسؤولوها ومديروها وموظفوها ووكلاؤها المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك خسارة الأرباح أو البيانات أو الفرص التجارية أو السمعة، الناتجة عن استخدامك للخدمة أو عجزك عن استخدامها.",
    s11P2:
      "لا تتجاوز مسؤوليتنا الإجمالية عن أي مطالبات ناشئة عن هذه الشروط أو الخدمة المبلغ الذي دفعته لنا خلال الـ 12 شهراً السابقة للمطالبة.",
    s12Title: "12. إخلاء الضمانات",
    s12P1:
      "تُقدَّم الخدمة «كما هي» و«وفق توفّرها» دون أي ضمانات من أي نوع، صريحة كانت أم ضمنية، بما في ذلك على سبيل المثال لا الحصر الضمانات الضمنية للقابلية للتسويق والملاءمة لغرض معيّن وعدم الانتهاك. ولا نضمن أن تستوفي الخدمة متطلباتك أو أن تكون متوافقة مع جميع ميزات إنستغرام أو تحديثاته.",
    s13Title: "13. التعويض",
    s13P1:
      "توافق على تعويض LightChats والشركات التابعة لها وإبراء ذمتها من أي مطالبات أو أضرار أو خسائر أو التزامات أو تكاليف ونفقات (بما في ذلك الأتعاب القانونية) ناتجة عن استخدامك للخدمة، أو انتهاكك لهذه الشروط، أو انتهاكك لأي حقوق لأطراف ثالثة.",
    s14Title: "14. الإنهاء",
    s14P1:
      "يحقّ لنا تعليق وصولك إلى الخدمة أو إنهاؤه في أي وقت، بسبب أو بدون سبب، وبإشعار أو بدونه. عند الإنهاء، يتوقّف حقّك في استخدام الخدمة فوراً. ويمكنك إنهاء حسابك في أي وقت بحذفه من إعدادات الخدمة. وتظلّ سارية المفعول الأقسام التي يقتضي طابعها الاستمرار بعد الإنهاء (بما في ذلك تحديد المسؤولية وإخلاء الضمانات والتعويض).",
    s15Title: "15. التعديلات على الشروط",
    s15P1:
      "نحتفظ بحق تعديل هذه الشروط في أي وقت. وسيتمّ إبلاغ التعديلات الجوهرية عبر البريد الإلكتروني أو من خلال الخدمة. ويُعدّ استمرارك في استخدام الخدمة بعد سريان التعديلات قبولاً للشروط المعدّلة. وإذا لم توافق، فيجب عليك التوقف عن استخدام الخدمة وحذف حسابك.",
    s16Title: "16. القانون الحاكم",
    s16P1:
      "تخضع هذه الشروط لقوانين ولاية وايومنغ بالولايات المتحدة الأمريكية وتُفسَّر وفقاً لها، دون الإشارة إلى قواعد تنازع القوانين. وتُحلّ أي نزاعات ناشئة عن هذه الشروط أو الخدمة عبر التحكيم الملزم أو أمام المحاكم الواقعة في مقاطعة لارامي بولاية وايومنغ.",
    s17Title: "17. التواصل",
    s17P1Prefix: "لأي استفسارات حول هذه الشروط، تواصل معنا عبر ",
    s17P1Suffix: " أو بالبريد على العنوان التالي:",
  },
};
