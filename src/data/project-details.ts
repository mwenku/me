export const projectDetails: Record<
  string,
  {
    category: string;
    problem: string;
    contribution: string;
    decision?: string;
  }
> = {
  Mitarbo: {
    category: "HR & team operations",
    problem:
      "Teams need a shared place to coordinate people, time, equipment, onboarding, and day-to-day work.",
    contribution:
      "A single workspace for people management, leave, equipment, onboarding, time tracking, projects, chat, a knowledge hub, and notices.",
  },
  "Songo Music Game": {
    category: "Browser music game",
    problem:
      "Music trivia players need familiar song choices and a shared way to run rounds and compare scores.",
    contribution:
      "Implemented searchable song rounds with four answer choices, adjustable preview lengths, and solo or multiplayer scoring.",
    decision:
      "Used clip length to control difficulty, awarding more points for shorter previews.",
  },
  Raven: {
    category: "Messaging automation",
    problem:
      "Conversations spread across messaging apps make it harder to keep up without switching inboxes.",
    contribution:
      "Implemented account connections and message forwarding into a chosen inbox through a web dashboard.",
    decision:
      "Kept replies on each conversation’s original network so contacts can continue using their existing apps.",
  },
  Fleetle: {
    category: "Fleet management",
    problem:
      "Fleet operators need vehicle locations, service needs, and driver activity in one operational view.",
    contribution:
      "Implemented fleet workflows for live vehicle tracking, maintenance scheduling, and route planning.",
  },
  "Car Breakers’ Wall": {
    category: "Automotive marketplace",
    problem:
      "Finding car parts, vehicles, and repair services requires connecting buyers with relevant sellers and providers.",
    contribution:
      "Implemented marketplace listings for parts, vehicles, and automotive services, with messaging between buyers and providers.",
  },
};
