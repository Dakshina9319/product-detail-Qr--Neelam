import { ProvenanceNode, LifecycleStage, SareeCreation, MacroDetail, GratitudeNote } from '../types';

export const PROVENANCE_NODES: ProvenanceNode[] = [
  {
    id: 1,
    label: "01",
    name: "Rajapalayam Farm & Ginning",
    coordinates: "09°27′N 77°33′E",
    subtext: "09°27′N · Ginned 80s",
    description: "Certified high-twist 80s cotton spun without chemical defoliants.",
    colorScheme: 'indigo',
    lat: 9.45,
    lng: 77.55,
    svgPos: { x: 310, y: 368 }
  },
  {
    id: 2,
    label: "02",
    name: "Erode Cluster Dyeworks",
    coordinates: "11°20′N 77°43′E",
    subtext: "11°20′N · Azo-Free Dye",
    description: "Azo-free vat dyeing + organic kanji (rice gruel) sizing.",
    colorScheme: 'teal',
    lat: 11.34,
    lng: 77.72,
    svgPos: { x: 410, y: 152 }
  },
  {
    id: 3,
    label: "03",
    name: "Murthy S.'s Pit Loom #184",
    coordinates: "10°37′N 77°04′E",
    subtext: "Negamam Society · 10°37′N",
    description: "32 hours of foot-treadle weaving and zari embossed butti crafting.",
    colorScheme: 'indigo',
    lat: 10.62,
    lng: 77.07,
    svgPos: { x: 251, y: 244 }
  },
  {
    id: 4,
    label: "04",
    name: "GI Registry Inspection",
    coordinates: "10°39′N 77°00′E",
    subtext: "Pollachi Co-op · GI-482 Registry",
    description: "Thread count verified at 80 EPI. Weighment logged at 540g.",
    colorScheme: 'ochre',
    lat: 10.65,
    lng: 77.01,
    svgPos: { x: 198, y: 276 }
  },
  {
    id: 5,
    label: "05",
    name: "Direct QR Token Sealed",
    coordinates: "Customer Dispatch Hub",
    subtext: "Customer QR Pack · Tamper-proof Seal",
    description: "Society sealed envelope with signed artisan parchment token.",
    colorScheme: 'green',
    lat: 10.58,
    lng: 77.30,
    svgPos: { x: 395, y: 313 }
  }
];

export const MACRO_DETAILS: MacroDetail[] = [
  {
    id: "warp",
    title: "80s Combed Warp",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNWKCGWnFilgo5JKcK3-bVM-piEbBpNym7IpKiWuEJYywVIy8m6NSseImXbLsg5ACfJ69yPLbuJk2bTTiLNG__LQZM90sD-NvxEq7jrpozFSbxDHYxXKXxwueX4nfXV9MI_RHxU8QmzZycpc51Kxv6j-QvDjPwRq_MHHk3RYxFRXx8pDRYuWb826peFRwUkDfF3LO5j_hNgrHJvwx9wM-0NsZQzxc6N6E-EXD5RrLdNLpb7PKDpIp8Fw",
    alt: "Macro close-up texture of 80s combed cotton warp",
    fullImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNWKCGWnFilgo5JKcK3-bVM-piEbBpNym7IpKiWuEJYywVIy8m6NSseImXbLsg5ACfJ69yPLbuJk2bTTiLNG__LQZM90sD-NvxEq7jrpozFSbxDHYxXKXxwueX4nfXV9MI_RHxU8QmzZycpc51Kxv6j-QvDjPwRq_MHHk3RYxFRXx8pDRYuWb826peFRwUkDfF3LO5j_hNgrHJvwx9wM-0NsZQzxc6N6E-EXD5RrLdNLpb7PKDpIp8Fw",
    caption: "Microscopic view of 80s high-twist combed cotton warp threads showing zero synthetic blending, uniform twist angle, and natural fiber bloom."
  },
  {
    id: "zari",
    title: "Copper Zari Border",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFDOk9aPy5SE1YtfR5pX-Hd3SWrlvTOO1YA5mper986V6vmax3o0CuvANJeqzJOWOcHGUcgmR_wNAqM0SJFm8LqgR7hy_96-CTJIR77R27DUV0P1ggkOrgFyYJAdxAki-ANHGC8SCYJNk6FyNXezBYRULKCDqXT45RdnWa2z6EMkf78IzV1qFtB2EEggee7B3ui2rX-FJ_fYxCqRpHKz4d33jgQhuEw2FReQHyc5jYGY6TBh820GQiNQ",
    alt: "Macro photograph of copper zari border detail",
    fullImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFDOk9aPy5SE1YtfR5pX-Hd3SWrlvTOO1YA5mper986V6vmax3o0CuvANJeqzJOWOcHGUcgmR_wNAqM0SJFm8LqgR7hy_96-CTJIR77R27DUV0P1ggkOrgFyYJAdxAki-ANHGC8SCYJNk6FyNXezBYRULKCDqXT45RdnWa2z6EMkf78IzV1qFtB2EEggee7B3ui2rX-FJ_fYxCqRpHKz4d33jgQhuEw2FReQHyc5jYGY6TBh820GQiNQ",
    caption: "Intricate metallic copper and muted gold zari interlaced tightly along the selvage, producing soft luster that does not scratch sensitive skin."
  },
  {
    id: "drape",
    title: "Breathable Drape",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXAVaRCXKbVNDKWdXjW6CRtl5r7H5vdoRZSwocOiB24Wy9udg5AtZQomSpHRfdUk8C7BxrUB1G9sTztIU452lAVIBl1ubVMuRLR0fEf6NTcWqTD-ad73f7yeVyNsSwHepolhoXAwSIodKJOapJrCPAsvv4agAB-BXVhTS4slxkr8RSVXASJ787Kw21A37rn6tR3QCUoCw66XNgywGNL2ZFVf7QYPjM8Wgf4LjQILRnPhAGYK2Em9udRg",
    alt: "Hands gently unfolding authentic handloom cotton saree",
    fullImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXAVaRCXKbVNDKWdXjW6CRtl5r7H5vdoRZSwocOiB24Wy9udg5AtZQomSpHRfdUk8C7BxrUB1G9sTztIU452lAVIBl1ubVMuRLR0fEf6NTcWqTD-ad73f7yeVyNsSwHepolhoXAwSIodKJOapJrCPAsvv4agAB-BXVhTS4slxkr8RSVXASJ787Kw21A37rn6tR3QCUoCw66XNgywGNL2ZFVf7QYPjM8Wgf4LjQILRnPhAGYK2Em9udRg",
    caption: "The open weave of genuine Negamam handloom allows air circulation, making it exceptionally featherlight and comfortable across tropical climates."
  }
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: 1,
    tag: "ORIGIN: RAJAPALAYAM GINNING MILLS",
    title: "Zero-Pesticide Raw Spools",
    description: "100% GOTS-certified raw cotton spools; bio-mechanical ginning with zero synthetic defoliants to preserve tensile fiber elasticity.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkndUa2AA8qjM2g4ZzRD4Ibgh4BA9p6BH0NtsfoUmMIvQ0mUNJnmoB-ThHO8vY_yW62abkaU-R6e5LyCPn0f3dNxuKjY7yGyRX0XOZFMSi4NZuH6PmXo8m_UNRONe1OsUF8MtMsIXV8imx7TebWq8RLm6uyDStfEChF1tOK-7A0CsDNe0Vw_8qFkUXVts7zeUq7hiyVNqERSLO6RxRattrB7rbhRzKdeCMKCHOASSOj7DcPqganHUbJg",
    alt: "Raw combed cotton yarn spools"
  },
  {
    id: 2,
    tag: "FACILITY: ERODE ECO-DYEWORKS",
    title: "Azo-Free Herbal Infusion",
    description: "Infused with non-toxic azo-free vat dyes and natural plant mordants; closed-loop solar water heating with 98% water recovery.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACANKi5S0S3NiEtmvS0CJOnv8xuuSQe2s0BCfHqQ05O-z87bj1luUT6bT8tx_Hmh-wva0fWKpUASrQDoCZ_qn58VImwCJgyx_T4rIE8v-BttfY1xI967YabS47Yu0QSvqkbNiMy_vtCDFpb7010CDhaLdjgi-XAX3ByRQBfXypiHcAmLWwgzIIGI3yhleQ1t6pfsKNjJLWrQ2_tTBnCP-aJR98Td3t1YTt8oj4icApya0h2ViRIGhjNg",
    alt: "Street warp sizing under Tamil Nadu sun"
  },
  {
    id: 3,
    tag: "WORKSHOP: POLLACHI COMMUNITY YARD",
    title: "Pure Rice Congee Sizing",
    description: "Treated with traditional fermented rice gruel & cold-pressed sesame oil; 100% biodegradable warp strengthening with zero chemical PVA/acrylates.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM2oHZHp64D0YTggVqoalo6PUAzYOnn9TIOZz14ndu4SqrJKe3S2v9YlkF2XCHK0eM4bDCynwm-4JIZKBL_JVtAhJnhs37ChV2XElmWvaH0PeZ-2Cx31UfcSLpao4qM14bByyQe9tWm3aMQ2DKZcxv0BzRYFahY42tyt8JxpMHw1mibRRRC4EDYt3zQEM4HO-2NOTzXlrlOkASb117BOSQ76DMCBWkrP5miEpE8SOzEsZFgf8Z4JzPpg",
    alt: "Threading individual threads into loom reed comb"
  },
  {
    id: 4,
    tag: "LOOM ATELIER: NEGAMAM PIT-LOOM #184",
    title: "Manual Reed Alignment",
    description: "4,800 ends hand-dressed through bamboo reed combs; zero electrical energy consumption, zero-carbon footprint artisanal tensioning.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyJcPTTJ_Gia52-Z_PPI6o_HD8aUTAxompbmb-RBbQcrHutju8cRTQ2H71Be1zHh_kFcBXWMI8u9dYrnkxvoFqUihLcr4WVAOb7H9mGs78qGwx_kRHgPpvyfdpvZEDdu3kkWcfkceM5w-VoH5WeYZVe19U_lpr1w1lqbXrSgyb0XcK8Q7TGhh27pCMZV6XwGGGmEgHlxcbmvzTZXGSrW9WVU6l2TafMT12B-AGdXQEZQxRtE_EQlGXyA",
    alt: "Wooden pit loom dressing and tensioning"
  },
  {
    id: 5,
    tag: "WEAVER: MURTHY S. FLY-SHUTTLE",
    title: "Physical Handloom Weave",
    description: "32 hours of physical fly-shuttle foot-treadle interweaving; breathable open-pore cotton structure that naturally softens with age.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADimxvUBdWOQjEWtGJ8SDPQ59fRdc0RkAr0l0YAtArbPgS5o-T251i1Dbm8b9sBKSPCvYj-ZTv9XeTMNSBnWYEPZysV-uc2GZpsdqBarDWxxY0eAfiUwuItQM1Pl0wiaJJ0f_Y84xWhx28nhaJCnTxOxg_mlpjI3wdxAxm1PEfFfQQCp4VKjSkelaJyucaxYYs3KIeZ79KY2FkKWV9EvPZbKtOW3GqQsGvH9vJTuAP9QBCzdyYFt2MkQ",
    alt: "Murthy weaving on the pit loom",
    highlight: true
  },
  {
    id: 6,
    tag: "AUDIT: CO-OP LEDGER & GI LAB",
    title: "Steam Sanitized & QR Sealed",
    description: "Purified with natural eucalyptus herbal steam; 0% formaldehyde or harsh finishing resins. Hand-stamped GI seal & tamper-proof Neelam QR.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxmcjzFOG-gLU8Tw8wb2vv-BbiLMME_1NLqNz_y2AFOBJKupuZzhWdxYx0lVzTevixikfazVgVnJb19p61hCRzNgeP2cNiamZosklpuYetegC6bA_MIDFi2y7_yxLnKAt7zAQcKqeUhL78snsGUcv4sAqNrCIJP1TfHdOlEAq5qpQ-nBpxqO6yB3O8iAM0sDSZpemrXKcODtZ858dNlnVJNmTVae_Ffqr52Uc4w9WUKoACKG3HzCNboA",
    alt: "GI stamped finished saree"
  }
];

export const OTHER_CREATIONS: SareeCreation[] = [
  {
    id: "pista-green",
    title: "Negamam Cotton Pista Green",
    tag: "Lightweight 80s",
    loomInfo: "Murthy S. Loom #184",
    description: "Subtle embossed leaf motifs with slate grey contrast borders.",
    price: 1860,
    priceFormatted: "₹ 1,860",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4lYJyahz_YPI09DU08trY4hsOIPS6m0w5Z3FfRg0eIrlKwbGBI9ZEZPaNRYXwKu129LEqwpLMcFY7RPoMDwZqA3Xb5QBVhFrlZxCU4FB9Flx0rQgZtHiYQr5YH8SG98FOgLizQBUIaOrT2bocREWF3f8dsaLgUs4ibZT1UZ9TUBlflanJLc0B9i3g-dNhJIS7BVIEIm_9oJyauW2y6SpfJXcQYRRKDVBTtyUh46RjRS8jaJcnmWvWnQ",
    alt: "Negamam Cotton Pista Green Saree"
  },
  {
    id: "wine-green",
    title: "Negamam Cotton Wine & Green",
    tag: "Festive Loom",
    loomInfo: "Murthy S. Loom #184",
    description: "Dual emerald border with gold zari feather butti accents.",
    price: 2150,
    priceFormatted: "₹ 2,150",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvrB-Eah2H19OR8LpSU2KPzG0E5yC9v3UhpNLMME9-XAm9QaP3tY9wzBTzRpxZupe_3qZ5Z_irMYqjVoZLJUj5lVg4R48bIj66IXiK61dZeXzni6oTNI1xgs_2tUhDFX6Py5RvWGTBysK2Tt3zbSVLycHgdfDp9hqQ1WNf5BI6vlVV44jH-dZvcSYNka6a1t7L8Md_W_SwKy3oW5UqyZET6yFaKvNn4_um5yunb3Cg1_q5-S9J1DRx9g",
    alt: "Negamam Cotton Wine and Green Saree"
  },
  {
    id: "pista-embossed",
    title: "Pista Green Thread Embossed",
    tag: "Summer Weave",
    loomInfo: "Murthy S. Loom #184",
    description: "Lightweight breathability with micro selvedge finish.",
    price: 2020,
    priceFormatted: "₹ 2,020",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQh_XedIhM5uotpqfrVaXe5fOXegnvEHYRREYhHOUfPEs_D53ZeA974kEv22XK8quAQ2OGRfjMR_Nw41lpbeGaLbJHQRHBc2hNEjzlbJ6tvytbjEdCcRC50NSCvze9o8UIJev6tXJNTLyQdZzyZHF56elUdVYNVifmVXYzS5TFu7YGk35u4GUUg93MqGFEO-C3u-rD3--58Ier7hEmIsFGuF_nbEqmG5M-Pq7mTWHUVbPIhTMh9qK3vA",
    alt: "Pista Green Thread Embossed Variant"
  },
  {
    id: "peach",
    title: "Negamam Cotton Peach",
    tag: "Copper Buttas",
    loomInfo: "Murthy S. Loom #184",
    description: "Warm copper rust border with matching running blouse.",
    price: 2020,
    priceFormatted: "₹ 2,020",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDt0X3ORXCTxiASVaW1sckpA3K_AsWn_Yj9OjK0ZHpphpXrlCMB7XTF2qWR5pcYlPA30m2wZC98TYyeyY38aqa2xJ3wfRhGO4svh-rjzp6rpY3GSeAOelL4C68ceQV7pydHWy6-s58ns6Z9gIdGttZD9os05qOMvtZl8WnKakmbPtfAwL6VmNcUL2PIzxie2elgMbTSaIEro8jNS6iVAdlnCj7rx8_wxnRzPdMk1mhc07Aq2Zc9Nf_xA",
    alt: "Peach Thread Embossed Saree"
  }
];

export const INITIAL_GRATITUDE_NOTES: GratitudeNote[] = [
  {
    id: "note-1",
    author: "Ananya R.",
    location: "Bengaluru",
    text: "The drape of this saree is so cooling in summer. Knowing Murthy-ji received 85% directly makes wearing it an honor.",
    timestamp: "Yesterday",
    sareeRef: "#NGM1024"
  },
  {
    id: "note-2",
    author: "Dr. K. Swaminathan",
    location: "Chennai",
    text: "Received the GI parchment and the fabric feel is nostalgic and unmatched. Thank you for preserving this craft.",
    timestamp: "3 days ago",
    sareeRef: "#NGM0988"
  }
];
