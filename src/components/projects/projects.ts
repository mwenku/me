import projectsData from "../../data/projects.json";

export const projects = projectsData;

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
