export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  heroImage: string;
  inlineImages: string[];
  referenceUrl?: string;
  articleText: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "building-an-ai-toolkit-for-solo-founders",
    title: "Building an AI toolkit for solo founders",
    description:
      "A practical stack of AI tools that helps solo builders move from idea to shipped product without a team.",
    pubDate: "2026-05-16",
    author: "Fozeus Team",
    category: "AI",
    tags: ["AI", "Tools", "Solo Founders"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Solo founders do not need a 20-person team to build something credible. They need a tight stack of AI tools that handles research, copy, design, code, and deployment without adding management overhead. The right toolkit replaces meetings with prompts and turns one operator into a product studio.</p>
      <p>At Fozeus, we test every tool before it enters the stack. The current lineup includes large language models for reasoning and drafting, image generators for brand assets, voice models for quick content, and no-code deployment platforms for shipping fast. Each tool must earn its place by saving time, not creating new rituals.</p>
      <p>The real advantage is not the tool itself. It is the workflow you build around it. Document your prompts, version your outputs, and review what worked. Over time, the stack becomes a competitive edge that scales with you.</p>
    `
  },
  {
    slug: "crypto-wallets-and-digital-identity",
    title: "Crypto wallets and digital identity",
    description:
      "How on-chain wallets are becoming the foundation of personal digital identity and reputation.",
    pubDate: "2026-05-15",
    author: "Fozeus Team",
    category: "Crypto",
    tags: ["Crypto", "Wallets", "Identity"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>The wallet is no longer just a place to store tokens. It is becoming a passport for the internet. Every transaction, attestation, and credential you collect on-chain adds to a verifiable reputation layer that follows you across platforms and protocols.</p>
      <p>This shift matters for personal brands and builders. A well-curated on-chain identity can unlock access, prove contribution, and replace traditional resumes. The challenge is curation: knowing what to sign, what to mint, and what to leave behind.</p>
      <p>Fozeus experiments with wallet-first identity design. We treat the wallet as a public portfolio and design interactions that strengthen reputation without sacrificing privacy. The future of digital identity is on-chain, and the wallet is where it starts.</p>
    `
  },
  {
    slug: "the-tech-lifestyle-minimalist-stack",
    title: "The tech lifestyle minimalist stack",
    description:
      "Why fewer, better tools lead to clearer thinking and faster output in a noisy digital world.",
    pubDate: "2026-05-14",
    author: "Fozeus Team",
    category: "Lifestyle",
    tags: ["Minimalism", "Productivity", "Tech"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>More tools do not mean more output. In practice, every new app adds decision fatigue, sync complexity, and subscription noise. The best builders we know run surprisingly minimal setups. One editor, one notes app, one deployment platform, and a handful of AI helpers.</p>
      <p>The minimalist stack is not about deprivation. It is about clarity. When you know exactly where your code, notes, and tasks live, you spend less time navigating and more time creating. The constraint forces intentionality.</p>
      <p>Fozeus is built on this philosophy. We evaluate every tool by whether it removes work or adds it. If a tool requires more setup than the problem it solves, it does not make the cut. The result is a lean, fast environment where ideas turn into products without bureaucratic drag.</p>
    `
  }
];
