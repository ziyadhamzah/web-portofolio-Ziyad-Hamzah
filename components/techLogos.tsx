import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiVercel,
  SiGit,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";

import type { LogoItem } from "./LogoLoop";

export const techLogos: LogoItem[] = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    color: "#61DAFB",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
    color: "#ffffff",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    color: "#3178C6",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    color: "#38BDF8",
  },
  {
    node: <SiVercel />,
    title: "Vercel",
    href: "https://vercel.com",
    color: "#ffffff",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
    color: "#ffffff",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
    color: "#2496ED",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
    color: "#5FA04E",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
    color: "#F05032",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
    color: "#F24E1E",
  },
];
