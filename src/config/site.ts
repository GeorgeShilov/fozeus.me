export const site = {
  name: "Fozeus",
  domain: "fozeus.me",
  url: import.meta.env.SITE_URL || "https://fozeus.me",
  email: "hello@fozeus.me",
  description:
    "Fozeus is a personal tech innovation lab exploring AI tools, crypto experiments, and digital identity design.",
  launchContext: [
    "Build a sharp tech identity around AI experimentation, crypto tools, and digital-first product design.",
    "Turn emerging technology into practical workflows, experiments, and insights anyone can follow.",
    "Bridge personal branding, digital innovation, and on-chain identity into a single coherent presence."
  ]
};

export const navItems = [
  { label: "Command OS", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
