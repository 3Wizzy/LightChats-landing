import type { Lang } from "../LanguageContext";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogContent {
  eyebrow: string;
  h1: string;
  intro: string;
  posts: BlogPost[];
  moreTitle: string;
  moreDesc: string;
}

export const blog: Record<Lang, BlogContent> = {
  en: {
    eyebrow: "Blog",
    h1: "Notes from the LightChats team",
    intro:
      "Product updates, deep dives on chat automation, and lessons we're picking up while building this thing.",
    posts: [
      {
        slug: "announcing-lightchats",
        title:
          "Announcing LightChats — Instagram chat automation, done right",
        excerpt:
          "Why we're building yet another Instagram automation tool, what makes it different, and what's on the roadmap for 2026.",
        date: "2026-04-26",
        readTime: "5 min read",
        category: "Product",
      },
    ],
    moreTitle: "More on the way",
    moreDesc:
      "Posts on Instagram API best practices, AI in DMs without sounding like a robot, and creator playbooks ship over the next weeks.",
  },
  fr: {
    eyebrow: "Blog",
    h1: "Notes de l'équipe LightChats",
    intro:
      "Mises à jour produit, plongées approfondies dans l'automatisation des chats, et leçons que nous tirons en construisant cet outil.",
    posts: [
      {
        slug: "announcing-lightchats",
        title:
          "Annonce de LightChats — l'automatisation des chats Instagram, bien faite",
        excerpt:
          "Pourquoi nous lançons encore un outil d'automatisation Instagram, ce qui le distingue et ce qui est prévu pour 2026.",
        date: "2026-04-26",
        readTime: "5 min de lecture",
        category: "Produit",
      },
    ],
    moreTitle: "D'autres articles arrivent",
    moreDesc:
      "Des articles sur les bonnes pratiques de l'API Instagram, l'IA dans les DM sans avoir l'air d'un robot, et des playbooks pour créateurs paraîtront dans les semaines à venir.",
  },
  ar: {
    eyebrow: "المدوّنة",
    h1: "ملاحظات من فريق LightChats",
    intro:
      "تحديثات المنتج، وتحليلات معمّقة حول أتمتة المحادثات، ودروس نلتقطها أثناء بناء هذه المنصة.",
    posts: [
      {
        slug: "announcing-lightchats",
        title:
          "إطلاق LightChats — أتمتة محادثات إنستغرام كما ينبغي",
        excerpt:
          "لماذا نطلق أداة جديدة لأتمتة إنستغرام، وما الذي يميّزها، وما هو المخطّط لعام 2026.",
        date: "2026-04-26",
        readTime: "قراءة 5 دقائق",
        category: "المنتج",
      },
    ],
    moreTitle: "المزيد قادم قريباً",
    moreDesc:
      "مقالات حول أفضل ممارسات واجهة إنستغرام، واستخدام الذكاء الاصطناعي في الرسائل دون أن يبدو الرد آلياً، ودلائل عملية للمبدعين، ستصدر خلال الأسابيع القادمة.",
  },
};
