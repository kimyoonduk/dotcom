import type { Project } from "./types";
import { cache } from "react";
const Projects: Project[] = [
  {
    title: "TorchCat",
    description:
      "Interactive animation tool for dynamically visualizing PyTorch and Tensorflow tensor operations.",
    href: "https://torchcat.com",
    role: "Creator",
    years: ["2024", "present"],
    tech: ["vite", "tensorflow.js", "framer-motion"],
  },
  {
    title: "Speech Analysis Toolkit for Neurodegenerative Disorders",
    description:
      "Tool for comprehensive linguistic analysis of acoustic, lexical, semantic, and syntactic dimensions in speech of speakers with neurodegenerative disorders. Currently closed-source, with open-source package planned for 2024.",
    href: "",
    role: "Creator",
    years: ["2023", "present"],
    tech: ["python", "pytorch", "whisper", "spacy", "nltk"],
  },
  {
    title: "kimYoonDuk.com",
    description: "Personal website and MDX blog.",
    href: "",
    gitUrl: "https://github.com/kimyoonduk/dotcom/tree/prod",
    role: "Creator",
    years: ["2023", "present"],
    tech: ["typescript", "react", "nextjs", "tailwind"],
  },
  {
    title: "YD's Sentiment Analysis Sandbox",
    description:
      "Web application for visualizing dictionary and heuristic-based sentiment analysis methods in real time.",
    href: "https://ydnlp.com",
    role: "Creator",
    years: ["2021"],
    tech: ["javascript", "react", "gatsby", "d3.js"],
  },
  {
    title: "Yoda Trip",
    description:
      "A mobile app for travel itinerary recommendation. Applies Bayesian modeling and integer programming for optimization with hard constraints. Algorithm patented in South Korea.",
    href: "https://yodatrip.com",
    role: "Creator",
    years: ["2020"],
    tech: ["python", "pytorch"],
  },
  {
    title: "TA Timer",
    description:
      "A vanilla JS timer for exam proctors. Features an easter egg to slow countdown for sneaky extra time.",
    href: "https://tatimer.com",
    gitUrl: "https://github.com/kimyoonduk/tatimer",
    role: "Creator",
    years: ["2016"],
    tech: ["javascript"],
  },
];

export const getProjects = cache(async (): Promise<Project[]> => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error(
      "No GITHUB_TOKEN provided. Generate a personal use token on GitHub."
    );
  }

  const withStars = await Promise.all(
    Projects.map(async (proj) => {
      const gitUrl = proj.gitUrl ?? proj.href;

      const split = gitUrl.split("/");
      //[ 'https:', '', 'github.com', 'kimyoonduk', 'ydnlp' ]
      if (split[2] === "github.com") {
        const user = split[3];
        const repo = split[4];
        const fetchUrl =
          process.env.NODE_ENV === "production"
            ? `https://api.github.com/repos/${user}/${repo}`
            : "http://localhost:3000/mock-stars-response.json";
        const { stargazers_count, message } = await (
          await fetch(fetchUrl, {
            headers: {
              Authorization: process.env.GITHUB_TOKEN ?? "",
            },
            cache: "force-cache",
          })
        ).json();

        // rate limited
        if (!stargazers_count && message) {
          console.warn(`Rate limited or error: ${message}`);
          return proj;
        }

        return {
          ...proj,
          stars: stargazers_count,
          gitUrl: gitUrl,
        };
      }
      return proj;
    })
  );

  return withStars;
});

export default getProjects;
