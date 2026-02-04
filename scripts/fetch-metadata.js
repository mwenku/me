import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsPath = path.resolve(__dirname, "../src/data/projects.json");
const projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
        res.on("error", reject);
      })
      .on("error", reject);
  });
};

const extractOgImage = (html) => {
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);
  return match ? match[1] : null;
};

const run = async () => {
  console.log("Fetching metadata for projects...");
  let updated = false;

  for (const project of projects) {
    if (project.link && !project.image) {
      console.log(
        `Fetching metadata for ${project.title} (${project.link})...`,
      );
      try {
        const html = await fetchUrl(project.link);
        const image = extractOgImage(html);
        if (image) {
          project.image = image;
          console.log(`Found image for ${project.title}: ${image}`);
          updated = true;
        } else {
          console.log(`No OG image found for ${project.title}`);
        }
      } catch (err) {
        console.error(`Failed to fetch ${project.link}:`, err.message);
      }
    }
  }

  if (updated) {
    fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));
    console.log("Updated projects.json");
  } else {
    console.log("No updates needed.");
  }
};

run();
