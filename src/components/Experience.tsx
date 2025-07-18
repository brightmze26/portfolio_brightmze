"use client";

import { motion } from "framer-motion";
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
  SiFirebase,
  SiCypress,
  SiGit,
  SiThreedotjs,
} from "react-icons/si";

const skillIcons = [
  { Icon: SiHtml5, label: "HTML" },
  { Icon: SiCss3, label: "CSS" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiBootstrap, label: "Bootstrap" },
  { Icon: SiPhp, label: "PHP" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiThreedotjs, label: "Three.Js" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiCypress, label: "Cypress" },
  { Icon: SiGit, label: "Git" },
];

const experiences = [
  {
    year: "2024",
    roles: [
      {
        title: "React Developer",
        company: "Betr Beta",
        desc: `Developed Next.js apps with Cypress+Cucumber testing and Firebase integration for auth, database, and cloud functions.`,
      },
      {
        title: "Web Developer",
        company: "HIMA Geofisika PEDRA",
        desc: `Designed and deployed an e-voting system using PHP, Bootstrap, and SQL.`,
      },
    ],
  },
  {
    year: "2025",
    roles: [
      {
        title: "AI Training Data",
        company: "Outlier",
        desc: `Applied programming logic effectively to ensure the language output from the LLM was accurate and relevant.`,
      },
      {
        title: "Web Developer",
        company: "Geotrap Event",
        desc: `Developed a fully responsive event website using Next.js, TypeScript, and Tailwind CSS.`,
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Skills&nbsp;&amp;&nbsp;Experiences
      </h2>
      <p className="text-gray-600 text-lg text-center max-w-2xl mb-12">
        These are the skills and experiences I’ve built throughout my journey as
        a developer
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ◀︎ Skill Icons with labels */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skillIcons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 w-20"
              title={label}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow hover:scale-105 transition">
                <Icon className="w-8 h-8 text-[#4b4b4b]" />
              </div>
              <span className="text-sm text-gray-600 text-center">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* ▶︎ Experiences without dots */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {experiences.map(({ year, roles }) => (
            <div key={year}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {year}
              </h3>
              <ul className="space-y-4 pl-4 border-l-2 border-gray-300">
                {roles.map(({ title, company, desc }) => (
                  <li key={title} className="pl-4 relative">
                    {/* Removed bullet dot */}
                    <h4 className="font-medium text-gray-700">
                      {title} —{" "}
                      <span className="text-sm text-gray-500">{company}</span>
                    </h4>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
