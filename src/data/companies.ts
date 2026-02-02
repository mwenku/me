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
    role: "Software Engineering Consultant",
    period: "Apr 2025 - Present",
    link: "https://www.stout.com/en",
    description:
      "Built an automated system to pull and organize financial documents (10-K filings) from the SEC. This sped up document processing by 70% and saved the company over $70,000 in manual work.",
  },
  {
    name: "Oil Changers",
    logo: "/companies/oil-changers.png",
    role: "Software Engineering Consultant",
    period: "Oct 2024 - Present",
    description:
      "Created a customer tracking system to help the business understand spending habits (Customer Lifetime Value). Cleaned up their data processes, making reports 40% more consistent and faster to generate.",
    link: "https://oilchangers.com/discounts/",
  },
  {
    name: "Hrvst",
    logo: "/companies/hrvst.png",
    role: "Software Engineering Consultant",
    period: "Jul 2024 - Present",
    description:
      "Automated their weekly reporting. Replaced a slow manual Excel process with real-time dashboards that update in under 5 minutes, saving the team days of work every week.",
    link: "https://www.linkedin.com/company/aiponics/posts/?feedView=all",
  },

  {
    name: "Union 54",
    logo: "/companies/union54.png",
    role: "Software Engineer",
    link: "https://union54.com",
    description:
      "Built the card issuing API that enabled multiple fintech startups in the YC ecosystem to launch their own card programs. Scaled the platform to handle significant transaction volume during the peak of the fintech boom.",
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
      "Built a complete robust Point-of-Sale platform that allowed merchants to digitize their entire business. Enabled inventory tracking, automated tax compliance, and sales reporting—replacing pen-and-paper operations for efficiency.",
    link: "https://goshopandsmile.com",
  },
  {
    name: "Bwangu Delivery",
    logo: "/companies/wango.png",
    role: "Founding Software Engineer",
    period: "Feb 2021 - Dec 2023",
    description:
      "Solo Founding Engineer: Built the entire tech stack (Mobile, API, Admin Ops) from scratch. Scaled platform to 10,000+ orders/year and achieving 25% MoM growth with zero downtime.",
    link: "https://bwangudelivery.com",
  },
  {
    name: "iSampo",
    logo: "/companies/isample.png",
    role: "Software Engineer",
    period: "Jul 2020 - Feb 2021",
    description:
      "Modernized the commerce platform, replacing a fragile legacy system with a scalable API foundation and launching a cross-platform mobile app that significantly improved the shopping experience.",
  },
];
