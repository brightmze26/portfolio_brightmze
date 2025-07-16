import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiThreedotjs,
} from "react-icons/si";

import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    src: "/images/project3.jpg",
    height: 260,
    title: "TalkVideoCall App",
    desc: "A Zoom-inspired video conferencing app that supports real-time meetings using Next.js, Tailwind CSS, and TypeScript.",
    liveUrl: "https://talk-videocall-app.vercel.app/",
    stack: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
      { Icon: SiTypescript, label: "TypeScript" },
    ],
  },
  {
    id: 2,
    src: "/images/project1.jpg",
    height: 250,
    title: "Geotrap 2025",
    desc: "An event website for national high school and university competitions, built with Next.js and Tailwind CSS to deliver a clean and responsive interface.",
    liveUrl: "https://www.geotrap2025.com/",
    stack: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
      { Icon: SiTypescript, label: "TypeScript" },
    ],
  },
  {
    id: 3,
    src: "/images/project10.jpg",
    height: 230,
    title: "E‑Voting PEDRA",
    desc: "An online voting system created for student elections in the Geophysics organization, focused on ensuring voting is secure and easy to manage.",
    liveUrl: "https://pilkahimpedra.site",
    stack: [
      { Icon: SiPhp, label: "PHP" },
      { Icon: SiMysql, label: "MySQL" },
      { Icon: SiBootstrap, label: "Bootstrap" },
    ],
  },
  {
    id: 4,
    src: "/images/project4.jpg",
    height: 240,
    title: "RUN Competition Website",
    desc: "A promotional website for a running event, featuring a responsive and visually engaging interface built with modern web tools. Includes a dark/light mode toggle for improved user experience and accessibility.",
    stack: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
      { Icon: SiTypescript, label: "TypeScript" },
    ],
  },
  {
    id: 5,
    src: "/images/project6.jpg",
    height: 240,
    title: "Netflix Clone",
    desc: "A movie browsing platform inspired by Netflix, developed with React and Bootstrap to showcase dynamic content and attractive design.",
    stack: [
      { Icon: SiReact, label: "React" },
      { Icon: SiBootstrap, label: "Bootstrap" },
      { Icon: SiJavascript, label: "JavaScript" },
    ],
  },
  {
    id: 6,
    src: "/images/project2.jpeg",
    height: 270,
    title: "3D Earth Visualizer",
    desc: "An interactive web application that visualizes Earth in 3D using Three.js and React, allowing users to explore visual effects in real-time.",
    liveUrl: "https://3d-earth-web.vercel.app/",
    stack: [
      { Icon: SiReact, label: "React" },
      { Icon: SiThreedotjs, label: "Three.js" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
  {
    id: 7,
    src: "/images/project7.jpg",
    height: 220,
    title: "Bishop UI Shop",
    desc: "A conceptual shopping website UI built entirely with HTML, CSS, and vanilla JavaScript, focused on layout structure and animation effects.",
    stack: [
      { Icon: SiHtml5, label: "HTML" },
      { Icon: SiCss3, label: "CSS" },
      { Icon: SiJavascript, label: "JavaScript" },
    ],
  },
  {
    id: 8,
    src: "/images/project5.jpg",
    height: 240,
    title: "Realtime Chat App",
    desc: "A real-time messaging app built using React, Node.js, and ChatEngine.",
    stack: [
      { Icon: SiReact, label: "React" },
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
];
