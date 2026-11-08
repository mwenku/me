export interface Recommendation {
  name: string;
  company?: string;
  headline: string;
  date: string;
  displayDate: string;
  paragraphs: string[];
  excerpt?: string;
  photo?: string;
}

export const recommendations: Recommendation[] = [
  {
    name: "Jyri Vähä-Pietilä",
    photo: "/people/jyri-vaha-pietila.jpg",
    company: "Union 54 (YC S21)",
    headline: "CTO at Union54",
    date: "2026-09-19",
    displayDate: "September 19, 2026",
    paragraphs: [
      "I really enjoyed working with Lucas at Union54. He’s a strong communicator, easy to work with, and brings a consistently positive, can-do attitude to the team.",
      "What stood out to me was that Lucas was always willing to help, whether it was within his own area or something that benefited the wider organization. He’s dependable, constructive, and the kind of teammate who makes collaboration easier for everyone around him.",
      "I’d happily work with Lucas again.",
    ],
    excerpt:
      "I really enjoyed working with Lucas at Union54. He’s a strong communicator, easy to work with, and brings a consistently positive, can-do attitude to the team.",
  },
  {
    name: "Elijah Mwaba",
    photo: "/people/elijah-mwaba.jpg",
    company: "The Zig Group",
    headline:
      "Data Engineer, Analyst, and AI Dev | Microsoft Certified Associate | Software Developer | Microsoft Dynamics NAV Enthusiast | Church Youth Director | Church Media Director",
    date: "2025-08-27",
    displayDate: "August 27, 2025",
    paragraphs: [
      "I had the pleasure of working with Lucas on an internal tool at The Zig, and was always impressed with his strong problem-solving skills and deep knowledge in Serverless.  Beyond his technical expertise, Lucas is reliable, dedicated, and an excellent team player.",
    ],
  },
  {
    name: "Mwila Wamunyima",
    photo: "/people/mwila-wamunyima.jpg",
    headline:
      "Biomedical Engineer @ The Global Fund | Marketing Lead @ electrobiotech | Co-Founder & Ops Lead @ welo.one (formerly ArQ Media Group)",
    date: "2025-07-28",
    displayDate: "July 28, 2025",
    paragraphs: [
      "I've worked with Lucas for over two years now, and I'm always impressed by how he handles client projects. He's great at breaking things down clearly, and his laid-back style makes everything feel easy. Clients love working with him, and for good reason: he always gets the job done.",
    ],
  },
  {
    name: "Aubrey Zulu",
    photo: "/people/aubrey-zulu.jpg",
    headline:
      "Innovation & Technology Manager @MicroLoan Foundation  | Digital Transformation in Microfinance | Engineering Leader  AI · Fintech · Full-Stack",
    date: "2024-09-01",
    displayDate: "September 1, 2024",
    paragraphs: [
      "I had the pleasure of mentoring Lucas during the early days of his coding journey, and it was indeed a rewarding experience. Lucas is exceptionally passionate about technology and thrives on challenges, constantly pushing himself to learn and grow. His ability to pick up new technologies quickly is remarkable—I've seen him master new concepts and tools with ease.",
      "What sets Lucas apart is his extraordinary learning capability. He doesn't just learn fast; he also dives deep, fully understanding the nuances of what he's working on. His enthusiasm, dedication, and relentless curiosity make him a standout in any tech environment. I'm confident that Lucas will excel in any endeavour he pursues. I highly recommend him for any role or opportunity where his skills, drive, and passion will be valued.",
    ],
    excerpt:
      "What sets Lucas apart is his extraordinary learning capability. He doesn't just learn fast; he also dives deep, fully understanding the nuances of what he's working on.",
  },
  {
    name: "Kaembe Chisenga",
    photo: "/people/kaembe-chisenga.jpg",
    company: "Bwangu Delivery",
    headline: "Building Africa’s Next Logistics",
    date: "2024-01-25",
    displayDate: "January 25, 2024",
    paragraphs: [
      "Highly talented, eager to learn and try out new things, great team work force and supper passionate about tech and new technologies. Never had any issues. His innovativeness and eagerness to try out new things and products made him stand out. I highly recommend him for all complex projects (Web, app)",
    ],
  },
];
