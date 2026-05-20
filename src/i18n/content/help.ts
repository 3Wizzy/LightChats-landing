import type { Lang } from "../LanguageContext";

interface Article {
  title: string;
  summary: string;
}

interface Section {
  title: string;
  desc: string;
  articles: Article[];
}

interface HelpContent {
  eyebrow: string;
  heading: string;
  introPrefix: string;
  introLinkText: string;
  introSuffix: string;
  sections: Section[];
  stillNeedHelpTitle: string;
  stillNeedHelpDesc: string;
}

export const help: Record<Lang, HelpContent> = {
  en: {
    eyebrow: "Help Center",
    heading: "How can we help?",
    introPrefix:
      "Quick answers to the most common questions. For anything not covered, our ",
    introLinkText: "support team",
    introSuffix: " replies within 24 business hours.",
    sections: [
      {
        title: "Getting started",
        desc: "From signup to your first automated reply.",
        articles: [
          {
            title: "Sign up and verify your email",
            summary:
              "Create your account at app.lightchats.com/signup. You'll receive a verification email — confirm to unlock the 7-day onboarding bonus (+150 AI / +500 static replies).",
          },
          {
            title: "Connect your Instagram account",
            summary:
              'You need an Instagram Business or Creator account linked to a Facebook Page. From the dashboard, click "Connect Instagram" and approve the requested permissions on the Meta authorization screen. Personal accounts are not supported by Instagram\'s API.',
          },
          {
            title: "Build your first flow",
            summary:
              'Open the flow builder, pick a trigger (e.g., "Comment with keyword"), connect a "Send DM" action, and save. Comment the keyword on a recent post from another account to test it.',
          },
        ],
      },
      {
        title: "Triggers and actions",
        desc: "Every Instagram surface, every action you can automate.",
        articles: [
          {
            title: "Comment, DM, story-reply, live, and mention triggers",
            summary:
              "Each trigger has filters: keyword match, exact match, regex, contact-group match, or any-input. Multiple triggers can fire one shared flow.",
          },
          {
            title: "Send DM, send comment reply, tag contact",
            summary:
              'The most common actions. "Send DM" supports text, links, quick replies, and media attachments via the Instagram Graph API.',
          },
          {
            title: 'AI nodes: replies and "Ask for" actions',
            summary:
              "AI replies generate a one-shot response. AI conversations run multi-turn. \"Ask for\" actions collect specific data (email, phone, custom fields) mid-conversation.",
          },
        ],
      },
      {
        title: "Billing and plans",
        desc: "Plans, top-ups, and how charges work.",
        articles: [
          {
            title: "Free, Pro, and Agency plans",
            summary:
              "Free: 150 AI / 1,000 static. Pro ($9/mo): 750 AI / 3,000 static. Agency ($29/mo): 5,000 AI / 20,000 static. Annual billing saves up to 27%.",
          },
          {
            title: "Auto top-ups",
            summary:
              "When you hit your monthly limit on Pro/Agency, auto top-up adds capacity for $4.90 (Pro) or $14.90 (Agency). Default cap of 2 charges/month, configurable from 0–20.",
          },
          {
            title: "Cancel or downgrade",
            summary:
              "From Settings → Billing. Your plan stays active until the end of the paid period — no prorated refunds, no usage caps mid-period.",
          },
        ],
      },
      {
        title: "Affiliate program",
        desc: "Refer creators, earn recurring commission.",
        articles: [
          {
            title: "How commissions work",
            summary:
              "30% recurring on every payment for the first 12 months, 15% recurring after that, plus a $5 instant bounty on each referral's first paid invoice.",
          },
          {
            title: "Tracking and attribution",
            summary:
              "Referrals are tracked via `?ref=<your_code>` on the signup URL. Each user is attributed to one partner — first-touch wins.",
          },
          {
            title: "Withdrawals",
            summary:
              "Request a payout from your partner dashboard for any approved balance. Most partners batch monthly to minimize fees.",
          },
        ],
      },
    ],
    stillNeedHelpTitle: "Still need help?",
    stillNeedHelpDesc: "Email us — we respond within 24 business hours.",
  },
  fr: {
    eyebrow: "Centre d'aide",
    heading: "Comment pouvons-nous vous aider ?",
    introPrefix:
      "Des réponses rapides aux questions les plus courantes. Pour tout le reste, notre ",
    introLinkText: "équipe de support",
    introSuffix: " répond sous 24 heures ouvrées.",
    sections: [
      {
        title: "Démarrer",
        desc: "De l'inscription à votre première réponse automatisée.",
        articles: [
          {
            title: "Inscrivez-vous et vérifiez votre e-mail",
            summary:
              "Créez votre compte sur app.lightchats.com/signup. Vous recevrez un e-mail de vérification — confirmez-le pour débloquer le bonus d'intégration de 7 jours (+150 IA / +500 réponses statiques).",
          },
          {
            title: "Connectez votre compte Instagram",
            summary:
              "Vous avez besoin d'un compte Instagram Business ou Créateur lié à une Page Facebook. Depuis le tableau de bord, cliquez sur « Connecter Instagram » et approuvez les autorisations demandées sur l'écran d'autorisation Meta. Les comptes personnels ne sont pas pris en charge par l'API Instagram.",
          },
          {
            title: "Créez votre premier flux",
            summary:
              "Ouvrez le constructeur de flux, choisissez un déclencheur (ex. : « Commentaire avec mot-clé »), connectez une action « Envoyer un DM » et enregistrez. Pour tester, commentez le mot-clé sur une publication récente depuis un autre compte.",
          },
        ],
      },
      {
        title: "Déclencheurs et actions",
        desc: "Chaque surface d'Instagram, chaque action automatisable.",
        articles: [
          {
            title: "Déclencheurs : commentaire, DM, réponse Story, Live et mention",
            summary:
              "Chaque déclencheur dispose de filtres : correspondance par mot-clé, correspondance exacte, expression régulière, groupe de contacts, ou n'importe quelle entrée. Plusieurs déclencheurs peuvent activer un même flux.",
          },
          {
            title: "Envoyer un DM, répondre à un commentaire, étiqueter un contact",
            summary:
              "Les actions les plus courantes. « Envoyer un DM » prend en charge le texte, les liens, les réponses rapides et les pièces jointes via l'API Instagram Graph.",
          },
          {
            title: "Nœuds IA : réponses et actions « Demander »",
            summary:
              "Les réponses IA génèrent une réponse unique. Les conversations IA se déroulent sur plusieurs tours. Les actions « Demander » collectent des données spécifiques (e-mail, téléphone, champs personnalisés) en cours de conversation.",
          },
        ],
      },
      {
        title: "Facturation et formules",
        desc: "Formules, recharges et fonctionnement des prélèvements.",
        articles: [
          {
            title: "Formules Gratuit, Pro et Agence",
            summary:
              "Gratuit : 150 IA / 1 000 statiques. Pro (9 $/mois) : 750 IA / 3 000 statiques. Agence (29 $/mois) : 5 000 IA / 20 000 statiques. La facturation annuelle permet d'économiser jusqu'à 27 %.",
          },
          {
            title: "Recharges automatiques",
            summary:
              "Lorsque vous atteignez votre limite mensuelle sur Pro/Agence, la recharge auto ajoute de la capacité pour 4,90 $ (Pro) ou 14,90 $ (Agence). Plafond par défaut de 2 prélèvements/mois, configurable de 0 à 20.",
          },
          {
            title: "Annuler ou rétrograder",
            summary:
              "Depuis Paramètres → Facturation. Votre formule reste active jusqu'à la fin de la période payée — pas de remboursement au prorata, pas de plafond d'utilisation au milieu de la période.",
          },
        ],
      },
      {
        title: "Programme d'affiliation",
        desc: "Recommandez des créateurs et gagnez une commission récurrente.",
        articles: [
          {
            title: "Fonctionnement des commissions",
            summary:
              "30 % récurrents sur chaque paiement pendant les 12 premiers mois, 15 % récurrents ensuite, plus une prime instantanée de 5 $ sur la première facture payée de chaque filleul.",
          },
          {
            title: "Suivi et attribution",
            summary:
              "Les parrainages sont suivis via `?ref=<votre_code>` dans l'URL d'inscription. Chaque utilisateur est attribué à un seul partenaire — le premier contact l'emporte.",
          },
          {
            title: "Retraits",
            summary:
              "Demandez un paiement depuis votre tableau de bord partenaire pour tout solde approuvé. La plupart des partenaires regroupent les retraits mensuellement pour réduire les frais.",
          },
        ],
      },
    ],
    stillNeedHelpTitle: "Besoin d'aide supplémentaire ?",
    stillNeedHelpDesc:
      "Écrivez-nous — nous répondons sous 24 heures ouvrées.",
  },
  ar: {
    eyebrow: "مركز المساعدة",
    heading: "كيف يمكننا مساعدتك؟",
    introPrefix:
      "إجابات سريعة عن أكثر الأسئلة شيوعاً. ولأي أمر آخر، يردّ ",
    introLinkText: "فريق الدعم",
    introSuffix: " خلال 24 ساعة عمل.",
    sections: [
      {
        title: "البدء",
        desc: "من التسجيل إلى أول رد آلي.",
        articles: [
          {
            title: "سجّل وتحقّق من بريدك الإلكتروني",
            summary:
              "أنشئ حسابك على app.lightchats.com/signup. ستتلقى رسالة تأكيد بالبريد الإلكتروني — أكّدها لفتح مكافأة الانضمام لمدة 7 أيام (+150 رد ذكاء اصطناعي / +500 رد ثابت).",
          },
          {
            title: "اربط حساب إنستغرام",
            summary:
              "تحتاج إلى حساب إنستغرام تجاري أو حساب مبدع مرتبط بصفحة فيسبوك. من لوحة التحكم، اضغط «ربط إنستغرام» ووافق على الأذونات المطلوبة في شاشة تفويض Meta. الحسابات الشخصية غير مدعومة في واجهة إنستغرام.",
          },
          {
            title: "ابنِ تدفقك الأول",
            summary:
              "افتح منشئ التدفقات، اختر مُحفّزاً (مثل «تعليق بكلمة مفتاحية»)، اربطه بإجراء «إرسال رسالة مباشرة»، ثم احفظ. اختبر بكتابة الكلمة المفتاحية تعليقاً على منشور حديث من حساب آخر.",
          },
        ],
      },
      {
        title: "المحفّزات والإجراءات",
        desc: "كل سطح في إنستغرام، وكل إجراء يمكن أتمتته.",
        articles: [
          {
            title: "محفّزات: التعليق، الرسائل المباشرة، الردّ على القصة، البث المباشر، والإشارة",
            summary:
              "لكل محفّز فلاتر: مطابقة كلمة مفتاحية، مطابقة تامة، تعبير منتظم، مطابقة مجموعة جهات اتصال، أو أي إدخال. ويمكن لعدة محفّزات تشغيل تدفق واحد مشترك.",
          },
          {
            title: "إرسال رسالة مباشرة، الرد على تعليق، وسم جهة اتصال",
            summary:
              "أكثر الإجراءات شيوعاً. يدعم «إرسال رسالة مباشرة» النص والروابط والردود السريعة والمرفقات الإعلامية عبر Instagram Graph API.",
          },
          {
            title: "عُقد الذكاء الاصطناعي: الردود وإجراءات «اطلب»",
            summary:
              "تولّد ردود الذكاء الاصطناعي ردّاً واحداً. أما محادثات الذكاء الاصطناعي فتدور عبر عدة أدوار. وتجمع إجراءات «اطلب» بيانات محددة (البريد الإلكتروني، الهاتف، حقول مخصصة) في أثناء المحادثة.",
          },
        ],
      },
      {
        title: "الفوترة والباقات",
        desc: "الباقات وإعادة الشحن وكيفية احتساب الرسوم.",
        articles: [
          {
            title: "باقات مجاني وPro وAgency",
            summary:
              "مجاني: 150 ذكاء اصطناعي / 1,000 ثابت. Pro (9$/شهر): 750 ذكاء اصطناعي / 3,000 ثابت. Agency (29$/شهر): 5,000 ذكاء اصطناعي / 20,000 ثابت. تتيح الفوترة السنوية توفيراً يصل إلى 27%.",
          },
          {
            title: "إعادة الشحن التلقائية",
            summary:
              "عند بلوغ الحد الشهري في باقتَي Pro/Agency، تضيف إعادة الشحن التلقائية سعة إضافية مقابل 4.90$ (Pro) أو 14.90$ (Agency). الحدّ الافتراضي مرّتان شهرياً، قابل للتعديل من 0 إلى 20.",
          },
          {
            title: "الإلغاء أو خفض الباقة",
            summary:
              "من الإعدادات ← الفوترة. تظل باقتك نشطة حتى نهاية الفترة المدفوعة — لا استرداد نسبي، ولا حدود استخدام في منتصف الفترة.",
          },
        ],
      },
      {
        title: "برنامج الشركاء",
        desc: "رشّح المبدعين واربح عمولة متكرّرة.",
        articles: [
          {
            title: "كيف تعمل العمولات",
            summary:
              "30% متكرّرة على كل دفعة خلال الـ 12 شهراً الأولى، ثم 15% متكرّرة بعد ذلك، بالإضافة إلى مكافأة فورية بقيمة 5$ على أول فاتورة مدفوعة لكل عميل تُرشّحه.",
          },
          {
            title: "التتبّع والإسناد",
            summary:
              "تُتتبَّع الإحالات عبر `?ref=<your_code>` في رابط التسجيل. ويُنسب كل مستخدم إلى شريك واحد فقط — الأولوية للتسوية الأولى.",
          },
          {
            title: "عمليات السحب",
            summary:
              "اطلب صرف الأرباح من لوحة الشريك لأي رصيد معتمد. ويفضّل معظم الشركاء التجميع شهرياً لخفض الرسوم.",
          },
        ],
      },
    ],
    stillNeedHelpTitle: "ما زلت بحاجة إلى المساعدة؟",
    stillNeedHelpDesc:
      "راسلنا عبر البريد الإلكتروني — نردّ خلال 24 ساعة عمل.",
  },
};
