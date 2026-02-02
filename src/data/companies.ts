export interface Company {
  name: string;
  logo: string;
  role: string;
  description: string;
  link?: string;
  period?: string;
}

export const companies: Company[] = [
  {
    name: "Stout",
    logo: "/companies/stout.png",
    role: "Lead Data Engineer",
    period: "Apr 2025 - Present",
    description:
      "Built a scalable data extraction pipeline in Azure Data Factory that automated retrieval and parsing of 10-K filings from the SEC EDGAR database, increasing document processing efficiency by over 70% and saving the company over $70,000 in operational costs. Designed a normalized data model supporting 15+ investment entities and led architectural planning for high-volume document workflows.",
  },
  {
    name: "Oil Changers",
    logo: "/companies/oil-changers.png",
    role: "Data Engineer",
    period: "Oct 2024 - Present",
    description:
      "Engineered a scalable behavioral segmentation model leveraging SQL Server stored procedures. Designed and maintained multiple FACT tables for customer lifetime value (CLV) pipelines. Optimized critical data pipelines, resulting in a 40% improvement in data consistency and faster reporting.",
  },
  {
    name: "Hrvst",
    logo: "/companies/hrvst.png",
    role: "Data Engineer",
    period: "Jul 2024 - Present",
    description:
      "Built an end-to-end automated reporting pipeline using Power BI and SQL, integrating data from Zoho Books and a custom WhatsApp client. Eliminated a manual 7-day reporting workflow by replacing Excel with real-time dashboards, cutting report generation time to under 5 minutes.",
    link: "https://www.linkedin.com/company/aiponics/posts/?feedView=all",
  },
  {
    name: "ChitChat",
    logo: "/companies/chitchat.svg",
    role: "Senior Software Engineer",
    period: "Sept 2025 - Present",
    description:
      "Led backend development for ChitChat’s Family Managed Wallets, handling infrastructure, card assignment, spending limits, and KYC. Automated financial reporting to the central bank as the sole engineer of the reporting-service tool.",
    link: "https://chitchatchannel.com",
  },
  {
    name: "Union 54",
    logo: "/companies/union54.png",
    role: "Software Engineer",
    description:
      "Contributed to building the card issuing API wrapper that powered ChitChat and other fintech products. Helped streamline the integration process for early adopters in the YC ecosystem.",
  },
  {
    name: "YCS21",
    logo: "/companies/ycs21.png",
    role: "Alumni / Batch",
    description:
      "Participated in Y Combinator Summer 2021 batch. Collaborated with top-tier founders and engineers to refine product-market fit and scale rapid-growth technologies.",
  },
  {
    name: "The Zig Group",
    logo: "/companies/breeze.png", // Using Breeze as it's under Zig? Or maybe Shop and Smile? User said Breeze is under Zig. I'll use a generic icon or maybe I should have generated a Zig logo. I'll use the Breeze one for Breeze entry if I have one.
    role: "Software Engineering Consultant",
    period: "Jul 2024 - Aug 2025",
    description:
      "Expanded market reach for Aiponics Inc from B2B to B2C, generating $1 million in annual GMV through backend feature development and platform integration. Automated 90% of B2B ordering workflows, enabling the team to handle a larger client base. Deployed predictive analytics across Breeze Autocare's 200+ service locations, driving major efficiency gains. Led and mentored 6+ Data Engineering, Analytics, and AI interns, resulting in 4 return offers.",
    link: "https://www.thezig.io",
  },

  {
    name: "Shop & Smile",
    logo: "/companies/shop-and-smile.png",
    role: "Founding Software Engineer",
    period: "May 2023 - Aug 2024",
    description:
      "Built TypeScript serverless backend infrastructure supporting POS feature expansion. Contributed to scaling a distributed Point-of-Sale SaaS platform that enabled merchants to streamline daily operations.",
    link: "https://goshopandsmile.com",
  },
  {
    name: "Wango Delivery",
    logo: "/companies/wango.png",
    role: "Founding Software Engineer",
    period: "Feb 2021 - Dec 2023",
    description:
      "Led the development and deployment of three cross-platform React Native mobile applications. Enabled 10,000+ B2C orders in the first year and drove 25% month-over-month growth.",
    link: "https://bwangudelivery.com",
  },
  {
    name: "iSample",
    logo: "/companies/isample.png",
    role: "Software Engineer",
    period: "Jul 2020 - Feb 2021",
    description:
      "Modernized the commerce platform, replacing a fragile legacy system with a scalable API foundation and launching a cross-platform mobile app that significantly improved the shopping experience.",
  },
];
