import { env } from "@/env";
import { type IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";

/**
 * Site configuration.
 */
type Site = {
  /**
   * The URL of the website.
   */
  url: string;
  /**
   * The title of the website.
   */
  title: string;
  /**
   * The name of the website.
   */
  name: string;
  /**
   * The keywords of the website.
   */
  keywords: string[];
  /**
   * The title template of the website.
   * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#template
   */
  titleTemplate: string;
  /**
   * The description of the website.
   */
  description: string;
  /**
   * The GitHub username of the website.
   */
  githubUsername: string;
  /**
   * The favicons of the website.
   */
  favicons: IconDescriptor[];
};

const prodBaseURL = "https://xius-dev.vercel.app";
const devBaseURL = "http://localhost:3000";

const site: Site = {
  url: env.NEXT_PUBLIC_NODE_ENV === "production" ? prodBaseURL : devBaseURL,
  title: "Loch Yan",
  name: "Loch Yan",
  keywords: ["loc-yan0791", "Next.js", "React", "TypeScript", "Node.js"],
  titleTemplate: "- Loch Yan",
  description: "Loch Yan • Full-stack Developer",
  githubUsername: "loc-yan0791",
  favicons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/logo.png",
    },
  ],
};

export default site;