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
    slug: "nft-utility-beyond-the-hype",
    title: "NFT utility beyond the hype",
    description:
      "Why sustainable NFT projects focus on real utility — from GameFi assets to SocialFi reputation — rather than speculation alone.",
    pubDate: "2026-05-16",
    author: "Fozeus Team",
    category: "NFT",
    tags: ["NFT", "Utility", "GameFi", "SocialFi"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>The NFT market matured fast. Early cycles rewarded speculation and scarcity theater, but collectors and gamers now demand something different: utility. A token that sits in a wallet is a JPEG. A token that unlocks game levels, earns staking rewards, or proves reputation in a DAO is an asset with lasting value.</p>
      <p>At Fozeus, we design NFTs as functional primitives. Our collections tie into GameFi economies where items are playable across experiences, and into SocialFi layers where ownership signals contribution and unlocks governance rights. The metadata matters as much as the art.</p>
      <p>The projects that survive the next cycle will be the ones that built real utility from day one. Speculation can bootstrap attention, but only function builds retention.</p>
    `
  },
  {
    slug: "gamefi-and-the-future-of-play-to-own",
    title: "GameFi and the future of play-to-own",
    description:
      "How blockchain gaming is shifting from play-to-earn grind to sustainable play-to-own economies with real asset ownership.",
    pubDate: "2026-05-15",
    author: "Fozeus Team",
    category: "GameFi",
    tags: ["GameFi", "Blockchain", "Play-to-Own", "NFT"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Play-to-earn was a promise that burned too bright. Early GameFi projects optimized for token emissions rather than gameplay, creating unsustainable economies that collapsed as soon as growth slowed. The next wave is different: play-to-own.</p>
      <p>Play-to-own puts asset ownership at the center. Players truly own their characters, weapons, and land as NFTs. These assets persist across games, can be traded on open marketplaces, and accrue value based on skill and rarity rather than inflationary rewards.</p>
      <p>Fozeus builds GameFi experiences around this principle. We design economies where scarcity is real, crafting matters, and the best players are rewarded with assets that have lasting value. The goal is not a job disguised as a game — it is a game where ownership means something.</p>
    `
  },
  {
    slug: "socialfi-reputation-in-a-decentralized-world",
    title: "SocialFi: reputation in a decentralized world",
    description:
      "Why on-chain reputation and tokenized social graphs are the next frontier for Web3 community building.",
    pubDate: "2026-05-14",
    author: "Fozeus Team",
    category: "SocialFi",
    tags: ["SocialFi", "Web3", "Reputation", "DAO"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Web2 social platforms extract value from users and give nothing back. Your followers, content, and reputation are locked inside walled gardens. SocialFi changes the equation by making social graphs portable and reputation verifiable on-chain.</p>
      <p>On-chain reputation is built from provable actions: DAO contributions, NFT holdings, governance votes, and verified credentials. Instead of follower counts, SocialFi networks reward meaningful participation with tokens, access, and status that travels with you across platforms.</p>
      <p>Fozeus experiments with reputation primitives that bridge NFT ownership and community participation. We believe the future of social networking is decentralized, ownable, and built on transparent contribution rather than opaque algorithms.</p>
    `
  }
];
