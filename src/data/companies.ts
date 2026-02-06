export interface Company {
  name: string;
  logo: string;
  role: string;
  description: string;
  link?: string;
  period?: string;
  location?: string;
}

export const companies: Company[] = [
  {
    name: "Union 54 (YC S21)",
    logo: "/companies/union54.png",
    role: "Software Engineer",
    link: "https://www.linkedin.com/company/union54/posts/?feedView=all",
    period: "Sept 2025 - Present",
    location: "Remote, USA",
    description:
      "Feature owner of the regulatory reporting service, ensuring central bank compliance by engineering a data pipeline from DynamoDB to structured BI reports. Resurrected the core API for issuing MasterCard debit cards, while ensuring platform reliability through active on-call maintenance.",
  },

  {
    name: "Stout",
    logo: "/companies/stout.png",
    role: "Software Engineering Contractor",
    period: "August 2025 - September 2025",
    link: "https://www.linkedin.com/company/stout/about/",
    location: "Remote, Chicago, IL, USA",
    description:
      "Built a custom automation tool using Python to download and sort SEC 10-K filings. Replaced manual data entry with an automated schedule, speeding up document access by 70% and saving the company $70,000 per year in labor costs.",
  },
  {
    name: "Oil Changers",
    logo: "/companies/oil-changers.png",
    role: "Software Engineering Contractor",
    period: "Jan 2025 - September 2025",
    description:
      "Built a predictive analytics system for Breeze Autocare across 200+ locations in the united states to improve inventory efficiency. Led the rollout of real-time alerting infrastructure across 4+ projects and established a modular Domain-Driven Design (DDD) architecture that saved 20+ hours of rework per major change. Delivered full-stack predictive analytics features and client-facing reports, while implementing reusable CI/CD pipelines that reduced feature wait times by 70+ hours.",
    link: "https://www.linkedin.com/company/oil-changers-ca/posts/?feedView=all",
    location: "Remote, Pleasanton, CA, USA",
  },
  {
    name: "Aiponics Inc",
    logo: "/companies/hrvst.png",
    role: "Software Engineering Contractor",
    period: "Jul 2024 - Dec 2025",
    location: "Remote, Seattle, WA, USA",
    description:
      "Helped Aiponics expand from B2B to consumer markets, generating $1M in revenue by connecting their platform to a major delivery app. Automated 90% of ordering workflows so the team could handle more clients. Automated their weekly reporting. Replaced a slow manual Excel process with real-time dashboards that update in under 5 minutes, saving the team days of work every week.",
    link: "https://www.linkedin.com/company/aiponics/posts/?feedView=all",
  },

  {
    name: "The Zig Group",
    logo: "/companies/breeze.png", // Using Breeze as it's under Zig? Or maybe Shop and Smile? User said Breeze is under Zig. I'll use a generic icon or maybe I should have generated a Zig logo. I'll use the Breeze one for Breeze entry if I have one.
    role: "Software Engineering Consultant",
    period: "Jul 2024 - Aug 2025",
    location: "Remote, Seattle, Washington, USA",
    description:
      "Architected an AI-driven internal CRM that transformed client onboarding by automating Statement of Work generation and converting contracts into actionable project tasks in Zoho. This removed repetitive admin overhead and accelerated project kickoffs. Also built 'Ask AI,' an internal tool that reduced new hire ramp-up time by providing instant answers to project timelines and client history.",
    link: "https://www.linkedin.com/company/the-zig/",
  },

  {
    name: "Shop & Smile",
    logo: "/companies/shop-and-smile.png",
    role: "Founding Software Engineer",
    period: "May 2023 - Aug 2024",
    location: "Remote, Brussels, Belgium",
    description:
      "Improved deployment times by 60x for 24+ backend services by migrating to a faster AWS Lambda deployment tool. Developed Rust and Node.js CLI tools that increased developer velocity by 25%. Implemented end-to-end type-safe wrappers for AWS EventBridge and used Domain-Driven Design (DDD) to enable rapid database replacements without logic rewrites.",
    link: "https://shopnsmile.org/",
  },
  {
    name: "Bwangu Delivery",
    logo: "/companies/wango.png",
    role: "Founding Software Engineer",
    period: "Feb 2021 - Dec 2023",
    location: "Remote, Copperbelt, Zambia",
    description:
      "Solo Founding Engineer: Built the entire tech stack (Mobile, API, Admin Ops) from scratch. Scaled platform to 10,000+ orders/year and achieving 25% MoM growth with zero downtime.",
    link: "https://www.linkedin.com/company/bwangudelivery/posts/?feedView=all",
  },
  {
    name: "iSampo",
    logo: "/companies/isample.png",
    role: "Software Engineer",
    period: "Jul 2020 - Feb 2021",
    location: "Copperbelt, Zambia",
    description:
      "Rebuilt the online store, replacing an old system with a reliable API and a fast mobile app that significantly improved the shopping experience.",
  },
];
