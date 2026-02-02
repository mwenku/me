export const projects = [
  {
    title: "ChitChat",
    description:
      "A consumer fintech app with USD Wallets and Debit Cards. I built the regulatory reporting engine that ensured 100% compliance with central bank requirements.",
    techStack: "TypeScript, Serverless, AWS CDK, DynamoDB, Lambda, SQS, SNS",
    link: "https://onchitchat.com",
    previews: [{ link: "https://onchitchat.com", title: "Website" }],
    image: "", // Placeholder or we can try to find one later
    video: "",
  },
];

/**
 * Generates a redirect link and title based on the provided pathname.
 * @param pathname - The pathname to generate the redirect link and title from.
 * @returns An object containing the redirect link and title.
 */
export const generateProjectRedirectLink = (pathname: string) => {
  const project = projects.find(
    (project) =>
      project.title.toLowerCase().replace(/ /g, "-") === pathname.slice(1),
  );

  if (!project) {
    return {
      redirect: "/",
      title: "home",
    };
  }

  return {
    redirect: project.link,
    title: project.title.toLowerCase().replace(/ /g, "-"), // Convert title to lowercase and replace spaces with hyphens
  };
};
