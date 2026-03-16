export const landingLinks = {
  earlyAccess: "/contact",
  whitepaper: "https://dash.cipherscore.xyz/docs",
  documentation: "https://dash.cipherscore.xyz/docs",
  x: "https://x.com/cipherscore",
  github: "https://github.com/cipherscore",
  discord: "https://discord.gg/cipherscore",
} as const

export const heroContent = {
  title: "The Eligibility Layer for Solana",
  subtitle:
    "Privacy-preserving reputation proofs that let DAOs run fair token launches, airdrops, and governance - without exposing user identity or data.",
  chips: [
    "Arcium MPC powered",
    "Cross-wallet attestations",
    "DAO-ready rule engine",
  ],
} as const

export const stats = [
  {
    value: "600+",
    label: "Token launches on Solana monthly",
  },
  {
    value: "$3.37B+",
    label: "Lost to Web3 fraud and sybil attacks in 2025",
  },
  {
    value: "3",
    label: "Pilot DAOs in active integration",
  },
  {
    value: "100+",
    label: "Attestations target at mainnet",
  },
] as const

export const features = [
  {
    title: "Custom Rule Builder",
    description:
      "DAOs define exactly who should get in. Anti-whale caps, activity thresholds, social requirements, and tiered allocations stay configurable without writing a line of code.",
  },
  {
    title: "Dynamic Reputation Engine",
    description:
      "Continuously evaluates on-chain activity, social signals, and credentials. Detects sybil clusters and suspicious wallet patterns in real time as launch conditions evolve.",
  },
  {
    title: "MPC-Powered Privacy",
    description:
      "Built on Arcium's multi-party computation. User data is encrypted and split across multiple nodes during verification so no single party ever sees raw user data.",
  },
  {
    title: "Dead Simple Integration",
    description:
      "REST API, a TypeScript SDK, and a Solana smart contract verifier let teams drop CipherScore into token launches or airdrops in under 10 lines of code.",
  },
  {
    title: "Institutional Ready",
    description:
      "Private equity, hedge funds, and family offices can prove accredited investor status without resubmitting financial documents to every project they join.",
  },
  {
    title: "Cross-Wallet Identity",
    description:
      "Users aggregate reputation across multiple wallets and chains into one private profile so a single address never defines the full story.",
  },
] as const

export const steps = [
  {
    title: "Connect Your Signals",
    description:
      "Users connect wallets across Solana, Ethereum, and EVM, verify socials like X, Discord, and GitHub, and optionally add credentials such as employment or accreditation. Everything stays encrypted and user-controlled.",
  },
  {
    title: "DAOs Define Their Rules",
    description:
      "Launch teams configure eligibility in the DAO dashboard with anti-whale caps, minimum activity thresholds, social verification requirements, and tiered allocations. No code required.",
  },
  {
    title: "Private Verification via Arcium MPC",
    description:
      "When a user requests an attestation, encrypted data is computed across Arcium MPC nodes. No node sees raw inputs. The DAO only receives one result: eligible or not eligible.",
  },
] as const

export const useCases = [
  {
    title: "Token Launches",
    description: "Fair allocations for ICOs with whale caps and sybil filters enforced on-chain automatically.",
  },
  {
    title: "Airdrops",
    description: "Stop bot farms before they drain your budget and reward wallets with real, verified reputation.",
  },
  {
    title: "DAO Governance",
    description: "One human, one vote with private proof-of-personhood instead of public identity exposure.",
  },
  {
    title: "Gated Communities",
    description: "Gate Discord servers, forums, and exclusive access by verifiable reputation instead of token balances alone.",
  },
  {
    title: "Institutional Access",
    description: "Enable accredited investor proofs for compliant, private participation in token sales.",
  },
] as const

export const comparisonRows = [
  {
    label: "Privacy",
    values: ["No", "Public", "No", "MPC"],
  },
  {
    label: "Multi-signal",
    values: ["Partial", "Partial", "No", "Full"],
  },
  {
    label: "DAO-native",
    values: ["No", "Partial", "No", "Built for DAOs"],
  },
  {
    label: "Anti-sybil",
    values: ["Yes", "Partial", "No", "Yes"],
  },
  {
    label: "Institutional",
    values: ["Partial", "No", "No", "Yes"],
  },
] as const

export const comparisonColumns = ["KYC (Blockpass)", "Gitcoin Passport", "Manual Whitelists", "CipherScore"] as const

export const poweredBy = [
  {
    name: "Solana",
    description: "Launch and governance ecosystem where fast, fair attestations matter most.",
  },
  {
    name: "Arcium",
    description: "MPC computation layer that verifies encrypted eligibility signals without exposing raw data.",
  },
] as const

export const developerSnippet = `// Request attestation for a user
const attestation = await cipherScore.requestAttestation(ruleSetId, wallet)

// Verify on-chain in your launch contract
const eligible = await contract.verify(attestation)
if (eligible) whitelist(wallet)`

export const testimonials = [
  {
    quote:
      "If I could connect all my wallets and credentials once, then prove I'm eligible for an ICO without revealing my identity - I'd love that.",
    author: "Michael Rinko",
    role: "Early Advisor",
  },
  {
    quote: "Pilot DAO testimonial placeholder for the first live launch partner.",
    author: "Pilot DAO",
    role: "Coming soon",
  },
] as const
