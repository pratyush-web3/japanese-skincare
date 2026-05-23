/**
 * Site-wide contact & business details.
 * Update values here — they apply across the entire website.
 */
export const site = {
  contact: {
    email: "hello@yubi-skincare.jp",
    address: "京都府京都市左京区",
    hours: "平日 10:00 — 17:00（土日祝休）",
  },

  company: {
    locationShort: "京都府京都市",
    madeIn: "日本製",
    footerLine: "京都府京都市 — 日本製",
  },

  legal: {
    lastUpdated: "2025年1月1日",
  },

  social: {
    instagram: "https://www.instagram.com/",
  },
} as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
] as const;
